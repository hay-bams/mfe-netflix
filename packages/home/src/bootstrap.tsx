import { BrowserHistory, MemoryHistory } from '@remix-run/router';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import {App} from './App'


interface MountOptions {
  history: BrowserHistory | MemoryHistory;
}

export const mount = (element: HTMLElement | null) => {
  const history = createBrowserHistory();
  history.listen(() => console.log('hello history, $$$$$$##'))
  const root =  ReactDOM.createRoot(element!);
  root.render(<App Router={BrowserRouter} onNavigate={(val) => {
    console.log(val, '####@@@!!!!!')
  }} />);
}

if(process.env.NODE_ENV === 'development') {
  // console.log('@@@@@!!!!')
  const devRoot = document.getElementById('_home-dev-root');
  mount(devRoot)
}