import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

const Categories = () => {
  const [productos, setProductos] = useState([]);
  const { agregarAlCarrito } = useCart();
  const { categoria } = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/api/productos")
      .then((res) => res.json())
      .then((data) => {
        const filtrados = data.filter(
          (p) => p.categoria.toLowerCase() === categoria.toLowerCase()
        );
        setProductos(filtrados);
      })
      .catch((err) => console.error("Error al cargar productos:", err));
  }, [categoria]);

  return (
    <main className="main" role="main">
      <h2>Productos de {categoria}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
        {productos.length > 0 ? (
          productos.map((prod) => (
            <div
              key={prod.id}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                width: "250px",
              }}
            >
              <img
                src={prod.imagen_url}
                alt={prod.nombre}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <h3>{prod.nombre}</h3>
              <p>{prod.descripcion}</p>
              <p>
                <strong>S/. {prod.precio}</strong>
              </p>
              <button onClick={() => agregarAlCarrito(prod)}>
                Agregar al carrito
              </button>
            </div>
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </div>
    </main>
  );
};

export default Categories;
