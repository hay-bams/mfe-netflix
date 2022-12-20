import {Route, Routes, useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Hello Account</h1>
      <button onClick={() => navigate('/account/details')}> go to account details</button>
    </>
  );
};
const Details = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Hello Account Details</h1>
      <button onClick={() => navigate('/account')}>go to account</button>
    </>
  );
};

export const App = () => (
  <Routes>
    <Route path="/account" element={<Home />} />
    <Route path="/account/details" element={<Details />} />
  </Routes>
);
