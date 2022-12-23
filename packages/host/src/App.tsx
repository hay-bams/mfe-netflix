import {Route, Routes} from 'react-router-dom';
import styled from 'styled-components';

import {AccountApp} from '@/components/AccountApp';
import {HomeApp} from '@/components/HomeApp';
import {Header} from '@/components/Header/Header';

import '@/styles/index.css';

const AppContainer = styled.div`
  position: relative;
  height: 100vh;
  background-image: linear-gradient(to bottom, rgba(17, 24, 39, 0.1), #010511);
  
  @media only screen and (min-width: 1024px) {
    height: 140vh;
  }
`;

export const App = () => (
  <AppContainer>
    <Header />
    <Routes>
      <Route path="account/*" element={<AccountApp />} />
      <Route path="/*" element={<HomeApp />} />
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  </AppContainer>
);

// <Route path="about" element={<div>About Page</div>} errorElement={<RouteErrorBoundary />} />
