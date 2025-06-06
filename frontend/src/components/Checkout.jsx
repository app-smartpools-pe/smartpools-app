import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../../css/globalappstyles.css";

const Checkout = () => {
  const { carrito, vaciarCarrito } = useCart();

  const navigate = useNavigate();

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const finalizarCompra = async () => {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    try {
      const usuario_id = 1; // Obtener este valor desde tu contexto de usuario

      const response = await fetch("http://localhost:3000/api/ordenes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario_id, productos: carrito, total }),
      });

      const data = await response.json();
      if (response.ok && data.ordenId) {
        alert("¡Pedido realizado con éxito!");
        vaciarCarrito(); // Limpiar el carrito
        navigate(`/pedido-exitoso/${data.ordenId}`);
      } else {
        alert("Error al enviar pedido: " + data.message);
      }
    } catch (error) {
      console.error("Error al enviar pedido:", error);
      alert("Hubo un problema al conectar con el servidor");
    }
  };

  return (
    <main className="main" role="main">
      <div>
        <h2>Finalizar Compra</h2>
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío, no puedes proceder con la compra.</p>
        ) : (
          <>
            <ul>
              {carrito.map((item) => (
                <li key={item.id}>
                  {item.nombre} - {item.cantidad} x S/.{item.precio}
                </li>
              ))}
            </ul>
            <p>
              <strong>Total:</strong> S/.{total.toFixed(2)}
            </p>
            <button onClick={finalizarCompra}>
              Confirmar y Finalizar Compra
            </button>
          </>
        )}
      </div>
    </main>
  );
};

export default Checkout;
