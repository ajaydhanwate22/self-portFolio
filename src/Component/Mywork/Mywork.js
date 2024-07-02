import React from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import Arrow_icon from '../../assets/arrow_icon.svg'

export default function Mywork() {
    return (
        <>
            <div id='work' className="mywork">
                <div className="mywork-title">
                    <h1>My latst work</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="mywork-container">
                    {mywork_data.map((work, index) => {
                        return <img key={index} src={work.w_img} alt='' />
                    })}
                </div>
                <div className="mywork-showmore">
                    <p>Show More </p>
                    <img src={Arrow_icon} alt="" />
                </div>
            </div>
        </>
    )
}
