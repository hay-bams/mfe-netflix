import {Route, Routes, useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Hello Account</h1>
      <button onClick={() => navigate('/details')}> go to account details</button>
    </>
  );
};
const Details = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Hello Account Details</h1>
      <button onClick={() => navigate('/')}>go to account</button>
    </>
  );
};

export const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/details" element={<Details />} />
  </Routes>
);
