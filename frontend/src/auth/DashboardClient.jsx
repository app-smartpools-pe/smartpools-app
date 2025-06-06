import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DashboardClient = () => {
  const [resumen, setResumen] = useState({
    totalProductos: 0,
    totalPedidos: 0,
    totalUsuarios: 0,
  });

  useEffect(() => {
    const fetchResumen = async () => {
      try {
        const [productosRes, pedidosRes] = await Promise.all([
          fetch("http://localhost:3000/api/productos").then((res) =>
            res.json()
          ),
          fetch("http://localhost:3000/api/ordenes").then((res) => res.json()),
        ]);

        setResumen({
          totalProductos: productosRes.length,
          totalPedidos: pedidosRes.length,
          // Puedes agregar usuarios más adelante
        });
      } catch (err) {
        console.error("Error al cargar resumen admin", err);
      }
    };

    fetchResumen();
  }, []);

  return (
    <main className="main" role="main">
      <div>
        <h2>Dashboard Client</h2>
        <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
          <div style={cardStyle}>
            <h3>Productos</h3>
            <p>Total: {resumen.totalProductos}</p>
            <Link to="/admin/productos">Ver productos</Link>
          </div>
          <div style={cardStyle}>
            <h3>Pedidos</h3>
            <p>Total: {resumen.totalPedidos}</p>
            <Link to="/admin/pedidos">Ver pedidos</Link>
          </div>
          {/* Puedes agregar más tarjetas para usuarios o ventas */}
        </div>
      </div>
    </main>
  );
};

const cardStyle = {
  border: "1px solid #ccc",
  padding: "1rem",
  borderRadius: "8px",
  width: "200px",
  backgroundColor: "#f9f9f9",
};

export default DashboardClient;
