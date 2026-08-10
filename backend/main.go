package main

import (
	"log/slog"
	"net/http"
	"os"

	"github.com/bruress/postmetric-landing/db"
	"github.com/bruress/postmetric-landing/handlers"
	"github.com/bruress/postmetric-landing/middleware"
	"github.com/bruress/postmetric-landing/services"
	"github.com/joho/godotenv"

	_ "github.com/mattn/go-sqlite3"
)

func main() {

	if err := godotenv.Load(); err != nil {
		slog.Info("No .env file found", "error", err)
	}

	database, err := db.ConnectDB()

	if err != nil {
		slog.Error("Error creating database", "error", err)
		return
	}

	defer database.Close()

	err = db.CreateTable(database)

	if err != nil {
		slog.Error("Error creating table", "error", err)
	}

	sheetService := services.NewSheet()
	h := handlers.NewHandlers(database, sheetService)

	mux := http.NewServeMux()

	h.SetRoutes(mux)

	port := os.Getenv("PORT")

	if port == "" {
		port = ":3000"
	}

	slog.Info("Server started on http://localhost" + port)

	handler := middleware.EnableCORS(mux)
	err = http.ListenAndServe(port, handler)

	if err != nil {
		slog.Error("Server failed to start", "error", err)
	}

}
