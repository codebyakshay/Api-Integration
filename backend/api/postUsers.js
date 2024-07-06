const express = require("express");
const db = require("../database");

const router = express.Router();

// Add a new user
router.post("/users", (req, res) => {
  const { name, password } = req.body;
  const sql = `INSERT INTO users (name, password) VALUES (?, ?)`;

  db.run(sql, [name, password], function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "User Created",
      id: this.lastID,
      name: name,
      password: password,
    });
  });
});

module.exports = router;
