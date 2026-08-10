package db

import (
	"database/sql"
	"log/slog"
)

func ConnectDB() (*sql.DB, error) {
	database, err := sql.Open("sqlite3", "./data/database.db")

	if err != nil {
		slog.Error("Error connect to DB: ", "error", err)
		return nil, err
	}

	if err := database.Ping(); err != nil {
		return nil, err
	}

	return database, nil
}
