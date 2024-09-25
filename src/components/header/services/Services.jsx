import React, { useState } from 'react';
import './services.css';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    if (toggleState === index) {
      setToggleState(0); 
    } else {
      setToggleState(index);
    }
  };

  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What I offer</span>
      <div className="services_container container grid">
        
        {/* Service 1: Web Developer */}
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">
              Web <br /> Developer
            </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
            <div className="services_modal-content">
              <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services_modal-title">Web Developer</h3>
              <p className="services_modal-description">I create full webpages.</p>
              <ul className="services_modal-services grid">
                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">I do image processing projects.</p>
                </li>
                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">I develop AI projects.</p>
                </li>
                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">I code with various languages.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 2: Electrical Engineer */}
        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
              Electrical <br /> Engineer
            </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
            <div className="services_modal-content">
              <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services_modal-title">Electrical Engineer</h3>
              <p className="services_modal-description">I work on various engineering projects.</p>
              <ul className="services_modal-services grid">
                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">I do hardware design.</p>
                </li>
                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">I work with embedded systems.</p>
                </li>
                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">I design circuits and boards.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 3: Visual Designer */}
        <div className="services_content">
          <div>
            <i className="uil uil-edit services_icon"></i>
            <h3 className="services_title">
              Visual <br /> Designer
            </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
            <div className="services_modal-content">
              <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services_modal-title">Visual Designer</h3>
              <p className="services_modal-description">I design visually appealing interfaces.</p>
              <ul className="services_modal-services grid">
                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">I create user-friendly UI/UX designs.</p>
                </li>
                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">I design marketing materials.</p>
                </li>
                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">I create design systems for consistency.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
