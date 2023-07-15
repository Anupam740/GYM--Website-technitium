import React from 'react'
import "./Footer.css"
import { MdOutlineSportsGymnastics } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';



function Footer() {
    
  return (
    <div className='footer'>
        <div className="footer-content">
        <div className="footer-leftpart">
        <h1 className='footer-logo' >Technitium-Gym <MdOutlineSportsGymnastics/></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus.</p>
        <div className="footer-leftpart-socialmediaIcons">
            
            <FaFacebook className='socialmediaIcons' />
            <FaInstagramSquare className='socialmediaIcons'/>
            <AiFillTwitterCircle className='socialmediaIcons'/>

        </div>


        </div>
        <div className="footer-rightpart">
            <div className='footer-rightpart-content'><h2>Healthy living</h2>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
                
                </div>
                <div className='footer-rightpart-content'><h2>Services</h2>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
                
            </div>
            <div className='footer-rightpart-content'><h2>Programms</h2>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
                
            </div>    

        </div>
        </div>
        <div className='footer-bottom-content'>
            @2023 isr All rights copy reserved

        </div>
      
    </div>
  )
}

export default Footer
