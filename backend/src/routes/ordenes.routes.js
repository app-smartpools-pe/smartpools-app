const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Obtener todas las órdenes
router.get("/", (req, res) => {
  db.query("SELECT * FROM ordenes", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Crear nueva orden con detalle
router.post("/", (req, res) => {
  const { usuario_id, total, productos } = req.body;

  // Insertar en la tabla ordenes
  db.query(
    "INSERT INTO ordenes (usuario_id, total) VALUES (?, ?)",
    [usuario_id, total],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });

      const ordenId = result.insertId;

      // Insertar detalles de productos
      const detalles = productos.map((p) => [
        ordenId,
        p.producto_id,
        p.nombre,
        p.cantidad,
        p.precio,
      ]);

      db.query(
        "INSERT INTO orden_detalle (orden_id, producto_id, nombre, cantidad, precio_unitario) VALUES ?",
        [detalles],
        (err2) => {
          if (err2) return res.status(500).json({ error: err2 });

          res
            .status(201)
            .json({ message: "Orden creada con detalle", ordenId });
        }
      );
    }
  );
});

module.exports = router;

// module.exports = router;
