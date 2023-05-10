import './css/style.css';
// import './css/mobile.css'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ErrorPage from './pages/ErrorPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './css/style.css';
import './css/mobile.css';

function App() {

  // window.document.title=estadoTitulo;

  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage />,
      element: <HomePage />,
    },
    {
      path: ':Id',
      element: <ArticlePage></ArticlePage>,
    },
    {
      path: 'about',
      element: <AboutPage />,
    },
    
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
