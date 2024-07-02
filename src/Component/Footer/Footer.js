import React from 'react'
import './Footer.css'
import Footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

export default function Footer() {
    return (
        <>
            <div className="Footer">
                <div className="footer-top">
                    <div className="footer-top-left">
                        <img src={Footer_logo} alt="" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique laudantium saepe repudiandae, aperiam non, quis ex atque esse, praesentium perferendis aspernatur fuga magni?</p>
                    </div>
                    <div className="footer-top-right">
                        <div className="footer-email-input">
                            <img src={user_icon} alt="" />
                            <input type="email" placeholder='Enter your email' />
                        </div>
                        <div className="footer-subscribe">Subscribe</div>
                    </div>
                </div>
                <hr />
                <div className="footer-bottom">
                    <p className="footer-bottom-left">@ 2024 Ajay dhanwate.All right reserved   .</p>
                    <div className="footer-bottom-right">
                        <p>Term of services</p>
                        <p>Privancy Policy</p>
                        <p>Connect with me</p>
                    </div>
                </div>
            </div>
        </>
    )
}
