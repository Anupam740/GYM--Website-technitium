import React from 'react'
import "./Home.css"
import img6 from "../../assets/pexels-leon-ardho-1552242.jpg"
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate=useNavigate()
  return (
    
      <div name="home" className="home">
        <div className='homeQuote'>
          <p>Don’t be scared to <span>LIFT HEAVY!</span>  You won’t get huge and bulky, you’ll just get <span>amazing</span>. </p>
          <button onClick={()=>navigate("/register")}>Join with us</button>
        </div>
        
          <div className='homeImg'>
          <img src={img6} height="40%" width="60%" alt="" />


          
        </div>
        
      </div>
  
  )
}

export default Home
