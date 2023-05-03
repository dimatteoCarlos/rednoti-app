import { useParams } from 'react-router-dom';
import LayoutPage from './LayoutPage';
import { ArticleDetail } from '../components/articleDetail/ArticleDetail';
import { homeArticles as datos } from '../data/homeArticles';
import { todayArticle } from '../data/todayArticle';
import { getItem, showImgFn } from '../components/Functions';
import { imagesUrl } from './HomePage';

const ArticlePage = () => {
  //get parameter Id
  const { Id } = useParams();
  //Selection of data set
  const setData = Number(Id) > 0 ? datos : todayArticle;
  //find the item comparing Id and x.id
  // const item = setData.find((x) => Number(x.id) == Number(Id));
  const item = getItem(setData, Id);

  return (
    <>
      <LayoutPage>
        <ArticleDetail
          item={item}
          showImgFn={showImgFn}
          imageRoot={imagesUrl}
        />
      </LayoutPage>
    </>
  );
};

export default ArticlePage;
