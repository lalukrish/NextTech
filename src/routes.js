import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import SingupPage from './pages/SingupPage';
import Settings from './pages/Settings';
import AddPost from './pages/AddPost';
import MyCollection from './pages/MyCollection';
import StartCareer from './pages/Career-Home';
import LatestYouGo from './components/careers/career-intro-page';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        // {
        //   path: 'blog',
        //   element: <Navigate to="/dashboard/blog" />,
        // },
        { element: <Navigate to="/dashboard/blog" />, index: true },
        { path: 'blog', element: <BlogPage /> },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'Latestyougo', element: <LatestYouGo /> },
        // { path: 'user', element: <UserPage /> },
        { path: 'my-collection', element: <MyCollection /> },
        // { path: 'blog', element: <BlogPage /> },
        { path: 'settings', element: <Settings /> },
      ],
    },
    { path: 'addpost', element: <AddPost /> },

    {
      path: 'login',
      element: <LoginPage />,
    },
    { path: 'signup', element: <SingupPage /> },

    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
