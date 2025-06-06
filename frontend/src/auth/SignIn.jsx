import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/auth/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data.usuario));
      alert("Inicio de sesión exitoso");

      // Redirige según el rol
      if (data.usuario.rol === "admin") {
        navigate("/api/auth/session-started/manager/dashboard");
      } else {
        navigate("/");
      }
    } else {
      alert(data.message || "Error de login");
    }
  };

  return (
    <main className="main" role="main">
      <div>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={{ display: "none" }}>Email</label>
            <br />
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <br />
          </div>
          <div>
            <label style={{ display: "none" }}>Contraseña</label>
            <br />
            <input
              placeholder="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
            <br />
            <br />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
