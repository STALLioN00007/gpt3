import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Let's embark on a journey to create something truly remarkable with GPT-3. A platform that seamlessly integrates with various industries, leveraging the power of natural language processing to enhance productivity, creativity, and innovation.</p>
        <p>A world where language is no longer a barrier to communication.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address "/>
        <button type="button">Get Started</button>
      </div>
      

       <div className="gpt3__header-content__people">
        <img src={people} alt="people"/>
        <p>1,600 people requested access a visit in last 24 hours</p>
       </div>
     </div>

      *<div className="gpt3__header-image">
        <img src={ai} alt="ai"/>
      </div>
    </div>
  );
}

export default Header;