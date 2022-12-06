import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import {App} from './App'

export const mount = (element: HTMLElement | null, router?: typeof BrowserRouter ) => {
  if(element) {
    const root =  ReactDOM.createRoot(element!);
    root.render(<App Router={router} onNavigate={(val) => {
      console.log(val, '####@@@!!!!!')
    }} />);
  }

}

if(process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_home-dev-root');
  mount(devRoot)
}