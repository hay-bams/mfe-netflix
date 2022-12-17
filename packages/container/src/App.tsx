import {Route, BrowserRouter, Routes} from 'react-router-dom';

import {HomeApp} from './components/HomeApp';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeApp  />} />
      <Route path="/account" element={<HomeApp />} />
    </Routes>
  </BrowserRouter>
);
