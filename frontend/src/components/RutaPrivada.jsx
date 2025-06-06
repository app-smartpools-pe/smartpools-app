import { Navigate } from "react-router-dom";

const RutaPrivada = ({ children, requiereManager = false }) => {
  const token = localStorage.getItem("token");
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  // Si no hay sesión activa
  if (!token || !usuario) {
    return <Navigate to="/api/auth/sign-in" replace />;
  }

  // Si se requiere rol admin y el usuario no lo es
  if (requiereManager && usuario.rol !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RutaPrivada;
