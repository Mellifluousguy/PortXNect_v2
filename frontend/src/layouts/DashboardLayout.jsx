import Sidebar from "@/components/common/SideBar.jsx"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  const location = window.location.pathname;
  
  return (
    <div className="flex p-6 h-lvh ">
      <div className="flex p-6 bg-black/80 rounded-2xl w-full h-full">
        <div className="relative h-full min-w-28">
          <div className={`${location === '/' ? 'static flex items-center justify-center p-0' : 'absolute'} z-10  bg-black/60 backdrop-blur-sm h-full border border-white/20 rounded-2xl`}>
            <Sidebar />
          </div>
        </div>
        <div className="w-full h-full border border-white/20 rounded-2xl p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout