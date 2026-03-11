import Sidebar from "@/components/common/SideBar.jsx"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div className="flex p-6">
      <div className="flex p-6 bg-black/80 rounded-2xl w-full h-full">
      <div className="w-20 border border-white/20 rounded-2xl pt-6">
        <Sidebar />
      </div>››
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout