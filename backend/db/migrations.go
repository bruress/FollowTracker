package db

import (
	"database/sql"
)

func CreateTable(database *sql.DB) error {
	_, err := database.Exec(
		`CREATE TABLE IF NOT EXISTS requests (
			id INTEGER PRIMARY KEY, 
			name TEXT NOT NULL CHECK (length(trim(name))>0), 
			email TEXT NOT NULL UNIQUE CHECK (length(trim(email))>0 AND email like '%_@_%._%'),
			comment TEXT NOT NULL CHECK (length(trim(comment))>0),
			created_at TEXT DEFAULT CURRENT_TIMESTAMP
		);
	`)

	return err
}
