import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

const filePath = path.join(__dirname, "requests.json");

// GET all requests
app.get("/api/requests", (req, res) => {
    const data = fs.readFileSync(filePath, "utf-8");
    res.json(JSON.parse(data));
});

// GET request by ID
app.get("/api/requests/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const request = data.find(r => r.id == req.params.id);

    if (!request) {
        return res.status(404).json({ message: "Request not found" });
    }

    res.json(request);
});

// POST new request
app.post("/api/requests", (req, res) => {
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const newRequest = {
        id: Date.now(),
        name: req.body.name,
        email: req.body.email,
        category: req.body.category,
        description: req.body.description,
        priority: req.body.priority
    };

    data.push(newRequest);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.status(201).json(newRequest);
});

// PUT update request
app.put("/api/requests/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const index = data.findIndex(r => r.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: "Request not found" });
    }

    data[index] = {
        ...data[index],
        name: req.body.name,
        email: req.body.email,
        category: req.body.category,
        description: req.body.description,
        priority: req.body.priority
    };

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.json(data[index]);
});

// DELETE request
app.delete("/api/requests/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const newData = data.filter(r => r.id != req.params.id);

    if (data.length === newData.length) {
        return res.status(404).json({ message: "Request not found" });
    }

    fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));

    res.json({ message: "Request deleted successfully" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});