import {Route, Routes} from 'react-router-dom';

import {AccountApp} from '@/components/AccountApp';
import {HomeApp} from '@/components/HomeApp';
import {Login} from '@/components/Auth/Login';
import {PageWrapper} from '@/components/PageWrapper';

import '@/styles/index.css';

export const App = () => (
  <Routes>
    <Route path="login" element={<Login />} />
    <Route
      path="account/*"
      element={
        <PageWrapper>
          <AccountApp />
        </PageWrapper>
      }
    />
    <Route
      path="/*"
      element={
        <PageWrapper>
          <HomeApp />
        </PageWrapper>
      }
    />
    <Route path="*" element={<h2>Page Not Found</h2>} />
  </Routes>
);

// <Route path="about" element={<div>About Page</div>} errorElement={<RouteErrorBoundary />} />
