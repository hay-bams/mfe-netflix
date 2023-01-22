// https://github.com/remix-run/react-router/issues/9422#issuecomment-1301182219
import {createBrowserRouter, createMemoryRouter} from 'react-router-dom';

import {App} from '@/App';
import {AuthProvider} from '@/hooks/useAuth';

export const createRouter = (
  init: typeof createBrowserRouter | typeof createMemoryRouter,
) => {
  const router = init([
    {
      path: '*',
      element: (
        <AuthProvider>
          <App />
        </AuthProvider>
      ),
    },
  ]);

  return router;
};

export const router = createRouter(createBrowserRouter);
