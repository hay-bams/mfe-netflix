import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter, createMemoryRouter} from 'react-router-dom';
import {RouterState} from '@remix-run/router';

import {RemixRouter} from './initRoutes/initRoutes.types';
import {createRouter} from './initRoutes';

interface MountOptions {
  onNavigate?: (val: RouterState) => void;
  router: RemixRouter;
}

export const mount = (element: HTMLElement | null, options?: MountOptions) => {
  const router = options?.router || createRouter(createBrowserRouter);
  const onNavigate = options?.onNavigate || (() => {});

  if (element) {
    const root = ReactDOM.createRoot(element!);
    root.render(<RouterProvider router={router} />);
  }

  router.subscribe(onNavigate);

  return {
    onParentNavigate({pathname: nextPathname}: {pathname: string}) {
      const {pathname} = router.state.location;
      if (pathname !== nextPathname) {
        router.navigate(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_account-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}
