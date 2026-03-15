import React, { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import {
  Home,
  LogOut,
  MessageCircle,
  Settings,
  User,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { Card } from "@/components";

const navItems = [
  { to: "/dashboard", icon: Home, label: "Home" },
  { to: "/connect", icon: Users, label: "Connect" },
  { to: "/messages", icon: MessageCircle, label: "Messages" },
  { to: "/profile", icon: User, label: "Profile" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

const SideBar = () => {
  const { logout } = useContext(AuthContext);
  
  return (
    <Card className="group px-4 h-full py-10 flex items-center flex-col w-20 hover:w-64 transition-all duration-500 overflow-hidden">

      {/* Logo Section */}
      <div className="mb-10 h-10 flex w-full items-center justify-center">
        <img
          src="/SVG-Images/portxnect-ico.svg"
          alt="Logo"
          className="w-10 transition-all duration-500 ease-in-out
            opacity-100 scale-100
            group-hover:opacity-0 group-hover:scale-0 group-hover:w-0"
        />

        <img
          src="/logo-tagline.svg"
          alt="Full Logo"
          className="w-0 group-hover:w-full transition-all duration-500 ease-in-out
            opacity-0 scale-95
            group-hover:opacity-100 group-hover:scale-100"
        />
      </div>

      <div className="flex flex-col justify-between items-center w-full h-full">

        <div className="flex flex-col w-full gap-4">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center group-hover:gap-4 group-hover:px-6 hover:shadow-md shadow-white/5 h-12 w-12 group-hover:justify-start group-hover:w-full justify-center rounded-full transition-all duration-10
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
          ))}
        </div>

        <button
          onClick={logout}
          className="flex bg-white/5 hover:bg-white/10 items-center group-hover:gap-4 group-hover:px-6 h-12 w-12 group-hover:justify-start group-hover:w-full justify-center rounded-full transition-all duration-10"
        >
          <LogOut size={22} strokeWidth={1.5} />
          <span className="whitespace-nowrap w-0 group-hover:w-max overflow-hidden transition-all duration-500">
            Logout
          </span>
        </button>

      </div>
    </Card>
  );
};

export default SideBar;