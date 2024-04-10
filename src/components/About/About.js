import React, { useState } from 'react';
import img3 from '../Images/Img/myImg.png'

const About = () => {
  const [activeTab, setActiveTab] = useState('Education');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img className="myimg1" src={img3} alt="" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <br />
            <p>
              Passionate learner and accomplished B-Tech graduate (2022) from Punyashlok Ahilyadevi Holkar University, Solapur Maharashtra, Currently, I am enrolled in an intensive full-stack development program at Sharpener, where I am actively expanding my skills in both front-end and back-end technologies.
            </p>
            <div className="tab-titles">
              <p className={`tab-links ${activeTab === 'Education' ? 'active-link' : ''}`} onClick={() => openTab('Education')}>Education</p>
              <p className={`tab-links ${activeTab === 'Skills' ? 'active-link' : ''}`} onClick={() => openTab('Skills')}>Skills</p>
              <p className={`tab-links ${activeTab === 'Experience' ? 'active-link' : ''}`} onClick={() => openTab('Experience')}>Experience</p>
            </div>
            <div className={`tab-contents ${activeTab === 'Education' ? 'active-tab' : ''}`} id="Education">
              <span className="faint" style={{ fontSize: '13px' }}>
                <ul>
                  <li>10th grade from R.B.P High School & Jr. College, Sankh in 2015, achieving a score of 87%.[2015]</li>
                  <li>12th from Walchand College of Arts & Science Solapur. (62%)[2017]</li>
                  <li>B-Tech degree from N B Navale Sinhgad College of Engineering, Kegaon-Solapur in 2022, with a final percentage of 67%.</li><br />
                  <li>
                    <a href="./Img/Ajay Morde resume FULL STACK4.pdf">
                      <button className="round-button">View Resume</button>
                    </a>
                    <button className="round-button" id="hire" onClick={() => window.location.href = './Contact'}>Hire me</button>
                  </li>
                </ul>
              </span>
            </div>

            <div className={`tab-contents ${activeTab === 'Skills' ? 'active-tab' : ''}`} id="Skills">
              <span className="faint">
                <ul>
                  <li><span>Programming Languages</span><span className="skls">: Java Javascript </span></li>
                  <li><span>Data Structure and Algorithm.</span></li>
                  <li><span>OOPs.</span></li>
                  <li><span>Back-end Technology: </span><span className="skls"> Node.js Express.js</span></li>
                  <li><span>Front-End Technologies:</span><span className="skls">Html css javascript React js</span></li>
                  <li><span>Database : </span><span className="skls">MySql MongoDb</span></li><br />
                  <li>
                    <button className="round-button" onClick={() => window.location.href = './Skills'}>Know more..</button>
                    <button className="round-button" id="hire" onClick={() => window.location.href = './Contact'}>Hire me</button>
                  </li>
                </ul>
              </span>
            </div>

            <div className={`tab-contents ${activeTab === 'Experience' ? 'active-tab' : ''}`} id="Experience">
              <ul>
                <li>
                  <h4>
                    <strong> INTERNSHIP</strong> <span><strong> || Sharpener | Sharpener Coding Bootcamp ||</strong></span>
                  </h4><br />
                </li>
                <li>
                  <style>
                    {`.faint { color: #ebe1e1; }`}
                  </style>
                  <span className="faint" style={{ color: 'rgb(243, 197, 197)' }}>
                    I have been actively involved in a full-stack development role in Sharpener, gaining valuable hands-on experience and expanding my skill set.
                    <br /><br />
                    During this immersive learning journey, I have had the opportunity to delve deep into the realm of full-stack development, equipping myself with a robust arsenal of technical proficiencies and industry best practices.
                  </span>
                  <br /><br />
                </li>
                <li>
                  <button className="round-button" onClick={() => window.location.href = './Experience'}>Know more..</button>
                  <button className="round-button" id="hire" onClick={() => window.location.href = './Contact'}>Hire me</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
