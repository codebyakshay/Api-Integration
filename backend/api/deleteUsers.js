// api/deleteUser.js
const express = require("express");
const db = require("../database");

const router = express.Router();

// Delete a user by ID
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM users WHERE id = ?`;

  db.run(sql, id, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "User Deleted",
      rowsAffected: this.changes,
    });
  });
});

module.exports = router;
