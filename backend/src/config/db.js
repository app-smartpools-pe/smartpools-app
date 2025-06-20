const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// connection.connect((err) => {
//   if (err) {
//     console.error("Error de conexión a MySQL:", err);
//     return;
//   }
//   console.log("✅ Conexión a la base de datos MySQL exitosa");
// });

module.exports = pool;
