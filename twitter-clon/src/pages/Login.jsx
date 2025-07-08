import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const inicioSesion = (e) => {
    e.preventDefault();

    const validEmail = "ailsa@email.com";
    const validPassword = "1234";

    if (email === validEmail && password === validPassword) {
      localStorage.setItem("auth", "true");
      localStorage.setItem("username", "UsuarioDemo");
      navigate("/profile");
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <section>
      <h2 id="titulote">Iniciar Sesión</h2>
      <form onSubmit={inicioSesion}>
        <input id="sesion"
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input id="sesion2"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>


        <section className="datos">
            <h3>Datos de inicio de sesión</h3>
            <p>Email = ailsa@email.com <br></br>
            contraseña = 1234</p>
        </section>
   




    </section>
  );
};

export default Login;
