import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createTable, insertRequests, getRequests, getRequestById } from './db/requests.js'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(
    cors({
        origin: process.env.CLIENT_URL
    })
);
app.use(express.json());

createTable();

app.post('/requests', (req, res) => {
    const {name, email, comment} = req.body;
    if (!name || !email || !comment) {
        return res
            .status(400)
            .json({message: "Please provice all required fields"});
    }
    insertRequests({name, email, comment});
    return res.status(201).json({ok: true});
});

app.get('/requests', (req, res) => {
    res.json(getRequests());
});

app.get('/requests/:id', (req, res) => {
    res.json(getRequestById(req.params.id));
});

app.listen(PORT, () => {
    console.log("Request's server listening on: %s", PORT);
}); 