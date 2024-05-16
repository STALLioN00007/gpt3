import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title:'Improving end distrusts instantly',
    text:'It is a language model that leverages deep learning to generate human-like text (output). Not only can it produce text, but it can also generate code, stories, poems, etc.',
  },

  {
    title:'Become the trend',
    text:' processes text input to perform a variety of natural language tasks. It uses both natural language generation and natural language processing to understand and generate natural human language text.',
  },

  {
    title:'Message in GPT-3',
    text:'For the uninitiated, GPT-3 (Generative Pre-trained Transformer 3) is an autoregressive language model that uses deep learning to produce human-like text.',
  },

  {
    title:'GPT-3 Active Users',
    text:'According to the latest available data, ChatGPT currently has around 180.5 million users. The website generated 1.63 billion visits in February 2024.',
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map(( item, index) =>(
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}


      </div>
    </div>
  )
}

export default Features