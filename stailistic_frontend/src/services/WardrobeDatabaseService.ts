import "server-only";
import { ClothingItem } from "@/types/wardrobe";
import oracledb from "oracledb";
import { getConnection } from "@/lib/oracleConnectionCreator";

export async function getWardrobeItems(
  userid: number,
): Promise<ClothingItem[]> {
  let connection;

  try {
    connection = await getConnection();

    const result = await connection.execute(
      `
            SELECT
                c.ID,
                c.USERID,
                c.NAME,
                c.BRAND,
                c.COLOR,
                c.TYPE,
                c.MATERIAL,
                c.ITEM_SIZE,
                c.IMAGE,
                COALESCE(
                    (
                        SELECT JSON_ARRAYAGG(t.TAG)
                        FROM ItemTags t
                        WHERE t.ITEMID = c.ID
                    ),
                    JSON_ARRAY()
                ) AS TAGS
            FROM ClothingItem c
            WHERE c.USERID = :userid
            ORDER BY c.ID
            `,
      { userid },
      { outFormat: oracledb.OUT_FORMAT_OBJECT },
    );

    return (result.rows || []).map((row: any) => {
      let imageBase64: string | undefined;

      if (row.IMAGE) {
        const buffer = Buffer.isBuffer(row.IMAGE)
          ? row.IMAGE
          : Buffer.from(row.IMAGE);

        imageBase64 = `data:image/jpeg;base64,${buffer.toString("base64")}`;
      }

      return {
        id: row.ID,
        userid: row.USERID,
        name: row.NAME,
        brand: row.BRAND,
        color: row.COLOR,
        type: row.TYPE,
        material: row.MATERIAL,
        size: row.ITEM_SIZE,
        image: imageBase64,
        tags: typeof row.TAGS === "string" ? JSON.parse(row.TAGS) : row.TAGS,
      };
    }) as ClothingItem[];
  } catch (error) {
    console.error("Wardrobe Service Error:", error);
    throw error;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

/* Update a clothing item owned by given user. True if update successful, fail if not. */
export async function updateWardrobeItem(
  itemId: string,
  userid: number,
  updates: Partial<Omit<ClothingItem, "id" | "userid">>, // It and userid are not updatable
): Promise<boolean> {
  let connection;
  try {
    connection = await getConnection();

    const columnMap: Record<string, string> = {
      name: "NAME",
      brand: "BRAND",
      color: "COLOR",
      type: "TYPE",
      material: "MATERIAL",
      size: "ITEM_SIZE",
    };

    // Removing all the empty or undefined values from the updates object
    const setClauses: string[] = [];
    const binds: Record<string, any> = { id: itemId, userid };

    for (const [key, column] of Object.entries(columnMap)) {
      const value = updates[key as keyof typeof updates];
      if (value !== undefined) {
        // p_ cuz of oracle has reserved keyword
        setClauses.push(`${column} = :p_${key}`);
        binds[`p_${key}`] = value;
      }
    }

    // Encoding the image first.
    if (updates.image !== undefined) {
      if (updates.image) {
        // Stripping teh data url prefix to get the base64 string
        const base64Data = updates.image.replace(
          /^data:image\/\w+;base64,/,
          "",
        );
        setClauses.push(`IMAGE = :p_image`);
        binds.p_image = {
          val: Buffer.from(base64Data, "base64"),
          type: oracledb.BLOB,
        };
      } else {
        setClauses.push(`IMAGE = NULL`);
      }
    }

    if (setClauses.length > 0) {
      // Running the update, also checking if ID and USERID match to ensure the user owns the item.
      const result = await connection.execute(
        `
            UPDATE ClothingItem
            SET ${setClauses.join(", ")}
            WHERE ID = :id
              AND USERID = :userid
            `,
        binds,
        { autoCommit: false },
      );
      // No rows updated roll back and return false
      if (!result.rowsAffected) {
        await connection.rollback();
        return false;
      }
    } else {
      // Runs if only tags being changed, checking ownership of the item by the user. If not owned, return false.
      const check = await connection.execute(
        `
            SELECT 1
            FROM ClothingItem
            WHERE ID = :id
              AND USERID = :userid
            `,
        { id: itemId, userid },
        { outFormat: oracledb.OUT_FORMAT_OBJECT },
      );

      if (!check.rows || check.rows.length === 0) {
        return false;
      }
    }

    // if tags are provided replace the existing one with the new one
    if (updates.tags !== undefined) {
      await connection.execute(
        `
            DELETE FROM ItemTags
            WHERE ITEMID = :id
            `,
        { id: itemId },
        { autoCommit: false },
      );

      if (updates.tags.length > 0) {
        const tagBinds = updates.tags.map((tag) => ({ id: itemId, tag }));
        await connection.executeMany(
          `
                INSERT INTO ItemTags (ITEMID, TAG)
                VALUES (:id, :tag)
                `,
          tagBinds,
          { autoCommit: false },
        );
      }
    }

    // Commit all the changes
    await connection.commit();
    return true;
  } catch (error) {
    console.error("Wardrobe Update Error:", error);
    if (connection) {
      await connection.rollback();
    }
    throw error;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}
