import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithEmail, loginWithGoogle } from "../services/authService";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [remember, setRemember] = useState(true);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, pass, remember);
      navigate("/dashboard");
    } catch (err) {
      alert("Erreur : " + err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle(remember);
      navigate("/dashboard");
    } catch (err) {
      alert("Erreur Google : " + err.message);
    }
  };

  return {
    email, 
    pass, 
    remember,
    setEmail, 
    setPass, 
    setRemember,
    handleLogin, 
    handleGoogleLogin
  };
};
