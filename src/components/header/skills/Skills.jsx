import React from 'react'
import './skills.css';
import FrontEnd from './FrontEnd'
import Backend from './Backend'

const Skills = () => {
  return (
   <section className="skills section" id='skills'>
    <h2 className="section_title">Skills</h2>
    <span className="section_subtitle">Know more About Me</span>
    <div className="skills_container container grid">
        <FrontEnd/>
        <Backend/>
    </div>
   </section>
  )
}

export default Skills
