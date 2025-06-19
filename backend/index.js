const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./src/config/db");
const app = require("./src/app");

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas de prueba backend
app.get("/api/test", (req, res) => {
  res.send("Servidor backend smartpools funcionando ✅");
});

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const db = require("./src/config/db");
// const app = require("./src/app");
// const path = require("path");

// const buildPath = path.join(__dirname, "frontend", "build");

// // Servir los archivos estáticos (React compilado)
// app.use(express.static(buildPath));

// // Ruta comodín: cualquier ruta que no coincida con un archivo físico → devolver index.html
// app.get("/", (req, res) => {
//   res.sendFile(path.join(buildPath, "index.html"));
// });

// const PORT = process.env.PORT || 3306;

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Rutas de prueba
// app.get("/", (req, res) => {
//   res.send("Servidor backend smartpools funcionando ✅");
// });

// // Iniciar servidor
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });
