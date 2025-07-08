const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const db = require("./src/config/db"); // si tu base de datos se conecta aquí
const app = require("./src/app");      // tus rutas o middleware personalizados

const appExpress = express();

// Middlewares
appExpress.use(cors());
appExpress.use(express.json());

// Rutas backend (como /api)
appExpress.use("/api", app);

// 🔽 Servir frontend de React (dist)
const frontendPath = path.join(__dirname, "../frontend/dist");
appExpress.use(express.static(frontendPath));

// 🔁 Redirección para SPA (React Router)
appExpress.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Iniciar servidor
const PORT = process.env.PORT || 3306;
appExpress.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
