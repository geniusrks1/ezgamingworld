import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

const DRnavbar = () => {
  return (
    <>
    <div className='nav'>
        <NavLink 
        to=''
        style={({isActive})=>(isActive?{color:'blue'}:undefined)}
        > 
            <h4>Home</h4></NavLink>
        <NavLink to='about'
        style={({isActive})=>(isActive?{color:"blue"}:undefined)}>
             <h4>About</h4></NavLink>
        <NavLink to='items'
      style={({isActive})=>(isActive?{color:"blue"}:undefined)}>
            <h4>Items</h4></NavLink>
    </div>
    <Outlet />
    </>
  )
}

export default DRnavbar