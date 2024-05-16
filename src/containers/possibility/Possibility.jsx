import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility"/>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>The potential applications of GPT-3 are vast and multifaceted, promising a paradigm shift in numerous fields. Its versatility extends to revolutionizing human-computer interaction, augmenting creative endeavors, enhancing educational experiences, and catalyzing breakthroughs in scientific research. GPT-3's capacity to synthesize vast amounts of information and generate contextually relevant responses imbues it with the transformative potential to redefine the boundaries of artificial intelligence and elevate the capabilities of digital assistants, chatbots, and other AI-driven technologies to unprecedented heights.
</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}

export default Possibility