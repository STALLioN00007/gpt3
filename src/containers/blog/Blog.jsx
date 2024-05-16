import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article imgUrl={blog01} date="Jan 1, 2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>

          </div>

          <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="Jan 1, 2024" title="The integration of GPT-3 and OpenAI into the fabric of human existence."/>
          <Article imgUrl={blog03} date="Mar 14, 2024" title="Can GPT-3 and Open  AI be used in Block Chain and Cryptography?"/>
          <Article imgUrl={blog04} date="Jun 24, 2024" title="Can GPT-3 and OpenAI be heralded as the new guardians of data security?"/>
          <Article imgUrl={blog05} date="Sep 7, 2024" title="Is OpenAI a harbinger of blessing or peril to humanity?"/>

          </div>

        </div>
    </div>
  )
}

export default Blog