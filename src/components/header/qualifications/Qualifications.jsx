import React, { useState } from 'react'
import "./qualifications.css"
const Qualifications = () => {
    const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    if (toggleState === index) {
      setToggleState(0); 
    } else {
      setToggleState(index);
    }
  };
    
  return (
   <section className="qualification section">
    <h2 className="section_title">Qualification</h2>
    <span className="section_subtitle">My journey so far</span>
    <div className="qualification_container container">
        <div className="qualification_tabs">

        <div className={toggleState === 1 ? "qualification_button qualification_active button-flex":"qualification_button button-flex"} onClick={()=>toggleTab(1)}>
                <i className="uil uil-graduation-cap qualification_icon"></i> Education
            </div>

            <div className={toggleState === 2 ? "qualification_button qualification_active button-flex":"qualification_button button-flex"} onClick={()=>toggleTab(2)}>
                <i className="uil uil-briefcase-alt qualification_icon"></i> Projects
            </div>
           

           
        </div>
        <div className="qualification_sections">
            <div className={toggleState ===1 ? "qualification_content qualification_content-active":"qualification_content"}>
                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Pre-Engenniring-Student</h3>
                        <span className="qualification_subtitle"> IPEIEM</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calendar-alt"></i> 2020_ 2022 
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                </div>
 
                <div className="qualification_data">
                    <div></div>

                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>

                    <div>
                        <h3 className="qualification_title">Electrical Engennier student</h3>
                        <span className="qualification_subtitle"> Ensit</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calendar-alt"></i> 2022_ present
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <div className="qualification_line"></div>
                    </div>
                </div>
                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Web developement Initiation</h3>
                        <span className="qualification_subtitle">GoMyCode </span>
                        <div className="qualification_calender">
                            <i className="uil uil-calendar-alt"></i> 2023_ 2024
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                </div>

                <div className="qualification_data">
                    <div></div>

                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>

                    <div>
                        <h3 className="qualification_title">Full stack web Developer</h3>
                        <span className="qualification_subtitle"> GoMyCode</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calendar-alt"></i> 2024_ present
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <div className="qualification_line"></div>
                    </div>
                </div>
            </div>

            <div className={toggleState ===2 ? "qualification_content qualification_content-active":"qualification_content"}>
                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Ball balancing Table</h3>
                        <span className="qualification_subtitle"> ENSIT</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calendar-alt"></i> 2023_ 2024
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                </div>

                <div className="qualification_data">
                    <div></div>

                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>

                    <div>
                        <h3 className="qualification_title">Detection of Presence  </h3>
                        <span className="qualification_subtitle"> Ensit</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calendar-alt"></i> 2022_2023
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <div className="qualification_line"></div>
                    </div>
                </div>
                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Ecommerce </h3>
                        <span className="qualification_subtitle">GoMyCode </span>
                        <div className="qualification_calender">
                            <i className="uil uil-calendar-alt"></i> 2023_ 2024
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                </div>

            </div>
        </div>
    </div>
   </section>
  )
}

export default Qualifications
