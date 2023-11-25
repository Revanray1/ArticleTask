// dbconnection.ts
import { createPool, Pool } from 'mysql';

const pool: Pool = createPool({
    host: 'localhost',
    user: 'root',
    // password: process.env.DB_PASSWORD,
    database: 'test',
    connectionLimit: 1000,
    connectTimeout: 60 * 60 * 1000,
    acquireTimeout: 60 * 60 * 1000,
    timeout: 60 * 60 * 1000,
});

pool.getConnection((err, res) => {
    if (err) {
        console.log('Db connecting fails', err);
    } else {
        console.log('DataBase connected success.');
        res.release();
    }
});

export default pool;
