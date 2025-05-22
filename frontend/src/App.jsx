import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./modules/auth/pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./shared/routes/PrivateRoute"
import { AuthProvider } from "./modules/auth/services/AuthContext";
import Signup from "./modules/auth/pages/Signup";
import ForgotPassword from "./modules/auth/pages/ForgotPassword";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recover-account" element={<ForgotPassword />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
