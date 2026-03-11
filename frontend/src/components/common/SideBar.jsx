import React, { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { Home } from 'lucide-react'
import { NavLink } from 'react-router-dom'




const SideBar = () => {
  const { logout } = useContext(AuthContext)

  const navItem = (to, Icon, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-4 px-4 py-3 rounded-full transition-all duration-300
        ${isActive
          ? "bg-linear-to-r from-emerald-800/70 to-emerald-600/40"
          : "bg-white/5 hover:bg-white/10"
        }`
      }
    >
      <Icon size={22} />
      <span className="whitespace-nowrap  group-hover:opacity-100 transition-opacity duration-300">
        {label}
      </span>
    </NavLink>
  )

  return (
    <div className='  flex items-center flex-col w-full'>
      <img src="/assets/logo.png" alt="Logo" />

      {navItem("/dashboard", Home, "Home")}



      <button onClick={logout}>logout</button>
    </div>
  )
}

export default SideBar