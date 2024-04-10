import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import img1 from '../Images/Img/lap.png' 
import img2 from '../Images/Img/leetCode.png' 
import About from '../About/About';


const Home = () => {
    return (
        <>
        <div className="container">
            <div className="header-text">
                <img className="pimg" src={img1} alt="" />

                <p>
                    <span style={{ color: '#f19595' }}>
                        <FontAwesomeIcon icon={faLayerGroup} />
                    </span>
                    <strong> Full-Stack Developer </strong>
                    <span style={{ color: '#f19595' }}>
                        <FontAwesomeIcon icon={faLayerGroup} />
                    </span>
                </p>
                <h1>
                    Hi I AM Ajay Morde
                </h1>

                <div className="profiles">
                    <FontAwesomeIcon icon={faGithub} className="curs" onClick={() => window.location.href = 'https://github.com/AjayMorde'} />
                    <div className="linedin curs" style={{ color: '#0077B5' }} onClick={() => window.location.href = 'https://www.linkedin.com/in/ajay-morde-931b60207/'}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                    <div className="hack curs" style={{ color: 'rgb(31, 245, 31)' }} onClick={() => window.location.href = 'https://www.hackerrank.com/ajaymorde457?hr_r=1'}>
                        <FontAwesomeIcon icon={faHackerrank} />
                    </div>
                    <img className="curs" src={img2}alt="" height="33px" width="37px" onClick={() => window.location.href = 'https://leetcode.com/ajaymorde457/'} />
                    <button className="round-button">
                        <a href="./Img/Ajay Morde resume FULL STACK4.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
                    </button>
                </div>
            </div>
        </div>
        <br />
        <br />
       
        <About></About>
        
        </>
    );
}

export default Home;
