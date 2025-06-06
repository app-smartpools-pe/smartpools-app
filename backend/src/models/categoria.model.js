const db = require("../config/db");

const getAllCategorias = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM categorias", (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const getCategoriaById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM categorias WHERE id = ?", [id], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
};

const createCategoria = (nombre, descripcion) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)";
    db.query(query, [nombre, descripcion], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

module.exports = {
  getAllCategorias,
  getCategoriaById,
  createCategoria,
};
