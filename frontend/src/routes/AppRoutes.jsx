import { Routes, Route } from "react-router-dom"
import LoginPage from "@/pages/AuthenticationPage/LoginPage"
import Dashboard from "@/pages/Dashboard/dashboard"
import DashboardLayout from "@/layouts/DashboardLayout"
import ProtectedRoute from "./ProtectedRoute"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>

    </Routes>
  )
}

export default AppRoutes