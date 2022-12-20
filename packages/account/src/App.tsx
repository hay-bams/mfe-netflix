import React, {ReactNode, useEffect} from 'react';
import {
  Route,
  BrowserRouter,
  MemoryRouter,
  Routes,
  useLocation,
  useNavigate,
  Location,
} from 'react-router-dom';

interface Props {
  Router?: typeof BrowserRouter;
  onNavigate?: (val: Location) => void;
  getCurrentRoute?: (val: any) => void;
}

interface BoxProps {
  children: ReactNode;
  onNavigate: (val: Location) => void;
  getCurrentRoute: (val: any) => void;
}

const Account = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Hello User Account</h1>
      <button onClick={() => navigate('/details')}> go to details</button>
    </>
  );
};

const Details = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Hello Account Details</h1>
      <button onClick={() => navigate('/')}>go to home</button>
    </>
  );
};

const Box = ({children, onNavigate, getCurrentRoute}: BoxProps) => {
  const location = useLocation();
  const navigate = useNavigate()
  useEffect(() => {
    onNavigate(location);
    getCurrentRoute(location);
    // navigate(location.pathname)
    console.log(location, '$$$$$$$$$')
    // console.log(location, '$$$$$$$');
  }, [location]);
  return <>{children}</>;
};

export const App = ({
  Router = MemoryRouter,
  onNavigate = () => {},
  getCurrentRoute = () => {},
}: Props) => (
  <div>
    <Router>
      <Box onNavigate={onNavigate} getCurrentRoute={getCurrentRoute}>
        <Routes>
          <Route path="/details" element={<Details />}></Route>
          <Route path="/" element={<Account />}></Route>
        </Routes>
      </Box>
    </Router>
  </div>
);
