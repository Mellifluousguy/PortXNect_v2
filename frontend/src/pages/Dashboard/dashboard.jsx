import React from 'react'
import { useContext } from 'react'
import {AuthContext} from "@/context/AuthContext"

const dashboard = () => {
  const {user} = useContext(AuthContext)
  return (

    <div className='w-full bg-amber-100 h-full'>
    </div>
  )
}

export default dashboard