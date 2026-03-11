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
        `flex items-center group-hover:gap-4 group-hover:px-6 h-12 w-12  group-hover:justify-start group-hover:w-3xs justify-center rounded-full transition-all duration-10
        ${isActive
          ? "bg-linear-to-r from-emerald-800/70 to-emerald-600/40"
          : "bg-white/5 hover:bg-white/10"
        }`
      }
    >
      <Icon size={22} strokeWidth={1.5} />
      <span className="whitespace-nowrap w-0 group-hover:w-max overflow-hidden transition-all duration-300">
        {label}
      </span>
    </NavLink>
  )

  return (
    <div className='group hover:px-4 h-full py-10 flex items-center flex-col w-20 hover:w-max transition-all duration-300 overflow-hidden'>
      <div className='mb-10'>

        <img src="/assets/logo.png" alt="Logo" className='w-10' />

      </div>
      <div className='flex flex-col justify-between h-full'>

        <div className='flex flex-col gap-4'>
          {navItem("/dashboard", Home, "Home")}
          {navItem("/connect", Users, "Connect")}
          {navItem("/messages", MessageCircle, "Messages")}
          {navItem("/profile", User, "Profile")}
          {navItem("/settings", Settings, "Settings")}
        </div>



        <button onClick={logout} className={`flex bg-white/5 hover:bg-white/10 items-center group-hover:gap-4 group-hover:px-6 h-12 w-12  group-hover:justify-start group-hover:w-3xs justify-center rounded-full transition-all duration-10
`}>
          <LogOut size={22} strokeWidth={1.5} />
          <span className="whitespace-nowrap w-0 group-hover:w-max overflow-hidden transition-all duration-300">
            Logout
          </span>
        </button>
      </div>
    </div>
  )
}

export default SideBar