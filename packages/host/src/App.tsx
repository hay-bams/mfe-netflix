import { Route, Routes} from 'react-router-dom';

import {AccountApp} from '@/components/AccountApp';
import {HomeApp} from '@/components/HomeApp';
import {Header} from '@/components/Header';

import '@/styles/index.css'

export const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="account/*" element={<AccountApp />} />
      <Route path="/*" element={<HomeApp />} />
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  </>
);

// <Route path="about" element={<div>About Page</div>} errorElement={<RouteErrorBoundary />} />
