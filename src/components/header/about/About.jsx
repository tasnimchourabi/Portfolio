import React from 'react'
import "./about.css"
import AboutImg from "../../../assets/tass.jpg";
import CV from "../../../assets/mon_cv.pdf";
import Info from './Info';


const About = () => {
  return (
    <div>
      <section className='about section' id='about'>
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My introduction</span>
        <div className="about_container container grid">
            <img src={AboutImg} alt="" className='about_img' />
            <div className="about_data">
                <Info/>
                <div className="about_description">
                   <p>Electrical Engennier,I do projects using raspberry Pi ,STM32,And i do web development projects using,react redux,html,css, js</p>
                   <a style={{margin:"2rem"}} href={CV} className="button button--flex">Download CV
                    </a> 
                </div>
            </div>
        </div>
      </section>
    
    </div>
  )
}

export default About
