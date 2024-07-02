import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/profile_img_new.jpeg'

export default function About() {
  return (
    <>
    <div id='about' className="about">
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img className='about_imgage' src={profile_image} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an fresher frontend developer. I have professinal experties in the feild. throghtout my carrier succes and Growth</p>
                    <p>My passions for frontend developer is not only but also in the enthsiasm and dedication I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>REACT JS</p><hr style={{width:"75%"}} /></div>
                    <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>TAILWIND CSS</p><hr style={{width:"70%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1>10+</h1>
                <p>EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>90+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>50+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            <hr />
        </div>
    </div>
      
    </>
  )
}
