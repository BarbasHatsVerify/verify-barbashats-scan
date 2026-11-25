const express = require("express");
const Database = require("better-sqlite3");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const db = new Database(process.env.DB_PATH || path.join(__dirname, "scans.sqlite"));

db.exec(`
  CREATE TABLE IF NOT EXISTS counters (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    total INTEGER NOT NULL
  );
  INSERT OR IGNORE INTO counters (id, total) VALUES (1, 0);
`);

const increment = db.prepare("UPDATE counters SET total = total + 1 WHERE id = 1");
const readCount = db.prepare("SELECT total FROM counters WHERE id = 1");

app.use(express.static(path.join(__dirname, "public")));

app.post("/api/scan", (req, res) => {
  increment.run();
  res.set("Cache-Control", "no-store");
  res.json({ count: readCount.get().total });
});

app.get("/api/scan", (req, res) => {
  res.set("Cache-Control", "no-store");
  res.json({ count: readCount.get().total });
});

app.listen(PORT, () => console.log(`Servidor listo en puerto ${PORT}`));
