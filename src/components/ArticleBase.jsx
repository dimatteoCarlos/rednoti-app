import { Link } from 'react-router-dom';
import { showImgFn } from './Functions';
import ArticlePage from '../pages/ArticlePage';

const ArticleBase = ({
  id,
  category,
  title,
  bg,
  cover,
  image,
  showCover,
  showImg,
  para1,
  para2,
}) => {

  return (
    <article className={`${bg} card `}>
      {showCover && showImgFn(cover) && (
        <img src={cover} alt={cover} className='card' />
      )}

      <div className='card'>
        <span className={`category ${category} `}>{category}</span>

        <Link to={`/${id}`} element={<ArticlePage/>} >
          <h3>{title}</h3>
        </Link>

        <p>{para1}</p>
      </div>

      <div className='card'>
        {showImg && showImgFn(image) && (
          <img src={image} alt={image} className='' />
        )}
        {id === 3 ? <p>{para2}</p> : ''}
      </div>
    </article>
  );
};

export default ArticleBase;
