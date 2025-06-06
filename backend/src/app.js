const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//

app.use((req, res, next) => {
  console.log("🔍 MÉTODO:", req.method);
  console.log("📦 RUTA:", req.path);
  console.log("📥 BODY:", req.body);
  next();
});

// Rutas
app.use("/api/test", require("./routes/test.route"));

app.use("/api/categorias", require("./routes/categoria.route"));
app.use("/api/productos", require("./routes/productos.routes"));
app.use("/api/featuredservices", require("./routes/featuredservices.routes"));
app.use("/api/quoteform", require("./routes/quoteform.routes"));
app.use("/api/usuarios", require("./routes/usuarios.routes"));
app.use("/api/ordenes", require("./routes/ordenes.routes"));
app.use("/api/detalle-orden", require("./routes/detalleOrden.routes"));

// auth sign in to site web

app.use("/api/auth", require("./routes/auth.routes"));

module.exports = app;
