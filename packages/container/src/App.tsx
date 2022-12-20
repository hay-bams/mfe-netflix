import {Link, Route, Routes} from 'react-router-dom';
import styled from 'styled-components';

import {AccountApp} from '@/components/AccountApp';
import {HomeApp} from '@/components/HomeApp';

const HeaderContainer = styled.div`
  display: flex;
`;
const HeaderItem = styled.div`
  &:not(:nth-child(1)) {
    margin-left: 10px;
    color: red;
  }
`;

const Header = () => (
  <HeaderContainer>
    <HeaderItem>
      <Link to="/">link to home</Link>
    </HeaderItem>

    <HeaderItem>
      <Link to="/details">link to details</Link>
    </HeaderItem>

    <HeaderItem>
      <Link to="/account">link to Account</Link>
    </HeaderItem>

    <HeaderItem>
      <Link to="/account/details">link to account details</Link>
    </HeaderItem>
  </HeaderContainer>
);

export const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/account/*" element={<AccountApp />} />
      <Route path="/*" element={<HomeApp />} />
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  </>
);

// <Route path="about" element={<div>About Page</div>} errorElement={<RouteErrorBoundary />} />
