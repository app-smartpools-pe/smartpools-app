const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Obtener todos los usuarios
router.get("/", (req, res) => {
  db.query("SELECT * FROM usuarios", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Obtener usuario por ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM usuarios WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
});

// Crear usuario
router.post("/", (req, res) => {
  const { nombre, email, password, rol } = req.body;
  db.query(
    "INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)",
    [nombre, email, password, rol],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Usuario creado exitosamente", id: result.insertId });
    }
  );
});

// Actualizar usuario
router.put("/:id", (req, res) => {
  const { nombre, email, password, rol } = req.body;
  const id = req.params.id;
  db.query(
    "UPDATE usuarios SET nombre = ?, email = ?, password = ?, rol = ? WHERE id = ?",
    [nombre, email, password, rol, id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Usuario actualizado" });
    }
  );
});

// Eliminar usuario
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM usuarios WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Usuario eliminado" });
  });
});

module.exports = router;
