import React, { useEffect, useState } from 'react'
import '../Styles/Home.css'
import arrow from '../Images/right-arrow.png'
import { useNavigate } from 'react-router-dom';
import video1 from '../Images/video.mp4';
import course1 from '../Images/development course.jpg'
import course2 from '../Images/cpp.png'
import course3 from '../Images/java.webp'
import course4 from '../Images/blockchain.webp'
import course5 from '../Images/datascience.png'
import course6 from '../Images/sql.webp'
import '../Styles/Navbar.css'

function Home() {

  const navigate=useNavigate();
  function clickHandler(){
    navigate("/signup");
  }

  const videoStyle={
    width: '100%',
    height: '95vh'
  }

  return (
    <div className='Home-storage'>
      <div className='Home-btn1-storage'>
        <button className='Home-btn1' onClick={clickHandler}>Become an instructor 
        <img src={arrow} alt='arrow' className='Home-btn1-img'></img></button>
      </div>
      <div className='Home-heading-storage'>
        <div><h1 className='Home-heading1'>Empower Your Future with</h1></div>
        <div><h1 className='Home-heading2'> Coding Skills</h1></div>
      </div>
      <div>
        <p className='Home-desc1'>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, 
          including hands-on projects, quizzes, and personalized feedback from instructors.</p>
      </div>
      <div className='Home-btns'>
        <button className='Home-btn2' onClick={clickHandler}>Learn More</button>
        <button className='Home-btn3'>Book a demo</button>
      </div>
      <div className='Home-vid1'>
        <video src={video1} autoPlay muted loop style={videoStyle} />
      </div>
      <div className='Home-container3'>
        <div className='Home-heading3'>
          <h1>Unlock your <span style={{color: 'rgb(25, 162, 192)'}}>coding potential</span> with our online courses.</h1>
          <p className='Home-desc2'>Our courses are designed and taught by industry experts who have years
           of experience in coding and are passionate about sharing their knowledge with you.</p>
          <button className='Home-btn4'><a className='home-btn-compiler' href='https://ideone.com/' target='blank'>Try it yourself</a></button>
          <button className='Home-btn5'>Learn more</button>
        </div>
        <div className='Home-numbers'>
          <img src='https://media0.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif?cid=ecf05e47cheykl67vyl88ffwjc87c9iy0i1l9wrnqg25qlwk&ep=v1_gifs_search&rid=giphy.gif&ct=g'
      ></img>  </div>
        <div></div>
      </div>
      <div className='Home-container4'>
        <div className='Home-header'>
          <h2 className='Home-container4-heading'>Featured Courses</h2>
        </div>
        <div className='Home-container4-courses'>
          <img className='Home-container4-course1' src={course1}></img>
          <img className='Home-container4-course2' src={course2}></img>
          <img className='Home-container4-course3' src={course3}></img>
        </div>
        <div className='Home-container4-courses2'>
          <img className='Home-container4-course4' src={course4}></img>
          <img className='Home-container4-course5' src={course5}></img>
          <img className='Home-container4-course6' src={course6}></img>
        </div>
      </div>
    </div>
  )
}

export default Home
