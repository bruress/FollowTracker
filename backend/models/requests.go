package models

import (
	"database/sql"
)

type Request struct {
	ID        int
	Name      string
	Email     string
	Comment   string
	CreatedAt string
}

func InsertRequest(database *sql.DB, name string, email string, comment string) error {
	_, err := database.Exec(
		`INSERT INTO requests (name, email, comment)
		VALUES (?, ?, ?);`, name, email, comment,
	)

	return err
}

func GetRequests(database *sql.DB) ([]Request, error) {
	rows, err := database.Query(`SELECT * FROM requests;`)

	if err != nil {
		return nil, err
	}

	defer rows.Close()

	var requests []Request

	for rows.Next() {
		var req Request

		err := rows.Scan(
			&req.ID,
			&req.Name,
			&req.Email,
			&req.Comment,
			&req.CreatedAt,
		)

		if err != nil {
			return nil, err
		}

		requests = append(requests, req)
	}

	if err = rows.Err(); err != nil {
		return nil, err
	}

	return requests, nil
}

func GetRequestById(database *sql.DB, id int) (Request, error) {
	var req Request

	err := database.QueryRow(
		`SELECT * FROM requests
		WHERE ID = ?;`, id,
	).Scan(
		&req.ID,
		&req.Name,
		&req.Email,
		&req.Comment,
		&req.CreatedAt,
	)

	if err != nil {
		return req, err
	}

	return req, nil

}
