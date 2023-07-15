import React from 'react'
import "./Program.css"
import YouTube from 'react-youtube';

function Program() {
  return (
    <div name="program" className='programContainer'>
      
      <div className='programContainer-Content'>
        <h1>Why Choose Us?</h1>
        <p>
          <li><span>Expert Trainers:</span> Our team of certified personal trainers is dedicated to helping you reach your fitness goals. They possess extensive knowledge and experience in various training techniques and will design personalized workout programs tailored to your unique needs.</li>
          <li> <span>Wide Range of Equipment:</span> Our gym is equipped with the latest and most advanced fitness equipment, providing you with all the tools necessary to challenge yourself and achieve remarkable results. Whether you're into cardio, strength training, or functional fitness, we have everything you need to get the most out of your workouts.

        </li>
        <li> <span>Group Classes:</span> We offer a variety of group fitness classes led by enthusiastic and motivating instructors. From high-energy cardio workouts to mind-body disciplines like yoga and Pilates, our classes cater to all fitness levels and interests. Joining a class is a fantastic way to stay motivated, make new friends, and add some fun to your fitness routine.

</li>

          </p>
      </div>
      <div className='programContainer-video'>
      <YouTube videoId="SqrRDlssGAs" width={400} height={225} id='programvideoId' />

      </div>
    </div>
  )
}

export default Program
