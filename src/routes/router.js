import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from '../shared/app-layout/AppLayout';

// import HomePage from './pages/HomePage';
import Posts from '../pages/Posts';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import PageNotFound from '../Components/PageNotFound';
import PostDetails from '../features/posts/PostDetails';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="posts" replace />,
      },

      {
        path: 'posts',
        element: <Posts />,
      },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      {
        path: 'posts/:postId',
        element: <PostDetails />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
