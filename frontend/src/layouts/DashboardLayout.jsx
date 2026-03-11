import Sidebar from "@/components/common/SideBar.jsx"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div className="flex p-6 h-lvh">
      <div className="flex p-6 bg-black/80 rounded-2xl w-full h-full">
      <div className="relative h-full min-w-36">
      <div className="absolute bg-black/20 backdrop-blur-sm h-full border border-white/20 rounded-2xl">
        <Sidebar />
      </div>
      </div>›
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout