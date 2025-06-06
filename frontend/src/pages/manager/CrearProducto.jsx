import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/globalappstyles.css";

const CrearProducto = () => {
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    imagen_url: "",
    stock: "",
    categoria: "",
    marca: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Producto creado exitosamente");
      navigate("/manager/productos");
    } else {
      alert("Error al crear producto");
    }
  };

  return (
    <main className="main" role="main">
      <div className="built-new-product-container">
        <div className="">
          <div className="rs-l-built-new-product-header">
            <div className="rs-built-new-header">
              <h2 className="rs-built-new-header">Crear nuevo producto</h2>
            </div>
            <div className="rs-formBuiltlNewProdcut">
              <form className="builtNewProduct" onSubmit={handleSubmit}>
                {[
                  "nombre",
                  "descripcion",
                  "precio",
                  "imagen_url",
                  "stock",
                  "categoria",
                  "marca",
                ].map((field) => (
                  <div className="unit-item-form-built-new-product" key={field}>
                    <label>{field}</label>
                    <input
                      placeholder={field}
                      name={field}
                      value={form[field] || ""}
                      onChange={handleChange}
                      required={field !== "imagen_url"}
                      type={
                        field === "precio" || field === "stock"
                          ? "number"
                          : "text"
                      }
                    />
                  </div>
                ))}
                <div className="buttonSaveFormBuiltNewProduct">
                  <button type="submit">+ Crear producto</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CrearProducto;
