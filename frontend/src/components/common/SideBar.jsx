import React, { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

const SideBar = () => {
  const {logout} = useContext(AuthContext)
  return (
    <div className=' absolute'>
      hello
      <br />
        <button onClick={logout}>logout</button> 
    </div> 
  )
}

export default SideBar