import {Route, Routes, useNavigate} from 'react-router-dom';

const Home = () => <div />;
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
    <Route path="/" element={<Home />} />
    <Route path="/account" element={<Home />} />
    <Route path="/account/details" element={<Details />} />
  </Routes>
);
