// https://github.com/remix-run/react-router/issues/9422#issuecomment-1301182219
import {createBrowserRouter, createMemoryRouter} from 'react-router-dom';

import {App} from '@/App';

export const createRouter = (
  init: typeof createBrowserRouter | typeof createMemoryRouter,
) => {
  console.log('@@@@@');
  const router = init([{path: '*', element: <App />}]);

  return router;
};

export const router = createRouter(createBrowserRouter);
