import React from 'react'
import './Hero.css'
import profil_img from '../../assets/profile_img_new.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Hero() {
  return (
    <div id='home' className='hero'>
        <img className='profile' src={profil_img} alt="" />
        <h1> <span>I'm Ajay Dhanwate,</span>frontend develper based in India.</h1>
        <p>I am frontend developer.Looking for an apportunnity in frontend development profile .. I am an immediate joiner. Thanku !</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchore-link' offset={100} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
      
    </div>
  )
}
