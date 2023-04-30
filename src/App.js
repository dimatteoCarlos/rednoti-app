import './css/style.css';
// import './css/mobile.css'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ErrorPage from './pages/ErrorPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import {loader as DetailNewsLoader,ArticleDetail} from './pages/ArticleDetail'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage />,
      element: <HomePage />,
      children:[
        {path:':Id',
          id:':id-detailRouter',
          // loader:DetailNewsLoader,
          // element:<ArticleDetail/>,
        },
      ]
    },
    {
      path: 'about',
      element: <AboutPage />,
    },
    {
      path: 'article',
      element: <ArticlePage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
