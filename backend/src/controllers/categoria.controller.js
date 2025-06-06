const categoriaModel = require("../models/categoria.model");

const getCategorias = async (req, res) => {
  try {
    const categorias = await categoriaModel.getAllCategorias();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener categorías", error });
  }
};

const getCategoria = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await categoriaModel.getCategoriaById(id);
    if (!categoria) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }
    res.status(200).json(categoria);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener categoría", error });
  }
};

const createCategoria = async (req, res) => {
  const { nombre, descripcion } = req.body;
  try {
    const result = await categoriaModel.createCategoria(nombre, descripcion);
    res
      .status(201)
      .json({ message: "Categoría creada exitosamente", id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: "Error al crear categoría", error });
  }
};

module.exports = {
  getCategorias,
  getCategoria,
  createCategoria,
};
