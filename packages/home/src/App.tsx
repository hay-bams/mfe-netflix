import {RouterProvider} from 'react-router-dom';

import {RemixRouter} from './initRoutes/initRoutes.types';

import '@/styles/index.css';

interface Props {
  router: RemixRouter;
}

export const App = ({router}: Props) => <RouterProvider router={router} />;
