import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class='bx bx-briefcase-alt about_icon'></i>
        <h3 className="about_title">Projects</h3>
        <span className="about_subtitle">+10 Projects</span>
      </div>

      <div className="about_box">
        <i class='bx bx-award about_icon'></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">3rd year Electrical Engineer</span>
      </div>

      <div className="about_box">
        <i class='bx bx-support about_icon'></i>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Always Available</span>
      </div>
    </div>
  )
}

export default Info
