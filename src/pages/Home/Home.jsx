import React from 'react'
import './Home.css'
import Navbar from '../../components/NavBar/Navbar'
import Inicio from '../../components/inicio/inicio'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
    <>
    <div className='home'>
    <Navbar/>
    <Inicio/>
    <Footer/>
    </div>
    </>

  )
}
