import React from 'react'
import { useContext } from 'react'
import {AuthContext} from "@/context/AuthContext"

const dashboard = () => {
  const {user} = useContext(AuthContext)
  return (

    <div>
      {user.email}
    </div>
  )
}

export default dashboard