import React, { useState } from 'react';
import { FaPaperPlane, FaPhone, FaWhatsapp, FaHome } from 'react-icons/fa';
import styled from 'styled-components';

// Styled components

const GitHubButton = styled.a`
border: 1px solid blue;
border-radius: 20px;
padding: 10px 20px;
background-color: transparent;
color: blue;
transition: background-color 0.3s;
cursor: pointer;
text-decoration: none; 
margin-right:30px;

  &:hover {
    background-color: #444;
  }
`;



// Define ButtonContainer and GitHubButton
// const ButtonContainer = styled.div``;
// const GitHubButton = styled.a``;

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyV65gsYuzBD775Qv7NkG3Zp6jDXg5dQpRMDAUq8-EzugXMJcIrhYNFLSogoqADLRdvkQ/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        setMessageSent(true);
        form.reset();
        setTimeout(() => setMessageSent(false), 5000);
      } else {
        console.error('Error!', response.statusText);
      }
    } catch (error) {
      console.error('Error!', error.message);
    }
  };

  return (
    <div className="contact" id="cont">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact-Me</h1>
            <p><FaPaperPlane /> ajaymorde457@gmail.com</p>
            <p><FaPhone /> 7517537095</p>
            <p><FaWhatsapp style={{ color: '#25D366' }} /> 8265072217</p>
            <p><FaHome /> Solapur, Maharashtra</p>
            {/* Define or remove ButtonContainer and GitHubButton */}  <br />
            
              <GitHubButton href="https://github.com/AjayMorde" target="_blank">Github Profile</GitHubButton>
            
            {/* Define or remove the button for downloading CV */}
            <a href="./Img/Ajay Morde resume FULL STACK4.pdf" download="" className="btn btn2 btn3">Download CV</a>
          </div>
          <div className="contact-right">
            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
              <input type="text" id="name" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <input type="text" name="Phone" id="Phone" placeholder="Your Mobile Number" required />
              <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
            <span id="msg">{messageSent && "Message sent successfully"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
