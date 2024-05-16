import React from 'react';
import { Feature } from'../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature  title="What is GPT-3" text="GPT-3, or the Generative Pre-trained Transformer 3, is a state-of-the-art language model renowned for its remarkable capacity to comprehend and generate human-like text. It leverages a transformer architecture, a sophisticated neural network framework, to process and produce language with unprecedented fluency and coherence. GPT-3 has been hailed for its versatility, demonstrating prowess in tasks such as text completion, translation, and even code generation. This cutting-edge AI model has garnered attention for its potential to revolutionize various industries, from healthcare to entertainment, by augmenting human capabilities and redefining the boundaries of natural language processing.

"/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="GPT-3 bots can analyze, understand, and respond to customer questions; predict needs based on a single word; and enhance their human-like responses with every interaction "/>
        <Feature title="Knowledge-Base" text="GPT-3 can serve as a comprehensive database of knowledge that can be accessed with the right prompt. Knowing this has piqued my curiosity about the role of GPT-3 in knowledge management" />
        <Feature title="Education" text=" GPT-3 can be used to create highly personalized learning experiences, tailoring content and teaching methods to individual student needs and abilities. This can result in higher levels of student motivation and improved academic performance."/>

      </div>
    </div>
  )
}

export default WhatGPT3