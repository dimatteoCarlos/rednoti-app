import { Link } from 'react-router-dom';
import ArticleBase from './ArticleBase';
import { homeArticles as datArt } from '../data/homeArticles.jsx';

//article picked as showcase
const pickedArtIndx = 0;
const showCaseArticle = {
  props: datArt[pickedArtIndx],
  para2: datArt[pickedArtIndx].desc[1],
  para1: datArt[pickedArtIndx].desc[0],
};

const Showcase = () => {
  return (
    <section id='showcase'>
      <div></div>
      <div className='container'>
        <div className='showcase-container'>
          <div className='showcase-content'>
            <ArticleBase
            //this way of sending the props delay de loading
              {...showCaseArticle.props}
              para1={showCaseArticle.para1.para}
              para2={showCaseArticle.para2.para}
            ></ArticleBase>

            <div className='btn btn-primary prueba'>
              <Link to='/1'>Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
