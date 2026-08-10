package handlers

import (
	"database/sql"
	"encoding/json"
	"log/slog"
	"net/http"
	"strconv"

	"github.com/bruress/postmetric-landing/middleware"
	"github.com/bruress/postmetric-landing/models"
	"github.com/bruress/postmetric-landing/services"
)

type Handlers struct {
	DB     *sql.DB
	Sheets *services.SheetsHook
}

type submitPayload struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Comment string `json:"comment"`
}

func NewHandlers(db *sql.DB, sheets *services.SheetsHook) *Handlers {
	return &Handlers{DB: db, Sheets: sheets}
}

func (h *Handlers) SetRoutes(mux *http.ServeMux) {
	mux.HandleFunc("/api/submit", h.handleSubmit)
	mux.Handle("/api/requests", middleware.BasicAuth(http.HandlerFunc(h.handleGetRequests)))
	mux.Handle("/api/request", middleware.BasicAuth(http.HandlerFunc(h.handleGetRequestById)))
}

func (h *Handlers) handleSubmit(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Only POST method allowed", http.StatusMethodNotAllowed)
		return
	}

	var payload submitPayload

	if err := json.NewDecoder(r.Body).Decode(&payload); err != nil {
		http.Error(w, "Invalid JSON format", http.StatusBadRequest)
		slog.Error("Failed to decode JSON", "error", err)
		return
	}

	if payload.Name == "" || payload.Email == "" || payload.Comment == "" {
		http.Error(w, "All fields are required", http.StatusBadRequest)
		return
	}

	err := models.InsertRequest(h.DB, payload.Name, payload.Email, payload.Comment)

	if err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
		slog.Error("Failed to insert request", "error", err)
		return
	}

	go func() {
		if err := h.Sheets.AppendRequest(payload.Name, payload.Email, payload.Comment); err != nil {
			slog.Error("Failed to append to Google Sheets", "error", err)
		}
	}()

	w.WriteHeader(http.StatusOK)

	slog.Info("Request submitted")
}

func (h *Handlers) handleGetRequests(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Only GET method allowed", http.StatusMethodNotAllowed)
		return
	}

	reqs, err := models.GetRequests(h.DB)

	if err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
		slog.Error("Failed to get requests", "error", err)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	if err := json.NewEncoder(w).Encode(reqs); err != nil {
		slog.Error("Failed to encode JSON", "error", err)
	}

	slog.Info("All requests fetched")

}

func (h *Handlers) handleGetRequestById(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Only GET method allowed", http.StatusMethodNotAllowed)
		return
	}

	idStr := r.FormValue("id")

	if idStr == "" {
		http.Error(w, "ID is required", http.StatusBadRequest)
		return
	}

	id, err := strconv.Atoi(idStr)

	if err != nil {
		http.Error(w, "Invalid ID format (must be a number)", http.StatusBadRequest)
		return
	}

	req, err := models.GetRequestById(h.DB, id)

	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(w, "Request not found", http.StatusNotFound)
			return
		}
		http.Error(w, "Database error", http.StatusInternalServerError)
		slog.Error("Failed to get request", "error", err)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	if err := json.NewEncoder(w).Encode(req); err != nil {
		slog.Error("Failed to encode JSON", "error", err)
	}

	slog.Info("Request fetched", "req", req)
}
