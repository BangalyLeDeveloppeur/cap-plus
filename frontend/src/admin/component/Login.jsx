import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../components/Authentification.jsx";

const Login = () => {
  const navigate = useNavigate();

  const { setToken } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };
    console.log("📤 Données envoyées:", loginData);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/administrateur/login",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("✅ Réponse reçue:", res.data);

      // 🔹 Stocke le token dans le contexte et localStorage
      setToken(res.data.token);
      setMessage("Connexion réussie ✅");
      navigate("/admin/pageadmin/adminaccueil");
    } catch (error) {
      console.error(" Erreur détaillée:", {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });
      setMessage("Email ou mot de passe incorrect ");
    }
  };

  return (
    <form onSubmit={handleLogin} className="form-login">
      <input
        type="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Votre mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Se connecter</button>
      <p>{message}</p>
    </form>
  );
};

export default Login;
