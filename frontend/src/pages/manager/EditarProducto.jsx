import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditarProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    imagen_url: "",
    stock: "",
    categoria: "",
    marca: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/api/productos/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setForm({
          nombre: data.nombre ?? "",
          descripcion: data.descripcion ?? "",
          precio: data.precio ?? "",
          imagen_url: data.imagen_url ?? "",
          stock: data.stock ?? "",
          categoria: data.categoria ?? "",
          marca: data.marca ?? "",
        })
      )
      .catch((err) => console.error("Error al obtener producto:", err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3000/api/productos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Producto actualizado correctamente");
      navigate("/manager/productos");
    } else {
      alert("Error al actualizar");
    }
  };

  return (
    <main className="main" role="main">
      <div>
        <h2>Editar Producto</h2>
        <form onSubmit={handleSubmit}>
          {[
            "nombre",
            "descripcion",
            "precio",
            "imagen_url",
            "stock",
            "categoria",
            "marca",
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
                  field === "precio" || field === "stock" ? "number" : "text"
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

export default EditarProducto;
