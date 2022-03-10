import React from 'react'
import {Outlet} from 'react-router-dom'
export default function Panel() {
  return (
    <div>
        <h1>Panel</h1>
        <Outlet/>
        
    </div>
  )
}
