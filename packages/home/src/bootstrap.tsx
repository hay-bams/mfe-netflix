import ReactDOM from 'react-dom/client';
import {createMemoryRouter} from 'react-router-dom';
import {RouterState} from '@remix-run/router';

import {RemixRouter} from './initRoutes/initRoutes.types';
import {createRouter} from './initRoutes';
import {App} from './App';

interface MountOptions {
  onNavigate?: (val: RouterState) => void;
  router: RemixRouter;
}

export const mount = (element: HTMLElement | null, options?: MountOptions) => {
  const router = options?.router || createRouter(createMemoryRouter);
  const onNavigate = options?.onNavigate || (() => {});

  if (element) {
    const root = ReactDOM.createRoot(element!);
    root.render(<App router={router} />);
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
  const devRoot = document.getElementById('_home-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}
