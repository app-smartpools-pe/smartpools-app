const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Ver detalles por orden
router.get("/:ordenId", (req, res) => {
  const ordenId = req.params.ordenId;
  db.query(
    "SELECT * FROM detalle_orden WHERE orden_id = ?",
    [ordenId],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    }
  );
});

// Agregar producto a una orden
router.post("/", (req, res) => {
  const { orden_id, producto_id, nombre, cantidad, precio_unitario } = req.body;
  db.query(
    "INSERT INTO detalle_orden (orden_id, producto_id, cantidad, precio_unitario) VALUES (?, ?, ?, ?)",
    [orden_id, producto_id, nombre, cantidad, precio_unitario],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Detalle agregado", id: result.insertId });
    }
  );
});

module.exports = router;
