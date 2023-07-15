import React from 'react'
import "./TrainersCard.css"
import img1 from "../../assets/pexels-allan-mas-5383781.jpg"
import img2 from "../../assets/pexels-cesar-galeão-3253498.jpg"
import img3 from "../../assets/pexels-kampus-production-6922165.jpg"
import img4 from "../../assets/pexels-victor-freitas-703016.jpg"
import img5 from "../../assets/pexels-the-lazy-artist-gallery-2247179.jpg"


function TrainersCard() {
    const trainers=[
        {
           id:1,
           src:img1,
           tname:"John Smith",
           Specializations:"Strength Training, Olympic Weightlifting",
    
        },
        {
          id:2,
          src:img2,
          tname:"Sarah Johnson",
          Specializations:"Functional Training, HIIT, Core Strength",
    
       },
       {
        id:3,
        src:img3,
        tname:"Emily Rodriguez",
        Specializations:"Cardiovascular Fitness & Endurance Training",
    
     },
     {
      id:4,
      src:img4,
      tname:"David Anderson",
      Specializations:"Weight Loss & Body Transformation.",
    
    },
    {
      id:5,
      src:img5,
      tname:"Jessica Lee",
      Specializations:"Yoga & Mind-Body Connection",
    
    },
    
    
      ]
    
  return (
    <div className='trainerscard'>
      {
            trainers.map(({id,src,tname,Specializations})=>(
              <div key={id}  className="teamMap">
                
                <img src={src}  alt="img not found" />
                <h3>{tname}</h3>
                <div className='text'>
                <p >{Specializations}</p></div>
              </div>

            ))
          }
    </div>
  )
}

export default TrainersCard
