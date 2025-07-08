const express = require("express");
const router = express.Router();
const db = require("../config/db");
const slugify = require("slugify");

// 🔹 Obtener todos los productos
router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      console.error("❌ Error en /api/productos:", err);
      return res.status(500).json({ error: { message: err.message, code: err.code } });
    }
    res.json(results);
  });
});

// 🔹 Obtener producto por ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
});

// 🔹 Obtener producto por Slug
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

// 🔹 Obtener productos por categoría
router.get("/categoria/:categoria", (req, res) => {
  const { categoria } = req.params;
  db.query("SELECT * FROM products WHERE categoria = ?", [categoria], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// 🔹 Crear producto
router.post("/", (req, res) => {
  const { nombre, descripcion, precio, stock, categoria, imagen_url, marca } = req.body;

  console.log("📦 Nuevo producto recibido:", req.body);

  db.query(
    "INSERT INTO products (nombre, descripcion, precio, stock, categoria, imagen_url, marca) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [nombre, descripcion, precio, stock, categoria, imagen_url, marca],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({
        message: "Producto creado exitosamente",
        id: result.insertId,
      });
    }
  );
});

// 🔹 Actualizar producto
router.put("/:id", (req, res) => {
  const { nombre, descripcion, precio, stock, categoria, imagen_url, marca } = req.body;
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

// 🔹 Eliminar producto
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM products WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Producto eliminado" });
  });
});

// 🔹 [Opcional] Ruta protegida para regenerar slugs manualmente
router.post("/generar-slugs", (req, res) => {
  db.query("SELECT id, nombre FROM products", (err, results) => {
    if (err) return res.status(500).json({ error: err });

    results.forEach((producto) => {
      const slug = slugify(producto.nombre || "", {
        lower: true,
        strict: true,
      });

      db.query("UPDATE products SET slug = ? WHERE id = ?", [slug, producto.id]);
    });

    res.json({ message: "Slugs generados correctamente." });
  });
});

module.exports = router;
