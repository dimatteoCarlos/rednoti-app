
import MainArticles from '../components/MainArticles';
import Showcase from '../components/Showcase';
import LayoutPage from './LayoutPage';
// import '../css/style.css';

export const HomePage = () => {
  return (
    <>
      <LayoutPage>
        <Showcase />
        <MainArticles />
      </LayoutPage>

    </>
  );
};

export default HomePage;
