const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./src/config/db");
const app = require("./src/app");

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas de prueba
app.get("/", (req, res) => {
  res.send("Servidor backend smartpools funcionando ✅");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
