import ArticleBase from '../components/ArticleBase';
import { homeArticles as datos } from '../data/homeArticles';

const MainArticles = () => {
  // datos.forEach((x) => console.log(x.cover, x.image));
  const imagesUrl = '../../imgs/articles/';
  const articleBG = [
    '',
    'bg-dark',
    'bg-light',
    '',
    'bg-light',
    '',
    'bg-primary',
    '',
    'bg-secondary',
  ];

  return (
    <section id='main-articles' className='py-2'>
      <div className='container'>
        <h2 className=''>EDITORS PICKED</h2>
        <div className='articles-container card'>
          {datos.map((x, indx) => (
              <ArticleBase
                className={'card bg-dark'}
                key={x.id}
                id={x.id}
                category={x.category}
                title={x.title}
                bg={articleBG[x.id]}
                para1={x.desc[0].para1}
                para2={x.desc[1].para2}
                cover={`${imagesUrl}${x.cover}`}
                image={`${imagesUrl}${x.image}`}
              ></ArticleBase>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainArticles;
