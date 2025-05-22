import { useState } from "react";
import { resetPassword } from "../services/authService";

export const useForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false) 

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) return alert("Veuillez entrer un email.");
    try {
      await resetPassword(email);
      alert("Un email de réinitialisation a été envoyé.");
      setSuccess(true)
    } catch (err) {
      alert("Erreur : " + err.message);
    }
  };

  return {
    email,
    setEmail,
    handleReset,
    success
  };
};
