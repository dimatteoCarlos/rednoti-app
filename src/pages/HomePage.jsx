import { homeArticles as datos } from '../data/homeArticles';
import MainArticles from '../components/MainArticles';
import Showcase from '../components/Showcase';
import LayoutPage from './LayoutPage';

export const imagesUrl = '../../imgs/articles/';

export const HomePage = () => {
  return (
    <>
      <LayoutPage>
        <Showcase />
        <MainArticles datos={datos} imagesUrl={imagesUrl} />
      </LayoutPage>
    </>
  );
};

export default HomePage;
