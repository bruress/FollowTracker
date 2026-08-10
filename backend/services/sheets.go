package services

import (
	"bytes"
	"encoding/json"
	"log/slog"
	"net/http"
	"os"
)

type SheetsHook struct {
	url string
}

func NewSheet() *SheetsHook {
	return &SheetsHook{
		url: os.Getenv("SHEETS_URL"),
	}
}

func (s *SheetsHook) AppendRequest(name string, email string, comment string) error {
	if s.url == "" {
		slog.Warn("Sheets URL is not set, skipping Google Sheets")
		return nil
	}

	payload := map[string]string{
		"name":    name,
		"email":   email,
		"comment": comment,
	}

	body, err := json.Marshal(payload)

	if err != nil {
		return err
	}

	resp, err := http.Post(s.url, "application/json", bytes.NewReader(body))

	if err != nil {
		return err
	}

	defer resp.Body.Close()

	return nil
}
