import React, { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { Home, LogOut, MessageCircle, Settings, User, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'




const SideBar = () => {
  const { logout } = useContext(AuthContext)

  const navItem = (to, Icon, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center group-hover:gap-4 group-hover:px-6 h-12 w-12  group-hover:justify-start group-hover:w-full justify-center rounded-full transition-all duration-10
        ${isActive
          ? "bg-linear-to-r from-emerald-800/70 to-emerald-600/40"
          : "bg-white/5 hover:bg-white/10"
        }`
      }
    >
      <Icon size={22} strokeWidth={1.5} />
      <span className="whitespace-nowrap w-0 scale-0 group-hover:scale-100 group-hover:w-max overflow-hidden transition-all duration-500">
        {label}
      </span>
    </NavLink>
  )

  return (
    <div className='group px-4 h-full py-10 flex items-center flex-col w-20 hover:w-64 transition-all duration-500 overflow-hidden'>
      <div className='mb-10'>

        <div className="mb-10 h-10 flex w-full items-center group-hover:px-0 justify-center">

          {/* Small Logo */}
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-10 transition-all duration-500 ease-in-out
               opacity-100 scale-100
               group-hover:opacity-0 group-hover:scale-0 group-hover:w-0"
          />

          {/* Full Logo */}
          <img
            src="/logo-tagline.svg"
            alt="Full Logo"
            className="w-0 group-hover:w-full transition-all duration-500 ease-in-out
               opacity-0 scale-95
               group-hover:opacity-100 group-hover:scale-100"
          />

        </div>
      </div>
      <div className='flex flex-col justify-between items-center w-full h-full'>

        <div className='flex flex-col w-full gap-4'>
          {navItem("/dashboard", Home, "Home")}
          {navItem("/connect", Users, "Connect")}
          {navItem("/messages", MessageCircle, "Messages")}
          {navItem("/profile", User, "Profile")}
          {navItem("/settings", Settings, "Settings")}
        </div>



          <button onClick={logout} className={`flex  bg-white/5 hover:bg-white/10 items-center group-hover:gap-4 group-hover:px-6 h-12 w-12  group-hover:justify-start group-hover:w-full justify-center rounded-full transition-all duration-10`}>
            <LogOut size={22} strokeWidth={1.5} />
            <span className="whitespace-nowrap w-0 group-hover:w-max overflow-hidden transition-all duration-500">
              Logout
            </span>
          </button>
        </div>
    </div>
  )
}

export default SideBar