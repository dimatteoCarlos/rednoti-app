import React from 'react';
import '../css/style.css';
import { Link } from 'react-router-dom';
import ArticleBase from './ArticleBase';
import { homeArticles } from '../data/homeArticles.jsx';

const Showcase = () => {
  return (
    <section id='showcase'>
      <div></div>
      <div className='container'>
        <div className='showcase-container'>
          <div className='showcase-content'>
            <ArticleBase
              category='sports'
              title='Women Soccer championship'
              bg=''
              para1="The eight FIFA Women's World Cup tournaments have been won by four national teams. The United States have won four times, and are the current champions after winning it at the 2019 tournament in France"
            ></ArticleBase>

            <div className='btn btn-primary prueba'>
              <Link to='/article'>Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
