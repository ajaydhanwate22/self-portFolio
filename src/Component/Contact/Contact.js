import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Mail_icon from '../../assets/mail_icon.svg'
import Location_icon from '../../assets/location_icon.svg'
import Call_icon from '../../assets/call_icon.svg'



export default function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "161c7cbc-d5e4-46f6-9bf9-b4c201e50da6");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            alert (data.message);
            event.target.reset();
        } else {
          console.log("Error", data);
        }
      };
    return (
        <>
            <div id='contact' className="contact">
                <div className="conatct-title">
                    <h1>Get in Touch</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="contact-section">
                    <div className="contact-left">
                        <h1>Let's talk </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut delectus maiores nostrum mollitia earum et repellat. Placeat fugiat fuga numquam nisi ipsa?</p>
                        <div className="contact-details">
                            <div className="contact-detail">
                                <img src={Mail_icon} alt="" />
                                <p>ajaydhanwate23@gmail.com</p>
                            </div>
                            <div className="contact-detail">
                                <img src={Call_icon} alt="" />
                                <p>+91 9579218227</p>
                            </div>
                            <div className="contact-detail">
                                <img src={Location_icon} alt="" />
                                <p>Pimpari chinchwad-maharashtra india 411303 </p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder='Enter Your Email' name='email'/>
                    <label htmlFor="">Enter your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit Now</button>
                    </form>
                </div>
            </div>
        </>
    )
}
