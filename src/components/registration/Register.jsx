import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';

import "./Register.css"


const Register = () => {
    

    const navigate=useNavigate()
    const psRegix="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[submit,setSubmit]=useState([])
    const handleName=(e)=>{
        setName(e.target.value);
        console.log(name)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value);
        console.log(email)

    }
    const handlePassWord=(e)=>{
        setPassword(e.target.value);
        console.log(password)

    }

    
        const handleSubmit = (e) => {
            e.preventDefault(); 
            if(name=="" || email =="" || password == " " ){
                alert("please enter valid data in all input fields")

                return;
                
            }
            else{
          
            setSubmit([name, email, password]); // Save the values in an array
            const formData = {
                name: name,
                email: email,
                password: password,
              };
            
            
              // Save the form data in local storage
              localStorage.setItem('formData', JSON.stringify(formData));
              alert("You are successfully Registered")
              navigate("/login")

            }
            
          
            
          
            
          
          

        
        
        
        

        }
        
  return (<>
  

   
    <div className="reg-container">
        
    
        <form onSubmit={handleSubmit} className="reg-container1">
        
        
            
      <h3>Registration Page</h3>
      

      <div><input  className='register-input-box' placeholder='Enter Name'  label="Name"  type="text" value={name} onChange={handleName}/>  </div>
      <div><input className='register-input-box' placeholder='Enter Email'  label="Email"   type="email" value={email} onChange={handleEmail}/> </div>
      <div> <input  className='register-input-box' placeholder='Enter Password'  label="Password"   type="password" value={password} onChange={handlePassWord}/></div>
      <button id ="submit-btn" type="submit" >Sign up</button>
      
      

      
      
     
      </form>
      </div>
      
    
      </>)
}

export default Register