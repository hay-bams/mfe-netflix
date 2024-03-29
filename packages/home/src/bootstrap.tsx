import ReactDOM from 'react-dom/client';
import {createMemoryRouter} from 'react-router-dom';
import {RouterState} from '@remix-run/router';
import {Provider} from 'react-redux';

import {RemixRouter} from './initRoutes/initRoutes.types';
import {createRouter} from './initRoutes';
import {App} from './App';
import {store} from './store/store';

interface MountOptions {
  onNavigate?: (val: RouterState) => void;
  router: RemixRouter;
}

export const mount = (element: HTMLElement | null, options?: MountOptions) => {
  const router = options?.router || createRouter(createMemoryRouter);
  const onNavigate = options?.onNavigate || (() => {});

  if (element) {
    const root = ReactDOM.createRoot(element!);
    root.render(
      <Provider store={store}>
        <App router={router} />
      </Provider>,
    );
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
