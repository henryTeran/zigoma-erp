import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser, signupWithGoogle } from "../services/authService";

export const useSignup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signupUser(email, pass);
      navigate("/dashboard");
    } catch (err) {
      alert("Erreur : " + err.message);
    }
  };

    const handleGoogleSignup = async () => {
        try {
        await signupWithGoogle();
        navigate("/dashboard");
        } catch (err) {
        alert("Erreur Google : " + err.message);
        }
    };

  return {
    email,
    pass,
    setEmail,
    setPass,
    handleSignup,
    handleGoogleSignup,
  };
};
