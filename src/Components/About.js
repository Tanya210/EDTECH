import React from 'react'
import '../Styles/About.css'
import '../Styles/Navbar.css'

function About() {
  return (
      <div className='About-storage'>
          <div className='About-container1'>
              <h1 className='About-container1-heading'>Driving Innovation in Online Education for a <br></br><h1 className='About-container1-heading2'>Brighter Future</h1></h1><br></br>
              <p className='About-container1-pargraph1'>Studynotion is at the forefront of 
              driving innovation in online education. We're passionate <br></br>about creating a brighter 
              future by offering cutting-edge courses, leveraging emerging <br></br>technologies, 
              and nurturing a vibrant learning community.</p>
              <img className='About-container1-img' src='https://media2.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif?cid=ecf05e47oqdoyeel86rfjjva7ffezb3n7sfoo2nfqox71elk&ep=v1_gifs_related&rid=giphy.gif&ct=g'></img>
              <br></br>
              <h1 className='About-container-heading3'>We are passionate about revolutionizing the way we learn. Our<br></br>
              innovative platform combines <span className='About-container-heading4'>technology, expertise, and community</span> to<br></br>
              create an unparalleled <span className='About-container-heading5'>educational experience.</span></h1>
              <br></br><br></br>
          </div>
          <hr></hr>
          <div className='About-container2'>
            <div className='About-container2-part1'>
              <h1 className='About-container2-part1-heading'>Our Founding Story</h1>
              <p className='About-container2-part1-paragraph'>Our e-learning platform was born out of a shared vision and passion for 
                transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and 
                high-quality learning opportunities in a rapidly evolving digital world.</p>
              <br></br>
              <p className='About-container2-part1-paragraph'>
                As experienced educators ourselves, we witnessed firsthand the limitations
                and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or
                restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals 
                from all walks of life to unlock their full potential.
              </p>
            </div>
            <div className='About-container2-part2'>
              <img className='About-container2-part2-gif' src='https://media4.giphy.com/media/PI3QGKFN6XZUCMMqJm/giphy.gif?cid=ecf05e47msfqnp18fc1ynvdi1z9svcuruik4lcfukl9ejtr4&ep=v1_gifs_search&rid=giphy.gif&ct=g'></img>
            </div>
          </div>
          <hr></hr>
          <div className='About-container3'>
            <div className='About-container3-part1'>
              <h1 className='About-container3-part1-heading1'>Our Vision</h1>
              <p className='About-container3-part1-paragraph'>
              With this vision in mind, we set out on a journey to create an e-learning
               platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, 
              fostering a dynamic and interactive learning experience.
              </p>
            </div>
            <div className='About-container3-part2'>
              <h1 className='About-container3-part2-heading1'>Our Mission</h1>
              <p className='About-container3-part2-paragraph'>
              Our mission goes beyond just delivering courses online. We wanted to create a 
              vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration 
              through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
      </div>
  )
}

export default About
