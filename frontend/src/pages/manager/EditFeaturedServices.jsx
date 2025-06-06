import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditFeaturedServices = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    featuredservices: "",
    descripcion: "",
    price: "",
    categoria: "",
    imagen_url: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/api/productos/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setForm({
          featuredservices: data.featuredservices ?? "",
          descripcion: data.descripcion ?? "",
          price: data.price ?? "",
          category: data.category ?? "",
          imagen_url: data.imagen_url ?? "",
        })
      )
      .catch((err) => console.error("Error al obtener producto:", err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `http://localhost:3000/api/featuredservices/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

    if (res.ok) {
      alert("Servicio destacado actualizado correctamente");
      navigate("/manager/featured-services");
    } else {
      alert("Error al actualizar");
    }
  };

  return (
    <main className="main" role="main">
      <div>
        <h2>Editar Servicio detacado</h2>
        <form onSubmit={handleSubmit}>
          {[
            "featuredservices",
            "descripcion",
            "price",
            "category",
            "imagen_url",
          ].map((field) => (
            <div key={field}>
              <label>{field}</label>
              <br />
              <input
                name={field}
                value={form[field] ?? ""}
                onChange={handleChange}
                required={field !== "imagen_url"}
                type={
                  field === "precio" || field === "category" ? "number" : "text"
                }
              />
              <br />
              <br />
            </div>
          ))}
          <button type="submit">Actualizar</button>
        </form>
      </div>
    </main>
  );
};

export default EditFeaturedServices;
