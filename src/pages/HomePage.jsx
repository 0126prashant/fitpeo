import React from 'react'
import "../styles/homepage.css"
import { Sidebar } from '../components/Sidebar'
import Navbar  from '../components/Navbar'
import { Main } from './Main'
import Data from '../components/Data'


export const HomePage = () => {
  return (
    <>
        <div className="homepage">
        <Sidebar/>
        <Navbar/>
        <div className='displayblock'>
        <Main/>

        </div>
        </div>
       
        
    </>
    
  )
}
