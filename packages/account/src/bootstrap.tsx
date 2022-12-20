import ReactDOM from 'react-dom/client';
import {BrowserRouter, Location} from 'react-router-dom';

import {App} from './App';

export const mount = (
  element: HTMLElement | null,
  onNavigate: (val: Location) => void = () => {},
  router?: typeof BrowserRouter,
) => {
  console.log('account','--------')


  if (element) {
    const root = ReactDOM.createRoot(element!);
    root.render(<App Router={router} onNavigate={(val) => {
      onNavigate(val)
    }}  getCurrentRoute={() => {}}/>);
  }
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_account-dev-root');
  if(devRoot) {
    mount(devRoot);
  }

}
