import React, { useState } from 'react'
import '../Styles/Signup.css'
import signup from '../Images/signup.jpeg'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [FormData, setFormData]=useState({role: "Student", firstname: "", lastname: "", email: "", password: "", confirmPassword:""});
  const [studentClass, setStudentClass]=useState("Visible");
  const [instructorClass, setInstructorClass]=useState("");

  function changehandler(event){
    if(event.target.innerText==="Student"){
      setInstructorClass("");
      setStudentClass("Visible");
      setFormData((prevData)=>{
        return{
          ...prevData,
          role:event.target.innerText
        }
      })
    }
    else{
      setStudentClass("");
      setInstructorClass("Visible");
      setFormData((prevData)=>{
        return{
          ...prevData,
          role:event.target.innerText
        }
      })
    }
  }

  
  function nameHandler(event){
    setFormData(prevformData=>{
      return{
        ...prevformData,
      [event.target.name]: event.target.value
      }
    });
  }
  async function submitHandler(event){
    event.preventDefault();
    try{
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/signup`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData),
      })
      const data = await response.json();
      if(response.status===200){
        setFormData({
              firstname:"",
              lastname:"",
              email:"",
              password:"",
              confirmPassword:""
            })
            toast.success("Thank You For Signing-Up",{
              position:"top-center",
              type:"success",
              height:"20vh",
            });
        navigate("/login");
      }
      else if(response.status === 400){
        
        toast.error("user already exist",{
              position:"top-center",
              type:"warning",
              height:"20vh",
            });
      }
      else if(response.status === 401 && data.message === "Passwords do not match"){
        toast.error("Password not match",{
              position:"top-center",
              type:"warning",
              height:"20vh",
            });
      }
    }
    catch(e){
      console.log("error occured while fetching ");
    }
// console.log(FormData);
// setFormData({
//   firstname:"",
//   lastname:"",
//   email:"",
//   password:"",
//   confirmPassword:""
// })
  }
  return (
    
      <div className='Signup-content'>
      <div className='Signup-form-storage'>
        <form onSubmit={submitHandler}>
          <h4 className='Signup-heading'>Join the millions learning to code with EduSoft for free</h4>
          <p className='Signup-desc1'>Build skills for today, tomorrow, and beyond.</p>
          <p className='Signup-desc2'>Education to future-proof your career.</p>
          <div className='Signup-btns'>
            <div onClick={changehandler} className={`Signup-btn-student ${studentClass}`}>Student</div>
            <div onClick={changehandler} className={`Signup-btn-instructor ${instructorClass}`}>Instructor</div>
          </div>
          <div className='Signup-names'>
              <div className='Signup-firstname'>
                <p className='firstname'>First Name:</p>
                <input className='firstname-input' type='text' placeholder='Enter First Name' onChange={nameHandler} name='firstname' value={FormData.firstname}></input>
              </div>
              <div className='Signup-lastname'>
                <p className='lastname'>Last Name:</p>
                <input className='lastname-input' type='text' placeholder='Enter Last Name' onChange={nameHandler} name='lastname' value={FormData.lastname}></input>
              </div>
          </div>
          <p className='Signup-email'>Email:</p>
          <input className='Signup-email-container' type='email' placeholder='Enter your Email' onChange={nameHandler} name='email' value={FormData.email}></input>

          <div className='Signup-passwords'>
            <div className='Signup-createpassword'>
              <p className='createpassword'>Create password</p>
              <input className='createpassword-container' type='text' placeholder='Enter Password' onChange={nameHandler} name='password' value={FormData.password}></input>
            </div>
            <div className='Signup-confirmpassword'>
              <p className='confirmpassword'>Confirm Password</p>
              <input className='confirmpassword-container' type='text' placeholder='Confirm Password' onChange={nameHandler} name='confirmPassword' value={FormData.confirmPassword}></input>
            </div>
          </div>
          <br></br>
          <button className='Signup-form-btn'>Create Account</button><br></br>
          <div style={{display:"flex", alignItems:"center" , justifyContent:"centre", gap:"2%" ,marginTop:"3vh"}}>
              <div style={{width:"30%" , height:"0.2vh" ,backgroundColor:"white"}}></div>
              <p style={{fontSize:"1.2rem", color: "white"}}>OR</p>
              <div style={{width:"30%",height:"0.2vh" ,backgroundColor:"white"}}></div>
        </div>
          <button className='Signup-form-googlebtn'>Sign in with google</button>
        </form>
      </div>
      <div className='Signup-img'>
        <img className='Signup-img-container' src={signup} alt='signup'></img>
      </div>
      </div>
  )
}

export default Signup
