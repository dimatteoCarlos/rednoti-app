import { Link } from 'react-router-dom';

function showImg(img) {
  return !!img ? img.substring(img.lastIndexOf('.') + 1).length === 3 : false;
}

const ArticleBase = ({
  id,
  category,
  title,
  para1,
  para2,
  bg,
  cover,
  image,
}) => {
  return (
    <article className={`${bg} card `}>
      {showImg(cover) && <img src={cover} alt={cover} className='card' />}

      <div className='card'>
        <span className={`category ${category} `}>{category}</span>
        <Link to={id}>
          <h3>{title}</h3>
        </Link>
        <p>{para1}</p>
      </div>

      <div className='card'>
        {showImg(image) && <img src={image} alt={image} />}
        {id === 3 ? <p>{para2}</p> : ''}
      </div>
    </article>
  );
};

export default ArticleBase;
