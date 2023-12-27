import React, { useState } from 'react'
import '../Styles/Login.css'
import loginicon from '../Images/loginimg.webp'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login(props) {
  const navigate=useNavigate();
  const [formData, setFormData]=useState({email: "", password: ""});
  // console.log(formData);
  function changeHandler(event){
      setFormData(prevData=>{
        return{
          ...prevData,
          [event.target.name]: event.target.value
    }
    });
  }

  async function clickHandler(event){
    
    event.preventDefault();
    try{
      // console.log("yo");
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/login`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        
      })
      // console.log("no");
      const data = await response.json();
      // localStorage.setItem('token', ${data.token});
      // console.log(data);
      if(response.status===200){
        setFormData({
          email :"",
          password:""
        })
        props.setLogin(true);
        toast.success("You Are Logged-In Successfully",{
          position:"top-center",
          type:"success",
          height:"20vh",
        });
        navigate('/Dashboard');
      }
      else if(response.status===400 && data.message === "user do not exist, please do signup first"){
        toast.error("User does not exist",{
          position:"top-center",
          type:"error",
          height:"20vh",
        });
      }
      else if(response.status === 401){
        toast.error("Password is not Correct",{
          position:"top-center",
          type:"warning",
          height:"20vh",
        });
      }
    }
    catch(e){
        console.log(e);
    }
  }

  return (
      <div className='Login-content'>
      <div className='Login-form'>
      <form className='Login-form-storage'>
        <p className='Login-form-heading'>Welcome Back</p>
        <p className='Login-form-desc1'>Build skills for today, tomorrow, and beyond.</p>
        <p className='Login-form-desc2'>Education to future-proof your career.</p><br></br>
        <div className='Login-email-container'>
          <p className='Login-form-email'>Email address: </p>
          <p className='star'>*</p>
        </div>
        <input
        className='Login-form-input1'
        type='email'
        placeholder='Enter Email Address'
        onChange={changeHandler}
        name='email'
        required
      />
      <br></br>
      <div className='Login-password-container'>
        <p className='Login-form-password'>Password:</p>
        <p className='star'>*</p>
      </div>
      <input
        className='Login-form-input2'
        placeholder='Enter Password'
        onChange={changeHandler}
        name='password'
        type='password' // Make sure to set the type to 'password' for password input
        required
      />
        <br></br>
        <button className='Login-form-btn' onClick={clickHandler}>Sign in</button><br></br>

        <div style={{display:"flex", alignItems:"center" , justifyContent:"centre", gap:"2%" ,marginTop:"3vh"}}>
              <div style={{width:"26%" , height:"0.2vh" ,backgroundColor:"white"}}></div>
              <p style={{fontSize:"1.2rem", color: "white"}}>OR</p>
              <div style={{width:"26%",height:"0.2vh" ,backgroundColor:"white"}}></div>
        </div>

        <button className='Login-form-googlebtn'>Sign in with google</button>
      </form>
      </div>
      <div className='login-img-storage'>
        <img className='login-img' src={loginicon} alt='loginicon'></img>
      </div>
      </div>
  )
}

export default Login
