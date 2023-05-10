import { AuthorRibbon } from './AuthorRibbon';
import { CategoryList } from './CategoryList';
import { JoinClub } from './JoinClub';

export const ArticleDetail = ({ item, showImgFn, imageRoot }) => {
  //select  images to show
  const coverAddress = `${imageRoot}${item.cover}`;
  const imageAddress = `${imageRoot}${item.image}`;

  const imgToShow =
    (showImgFn(coverAddress) && coverAddress) ||
    (showImgFn(imageAddress) && imageAddress);

  return (
    <>
      <section id='article-news'>
        <div className='container'>
          <div className='page-container'>
            <article className='main-article card'>
              <img src={`${imgToShow}`} alt={`${imgToShow}`} />
              <h1 className='l-heading'>{item.title}</h1>

              <div className='author-info'>
                <AuthorRibbon
                  name={item.authorName}
                  date={item.time}
                  classCat={`category ${item.category}`}
                />

                <div className={`category ${item.category}`}>
                  {item.category}
                </div>
              </div>

              {item.desc.map((x, indx) => (
                <p key={indx}>{x.para}</p>
              ))}
            </article>

            <aside className='categories card'>
              <h2>categories</h2>
              <CategoryList />
              <JoinClub />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
