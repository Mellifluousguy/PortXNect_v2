import React from 'react'
import { useContext } from 'react'
import {AuthContext} from "@/context/AuthContext"
import { Card } from '../../components'

const dashboard = () => {
  const {user} = useContext(AuthContext)
  return (
    <Card className='h-full'>
      
    </Card>

  )
}

export default dashboard