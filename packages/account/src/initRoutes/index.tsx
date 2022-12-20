import {createBrowserRouter, createMemoryRouter} from 'react-router-dom';

import {App} from '@/App';

export const createRouter = (
  init: typeof createBrowserRouter | typeof createMemoryRouter,
) => {
  const router = init([{path: '*', element: <App />}]);

  return router;
};
