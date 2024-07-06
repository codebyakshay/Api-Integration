const express = require("express");
const db = require("../database");

const router = express.Router();

// Update a user by ID
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, password } = req.body;
  const sql = `UPDATE users SET name = ?, password = ? WHERE id = ?`;

  db.run(sql, [name, password, id], function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "User Updated",
      rowsAffected: this.changes,
      name,
      password,
    });
  });
});

module.exports = router;
