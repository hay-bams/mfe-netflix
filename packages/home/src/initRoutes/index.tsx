import {
  createBrowserRouter,
  createMemoryRouter,
  useNavigate,
} from 'react-router-dom';

import {Home, loader as getAllMoviesLoader} from '@/pages/Home/Home';

const Details = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Hello Home Details</h1>
      <button onClick={() => navigate('/')}>go to home</button>
    </>
  );
};

export const createRouter = (
  init: typeof createBrowserRouter | typeof createMemoryRouter,
) => {
  const router = init([
    {path: '/', element: <Home />, loader: getAllMoviesLoader},
    {path: '/path', element: <Details />, loader: getAllMoviesLoader},
  ]);

  return router;
};
