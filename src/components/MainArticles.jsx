import ArticleBase from '../components/ArticleBase';
export const articleFormat = [
  { bg: '', showCover: false, showImage: false },
  { bg: 'bg-dark', showCover: false, showImage: false },
  { bg: 'bg-light', showCover: true, showImage: true },
  { bg: '', showCover: true, showImage: true },
  { bg: 'bg-light', showCover: true, showImage: true },
  { bg: '', showCover: true, showImage: true },
  { bg: 'bg-primary', showCover: true, showImage: true },
  { bg: '', showCover: true, showImage: true },
  { bg: 'bg-secondary', showCover: false, showImage: false },
];

const MainArticles = ({ datos, imagesUrl }) => {


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
              bg={articleFormat[x.id].bg}
              para1={x.desc[0].para}
              para2={x.desc[1].para}
              cover={`${imagesUrl}${x.cover}`}
              image={`${imagesUrl}${x.image}`}
              // show={articleFormat[x.id]}
              showCover={articleFormat[x.id].showCover}
              showImg={articleFormat[x.id].showImage}
            ></ArticleBase>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainArticles;
