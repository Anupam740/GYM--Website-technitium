import React from 'react'
import "./About.css"
import YouTube from 'react-youtube';


function About() {
  const handleLearnMore=()=>{
    alert("Clicked from about us section")
  }
  return (
    <div name="about" className="container">
  <div className="video">
    <YouTube videoId="qVek72z3F1U" width={400} height={225} id='videoId' />
  </div>
  <div className="description">
    <h1>About us</h1>
    <p>At Technitium-Gym, we are passionate about helping individuals achieve their fitness goals and lead a healthier lifestyle. We believe that fitness is not just a hobby, but a way of life. Our state-of-the-art facility and experienced team of trainers are here to support and guide you on your fitness journey.Whether you're a fitness enthusiast, a beginner looking to start your fitness journey, or someone seeking professional guidance and support, Technitium-Gym is the ideal place for you. Join our community today and let us help you become the best version of yourself!

</p>
    <button onClick={handleLearnMore}>Learn More</button>
  </div>
  
</div>

    
    
  )
}

export default About
