import { Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/AuthenticationPage/LoginPage";
import Dashboard from "@/pages/Dashboard/dashboard";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}

export default AppRoutes;