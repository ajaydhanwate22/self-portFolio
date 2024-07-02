import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import Arrow_icon from '../../assets/arrow_icon.svg'

export default function Services() {
  return (
    <>
    <div id='services' className="services">
        <div className="services-title">
            <h1>my services</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
            {Services_Data.map((service,index)=>{
                return <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore ">
                            <p>Readmore</p>
                            <img src={Arrow_icon} alt="" />
                        </div>
                </div>
            })}
        </div>
    </div>
      
    </>
  )
}
