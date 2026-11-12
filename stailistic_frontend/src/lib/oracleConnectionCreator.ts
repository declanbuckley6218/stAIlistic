
import "server-only";
import oracledb from "oracledb";

const globalForOracle = globalThis as typeof globalThis & {
    oraclePool?: oracledb.Pool;
    oraclePoolPromise?: Promise<oracledb.Pool>;
};

async function getPool(): Promise<oracledb.Pool> {
  console.log(process.env.ORACLE_CONNECTION_STRING);
    if (!globalForOracle.oraclePoolPromise) {
        globalForOracle.oraclePoolPromise = oracledb.createPool({
            user: process.env.ORACLE_USER,
            password: process.env.ORACLE_PASSWORD,
            connectString: process.env.ORACLE_CONNECTION_STRING3,
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
