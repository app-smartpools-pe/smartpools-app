const express = require("express");
const router = express.Router();
const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = "secretoUltraSeguro123"; // ⚠️ Mejora esto con una variable de entorno

// Registro (opcional para admins manuales)
router.post("/register", async (req, res) => {
  const { nombre, email, password, rol } = req.body;
  const hash = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)",
    [nombre, email, hash, rol || "cliente"],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: "Usuario creado" });
    }
  );
});

// Login
router.post("/sign-in", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) return res.status(500).json({ error: err });
      if (results.length === 0)
        return res.status(401).json({ message: "Credenciales inválidas" });

      const usuario = results[0];
      const coincide = await bcrypt.compare(password, usuario.password);

      if (!coincide)
        return res.status(401).json({ message: "Contraseña incorrecta" });

      // Crear token
      const token = jwt.sign({ id: usuario.id, rol: usuario.rol }, SECRET, {
        expiresIn: "2h",
      });

      res.json({
        message: "Inicio de sesión correcto",
        token,
        usuario: {
          id: usuario.id,
          nombre: usuario.nombre,
          email: usuario.email,
          rol: usuario.rol,
        },
      });
    }
  );
});

module.exports = router;
