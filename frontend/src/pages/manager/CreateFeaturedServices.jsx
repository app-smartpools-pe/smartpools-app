import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/globalappstyles.css";

const CreateFeaturedServices = () => {
  const [form, setForm] = useState({
    featuredservices: "",
    descripcion: "",
    price: "",
    category: "",
    imagen_url: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/featuredservices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Servicio destacado creado exitosamente");
      navigate("/manager/featured-services");
    } else {
      alert("Error al crear Servicio destacado");
    }
  };

  return (
    <main className="main" role="main">
      <div className="built-new-product-container">
        <div className="">
          <div className="rs-l-built-new-product-header">
            <div className="rs-built-new-header">
              <h2 className="rs-built-new-header">
                Crear nuevo Servicio destacado
              </h2>
            </div>
            <div className="rs-formBuiltlNewProdcut">
              <form className="builtNewProduct" onSubmit={handleSubmit}>
                {[
                  "featuredservices",
                  "descripcion",
                  "price",
                  "categoria",
                  "imagen_url",
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
                        field === "price" || field === "category"
                          ? "number"
                          : "text"
                      }
                    />
                  </div>
                ))}
                <div className="buttonSaveFormBuiltNewProduct">
                  <button type="submit">+ Crear servicio destacado</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateFeaturedServices;
