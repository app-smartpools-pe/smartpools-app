const express = require("express");
const router = express.Router();
const db = require("../config/db");
const slugify = require("slugify");

// ✅ 1. Obtener productos por categoría (rutas específicas van primero)
router.get("/categoria/:categoria", (req, res) => {
  const { categoria } = req.params;
  db.query(
    "SELECT * FROM products WHERE categoria = ?",
    [categoria],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    }
  );
});

// ✅ 2. Obtener todos los productos
router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      console.error("❌ Error en /api/productos:", err);
      return res
        .status(500)
        .json({ error: { message: err.message, code: err.code } });
    }
    res.json(results);
  });
});

// ✅ 3. Obtener un producto por slug
router.get("/slug/:slug", (req, res) => {
  const { slug } = req.params;

  db.query("SELECT * FROM products WHERE slug = ?", [slug], (err, results) => {
    if (err) return res.status(500).json({ error: err });

    if (results.length === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(results[0]);
  });
});

// ✅ 5. Crear un producto
router.post("/", (req, res) => {
  const { nombre, descripcion, precio, stock, categoria, imagen_url, marca } =
    req.body;

  const slug = slugify(nombre, {
    lower: true,
    strict: true,
  });

  db.query(
    "INSERT INTO products (nombre, descripcion, precio, stock, categoria, imagen_url, marca, slug) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [nombre, descripcion, precio, stock, categoria, imagen_url, marca, slug],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({
        message: "Producto creado exitosamente",
        id: result.insertId,
      });
    }
  );
});

// ✅ 6. Actualizar un producto
router.put("/:id", (req, res) => {
  const { nombre, descripcion, precio, stock, categoria, imagen_url, marca } =
    req.body;
  const id = req.params.id;

  db.query(
    "UPDATE products SET nombre = ?, descripcion = ?, precio = ?, stock = ?, categoria = ?, imagen_url = ?, marca = ? WHERE id = ?",
    [nombre, descripcion, precio, stock, categoria, imagen_url, marca, id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Producto actualizado" });
    }
  );
});

// ✅ 7. Eliminar un producto
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM products WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Producto eliminado" });
  });
});

module.exports = router;
