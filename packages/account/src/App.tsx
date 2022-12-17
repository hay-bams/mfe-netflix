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
}

interface BoxProps {
  children: ReactNode;
  onNavigate: (val: Location) => void;
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

const Box = ({children, onNavigate}: BoxProps) => {
  const location = useLocation();
  useEffect(() => {
    onNavigate(location);
    // console.log(location, '$$$$$$$');
  }, [location]);
  return <>{children}</>;
};

export const App = ({Router = MemoryRouter, onNavigate = () => {}}: Props) => (
  <div>
    <Router>
      <Box onNavigate={onNavigate}>
        <Routes>
          <Route path="/" element={<Account />}></Route>
          <Route path="/details" element={<Details />}></Route>
        </Routes>
      </Box>
    </Router>
  </div>
);
