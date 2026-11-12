import { ClothingItem } from "@/types/wardrobe";
import oracledb from "oracledb";
import { getConnection } from "@/lib/oracleConnectionCreator";
import "server-only";
export async function getWardrobeItems(
    userid: number
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
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );

        return (result.rows || []).map((row: any) => {
            let imageBase64: string | undefined;

            if (row.IMAGE) {
                const buffer = Buffer.isBuffer(row.IMAGE)
                    ? row.IMAGE
                    : Buffer.from(row.IMAGE);

                imageBase64 =
                    `data:image/jpeg;base64,${buffer.toString("base64")}`;
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
                tags: typeof row.TAGS === "string"
                    ? JSON.parse(row.TAGS)
                    : row.TAGS
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