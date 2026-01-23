/* connect db */
import db from './connection.js';

/* create table */
export const createTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS requests (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL CHECK (length(trim(name))>0),
            email TEXT NOT NULL CHECK (length(trim(email))>0 AND email like '%_@_%._%'),
            comment TEXT NOT NULL CHECK (length(trim(comment))>0),
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `;
    db.prepare(sql).run();
};

/* add request */
export const insertRequests = ({name, email, comment}) => {
    const sql = `
        INSERT INTO requests (name, email, comment)
        VALUES (?, ?, ?)
    `;
    db.prepare(sql).run(name, email, comment);
};

/* get all requests */
export const getRequests = () => {
    const sql = `
        SELECT * FROM requests
    `;
    const rows = db.prepare(sql).all();
    return rows;
};

/* get requets by id */
export const getRequestById = (id) => {
    const sql = `
        SELECT * from requests
        WHERE id = ?
    `;
    const row = db.prepare(sql).get(id);
    return row;
};
