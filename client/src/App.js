import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import AuthLayout from "./layout/AuthLayout/authLayout";
import DashboardLayout from "./layout/DashboardLayout/dashboardLayout";
import Dashboard from "./pages/Dashboard/dashboard";
import Signin from "./pages/Signin/signin";
import Signup from "./pages/Signup/signup";
import { useSelector } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="/auth/signin" />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/auth/signin" />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="settings" element={"Settings"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
