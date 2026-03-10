import React, { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

const SideBar = () => {
  const {logout} = useContext(AuthContext)
  return (
    <div className=' absolute  flex items-center flex-col w-full'>
      <img src="/assets/logo.png" alt="Logo" /> 
      


        <button onClick={logout}>logout</button> 
    </div> 
  )
}

export default SideBar