import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
// import Productos from '../../pages/Productos/Productos'
// import Inicio from '../../components/inicio/inicio'
import { Outlet } from 'react-router-dom'

export default function MainLayouts() {
  return (
    <>
    <Navbar/>
    <Outlet/> 
    {/* <Productos/> */}
    <Footer/>
    </>
  )
}