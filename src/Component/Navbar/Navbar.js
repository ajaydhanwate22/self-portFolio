import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import Underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


export default function Navbar() {
  const [menu,setMenu]=useState("home");
  const menuRef =useRef();
  const openMenu = () =>{
    menuRef.current.style.right="0"
  }
  const closeMenu = () =>{
    menuRef.current.style.right="-350px"
  }

  return (
    <>
    <div className="navbar">
        <img src={logo} alt="" />
        <img src={menu_open} className='nav-mob-open' alt="" />
        <ul ref={menuRef} onClick={openMenu} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchore-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={Underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchore-link' offset={100} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==="about"?<img src={Underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchore-link' offset={100} href='#services'> <p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={Underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchore-link' offset={100} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p> </AnchorLink>{menu==="work"?<img src={Underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchore-link' offset={100} href='#contact'><p onClick={()=>setMenu("contact") }>Contact</p></AnchorLink>{menu==="contact"?<img src={Underline} alt=''/>:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchore-link' offset={100} href='#contact'>Connect with me</AnchorLink></div>
      </div>
    </>
  )
}
