import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const NotFound = React.lazy(() => import('src/views/notFound'));
const AppRoot = React.lazy(() => import('src/views/root'));

import APP_LINKS from './links';

export const router = [
  {
    path: APP_LINKS.root,
    element: <AppRoot />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const AppRouter = createBrowserRouter(router);
export default AppRouter;
