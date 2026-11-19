
import "server-only";
import oracledb from "oracledb";

const globalForOracle = globalThis as typeof globalThis & {
    oraclePool?: oracledb.Pool;
    oraclePoolPromise?: Promise<oracledb.Pool>;
};
//   console.log("\nX\nX\nX\nX\nX\nX\nX\Nx\n"+process.env.ORACLE_CONNECTION_STRING+"\nX\nX\nX\nX\nX\nX\nX\Nx\n");

async function getPool(): Promise<oracledb.Pool> {
    if (!globalForOracle.oraclePoolPromise) {

        const user = process.env.ORACLE_USER;
        const password = process.env.ORACLE_PASSWORD;
        const connectString = process.env.ORACLE_CONNECTION_STRING;

        if (!user || !password || !connectString) {
            throw new Error(
                "Missing Oracle environment variables. Check your .env configuration."
            );
        }

        globalForOracle.oraclePoolPromise = oracledb.createPool({
            user,
            password,
            connectString,
            poolMin: 2,
            poolMax: 10,
        });
    }

    globalForOracle.oraclePool =
        await globalForOracle.oraclePoolPromise;

    return globalForOracle.oraclePool;
}

export async function getConnection() {
    const pool = await getPool();
    return await pool.getConnection();
}
