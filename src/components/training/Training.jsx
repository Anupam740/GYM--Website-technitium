import React from 'react'
import "./Training.css"
import { useNavigate } from 'react-router-dom'
import img1 from "../../assets/pexels-allan-mas-5383781.jpg"
import img2 from "../../assets/pexels-cesar-galeão-3253498.jpg"
import img3 from "../../assets/pexels-kampus-production-6922165.jpg"
import img4 from "../../assets/pexels-victor-freitas-703016.jpg"
import img5 from "../../assets/pexels-the-lazy-artist-gallery-2247179.jpg"

function Training() {
  const navigate=useNavigate()
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
    <div name="training" className='training-container'>
      <div className='training-content'>
        <h1>Welcome to Our Gym's Training Program!</h1>
        <p>At Technitium-Gym , we are committed to providing you with a comprehensive and results-driven training program that will help you reach your fitness goals. Our program is designed to cater to individuals of all fitness levels, whether you are a beginner taking your first steps towards a healthier lifestyle or an experienced athlete looking to elevate your performance.</p><br /><br />
        <h3>Key Features of Our Training Program:</h3><br />
        <p>Personalized Workout Plans: We believe that a one-size-fits-all approach doesn't work when it comes to fitness. That's why our experienced trainers will design personalized workout plans tailored to your specific goals, fitness level, and preferences. Whether your aim is to lose weight, build muscle, increase strength, or improve overall fitness, we've got you covered.</p>

        <p>Expert Guidance: Our team of certified trainers is passionate about helping you succeed. They will be by your side every step of the way, providing expert guidance, motivation, and support. Our trainers are knowledgeable in a variety of training techniques and will ensure that you perform exercises with proper form and technique, minimizing the risk of injury and maximizing your results.</p>

        <p>Varied Training Modalities: To keep your workouts exciting and challenging, our training program incorporates a wide range of modalities. From traditional strength training and cardio exercises to functional training, HIIT (High-Intensity Interval Training), circuit training, and more, we offer a diverse selection of exercises to keep you engaged and motivated.</p>


      </div><br />
      <h1>Meet our Team</h1>
      <div className="training-team">
        
        
          {
            trainers.map(({id,src,tname,Specializations})=>(
              <div key={id}  className="teamMap">
                
                <img src={src}  alt="img not found" />
                <h3>{tname}</h3>
                <div className='text'>
                <p id='specializations'>{Specializations}</p></div>
              </div>

            ))
          }
        

      </div>
      <button onClick={()=>navigate("trainerscard")}>See our whole Team</button>
      
    </div>
  )
}

export default Training
