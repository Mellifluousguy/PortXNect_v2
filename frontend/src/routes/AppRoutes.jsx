import { Routes, Route } from "react-router-dom"
import { LoginPage, Dashboard } from "../pages"
import DashboardLayout from "@/layouts/DashboardLayout"
import ProtectedRoute from "./ProtectedRoute"
import ResetPassword from "../components/auth/ResetPassword"
import VerifyEmail from "../components/auth/VerifyEmail"
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/verify-email/:token" element={<VerifyEmail />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>

    </Routes>
  )
}

export default AppRoutes