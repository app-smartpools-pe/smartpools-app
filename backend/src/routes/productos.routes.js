const express = require("express");
const router = express.Router();
const db = require("../config/db");
const slugify = require("slugify");

// Obtener todos los productos
//router.get("/", (req, res) => {
  //db.query("SELECT * FROM products", (err, results) => {
    //if (err) return res.status(500).json({ error: err });
    //res.json(results);
  //});
//});  

router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
  console.error("❌ Error en /api/productos:", err);
  return res.status(500).json({ error: { message: err.message, code: err.code } });
  });
});

// Obtener un producto por ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
});

//

// 2. Generar slugs y actualizar
db.query("SELECT id, nombre FROM products", (err, results) => {
  if (err) throw err;

  results.forEach((producto) => {
    const slug = slugify(producto.nombre, {
      lower: true,
      strict: true,
    });

    db.query("UPDATE products SET slug = ? WHERE id = ?", [slug, producto.id]);
  });

  console.log("Slugs generados correctamente.");
});

// Obtener un producto por slug

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

//

// Crear un producto (CORREGIDO: 7 valores)
router.post("/", (req, res) => {
  const { nombre, descripcion, precio, stock, categoria, imagen_url, marca } =
    req.body;

  console.log("📦 Nuevo producto recibido:", req.body); // 👈 agrega esto

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

// Actualizar un producto (CORREGIDO: 7 valores)
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

// Eliminar un producto
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM products WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Producto eliminado" });
  });
});

// Obtener un producto o productos por Categoria

// En routes/productos.routes.js
// GET /api/productos/categoria/:categoria

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

module.exports = router;
