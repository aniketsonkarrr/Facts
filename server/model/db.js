import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
const connectionString = process.env.POSTGRES_CONNECTION_STRING;

const {Pool}=pg;
const pool=new Pool({
    connectionString:connectionString
});


export default pool;