/* connect db */
import Database from 'better-sqlite3';
const db = new Database('./database.db');

/* export connection */
export default db;