import React from 'react'
import toast from 'react-hot-toast'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

function Home() {
  return (
    <div className=''>
    <Navbar/>
    <div className='flex justify-center gap-4 items-center flex-wrap p-4 bg-zinc-100'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
       
    <Footer/>
    </div>
    
  )
}

export default Home