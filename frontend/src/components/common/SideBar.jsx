import React, { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

const SideBar = () => {
  const {logout} = useContext(AuthContext)
  return (
    <div>
      hello
      
        <button onClick={logout}>logout</button> 
    </div> 
  )
}

export default SideBar