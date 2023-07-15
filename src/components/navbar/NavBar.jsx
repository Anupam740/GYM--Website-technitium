import React,{useState} from 'react'
import { Link  } from "react-scroll";

import { MdOutlineSportsGymnastics } from 'react-icons/md';
import { FaBars } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import {useNavigate} from 'react-router-dom'
import "./NavbarStyles.css"

 

function NavBar() {
    const[menuIcon,setMenuIcon]=useState(false)
    const handleLogoIcon=()=>{
        setMenuIcon(!menuIcon)
    }
    const navigate= useNavigate()
    function handleLogo(){
        navigate("/")
    }
    const handleJoinus=()=>{
        navigate("/register")
    }
  return (
    <nav className="navbarItems">
        
    <h1 className='logo' onClick={handleLogo}>Technitium-Gym <MdOutlineSportsGymnastics/></h1>
    <div className="menu-icons" onClick={handleLogoIcon}>
        {
    menuIcon ? (<AiFillCloseCircle  className='AiFillCloseCircle'/>) : (<FaBars className='FaBars'/>)  }
    
    </div>
    <ul className={ menuIcon ? "nav-menu active" :"nav-menu"}>
        <li><Link to="about" className="nav-links" spy={true}
    smooth={true}
    offset={-70}
    duration={500}>About</Link></li>
        <li><Link to="program" className="nav-links" spy={true}
    smooth={true}
    offset={-70}
    duration={500}>Program</Link></li>
        <li><Link to="training" className="nav-links" spy={true}
    smooth={true}
    offset={-70}
    duration={500}>Training</Link></li>
        <li><Link to="pricing" className="nav-links" spy={true}
    smooth={true}
    offset={-70}
    duration={500}>Pricing</Link></li>
        <button className="joinusbtn" onClick={handleJoinus}>Join us</button>

            

        
    </ul>
    
      
    </nav>
  )
}

export default NavBar
