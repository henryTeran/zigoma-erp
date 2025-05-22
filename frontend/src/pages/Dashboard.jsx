import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../providers/firebaseConfig";

export default function Dashboard() {
  const { user } = useAuth();
  console.log("Utilisateur connecté :", user);
  const navigate = useNavigate();

    const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
    };
  return (
    <div>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Bienvenue {user?.email}</h1>
      </div>
      <button onClick={handleLogout} className="mt-4 bg-red-600 text-white px-4 py-2">
          Déconnexion
      </button>
    </div>
  );
}
