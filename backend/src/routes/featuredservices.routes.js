const express = require("express");
const router = express.Router();
const db = require("../config/db");
// const slugify = require("slugify");

// Obtener todos los servicios destacados
router.get("/", (req, res) => {
  db.query("SELECT * FROM featuredservices", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Obtener un servico destacado por ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM featuredservices WHERE id = ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results[0]);
    }
  );
});

// 2. Generar slugs y actualizar
// db.query(
//   "SELECT id, featuredservices FROM featuredservices",
//   (err, results) => {
//     if (err) throw err;

//     results.forEach((featuredservices) => {
//       const slug = slugify(featuredservices.featuredservices, {
//         lower: true,
//         strict: true,
//       });

//       db.query("UPDATE featuredservices SET slug = ? WHERE id = ?", [
//         slug,
//         featuredservices.id,
//       ]);
//     });

//     console.log("Slugs generados correctamente.");
//   }
// );

// Crear un servicio destacado (CORREGIDO: 7 valores)
router.post("/", (req, res) => {
  const { featuredservices, descripcion, price, category, imagen_url } =
    req.body;

  console.log("📦 Nuevo producto recibido:", req.body); // 👈 agrega esto

  db.query(
    "INSERT INTO featuredservices (featuredservices, descripcion, price, category, imagen_url) VALUES (?, ?, ?, ?, ?)",
    [featuredservices, descripcion, price, category, imagen_url],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({
        message: "Producto creado exitosamente",
        id: result.insertId,
      });
    }
  );
});

// Actualizar un servicio destacado (CORREGIDO: 7 valores)
router.put("/:id", (req, res) => {
  const { featuredservices, descripcion, price, category, imagen_url } =
    req.body;
  const id = req.params.id;

  db.query(
    "UPDATE featuredservices SET featuredservices = ?, descripcion = ?, price = ?, category = ?, imagen_url = ? WHERE id = ?",
    [featuredservices, descripcion, price, category, imagen_url, id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Producto actualizado" });
    }
  );
});

// Eliminar un servicio destacado
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM featuredservices WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Producto eliminado" });
  });
});

module.exports = router;
