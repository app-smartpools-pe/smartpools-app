import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PedidoExitoso = () => {
  const { id } = useParams();
  const [pedido, setPedido] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/ordenes/${id}`)
      .then((res) => res.json())
      .then((data) => setPedido(data))
      .catch((err) => console.error("Error al obtener pedido:", err));
  }, [id]);

  return (
    <main className="main" role="main">
      <div>
        <h2>¡Gracias por tu compra! 🎉</h2>
        <p>
          Tu número de pedido es: <strong>#{id}</strong>
        </p>
        <p>Te hemos enviado un correo con los detalles del pedido.</p>

        {pedido && (
          <>
            <h3>Resumen del pedido:</h3>
            <ul>
              {pedido.detalles?.map((item) => (
                <li key={item.producto_id}>
                  {item.nombre} x{item.cantidad} - S/.{item.precio_unitario}
                </li>
              ))}
            </ul>
            <p>
              <strong>Total:</strong> S/.{pedido.total}
            </p>
          </>
        )}

        <button onClick={() => navigate("./")}>Volver al inicio</button>
      </div>
    </main>
  );
};

export default PedidoExitoso;
