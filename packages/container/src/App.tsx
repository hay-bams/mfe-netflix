import {Link, Route, Routes} from 'react-router-dom';

import {AccountApp} from '@/components/AccountApp';
import {HomeApp} from '@/components/HomeApp';

export const App = () => (
  <>

    
    <Link to="/details">link to details</Link>
    <br />
    <Link to="/">link to home</Link>
      <Routes>
        <Route path="/account" element={<AccountApp />} />
        <Route path="/*" element={<HomeApp />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>

  </>
);

// <Route path="about" element={<div>About Page</div>} errorElement={<RouteErrorBoundary />} />
