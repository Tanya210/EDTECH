import React from 'react'
import '../Styles/Contact.css'
import chat from '../Images/chat-icon.png'
import visit from '../Images/visit-icon.jpg'
import call from '../Images/call-icon.png'

function Contact() {
  return (
      <div className='Contact-content'>
      <div className='Contact-card1'>
        <div className='Contact-chat'>
          <div>
            <img src={chat} alt='chaticon' className='Contact-chat-img'></img>
          </div>
          <div>
            <h2 className='Contact-chat-heading'>Chat with us</h2>
            <p className='Contact-chat-para'>Our friendly team is here to help</p>
          </div>
        </div>
        <div className='Contact-visit'>
          <div>
          <img src={visit} alt='visiticon' className='Contact-visit-img'></img>
          </div>
          <div>
            <h2 className='Contact-visit-heading'>Visit us</h2>
            <p className='Contact-visit-para'>Come and say hello at out office.</p>
          </div>
        </div>
        <div className='Contact-call'>
          <div>
          <img src={call} alt='callicon' className='Contact-call-img'></img>
          </div>
          <div>
            <h2 className='Contact-call-heading'> Call us</h2>
            <p className='Contact-call-para'> Monday-Friday from 5am-8pm</p>
          </div>
        </div>
      </div>
      <div className='Contact-card2'>

      <form>
          <div className='Contact-card2-content'>
            <h2 className='Contact-card2-heading'>Got a Idea? We've got the skills. Let's team up</h2>
            <p className='Contact-card2-para'>Tall us more about yourself and what you're got in mind.</p>
          </div>

          <div className='Contact-card2-names'>
              <div className='card2-firstname'>
                <p className='card2-first-name'>First Name:</p>
                <input className='card2-firstname-input' type='text' placeholder='First Name'></input>
              </div>
              <div className='card2-lastname'>
                <p className='card2-last-name'>Last Name:</p>
                <input className='card2-lastname-input' type='text' placeholder='Last Name'></input>
              </div>
          </div>

          <div className='Contact-card2-email'>
              <p className='card2-email'>Email Address:</p>
              <input className='card2-email-input' type='email' placeholder='Enter email'></input>
          </div>
          <div className='Contact-card2-number'>
            <p className='card2-number'>Phone number:</p>
            <input type='number' placeholder='Enter your number' className='card2-number-input'></input>
          </div>

          <div className='Contact-card2-message'>
              <p className='card2-message'>Message:</p>
              <input type='text' className='card2-message-input'></input>
          </div><br></br>
          <button className='card2-submit-btn'>Submit</button>
      </form>

      </div>
      </div>
  )
}

export default Contact
