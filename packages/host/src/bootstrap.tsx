import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';

import {router} from '@/routesInit';


const element = document.getElementById('root');

const root = ReactDOM.createRoot(element!);
// root.render(<App />)
root.render(<RouterProvider router={router} />);
