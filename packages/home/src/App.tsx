import {Route, Routes, useNavigate} from 'react-router-dom';

const Home = () => <div />;
const Details = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Hello Home Details</h1>
      <button onClick={() => navigate('/')}>go to home</button>
    </>
  );
};

export const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/details" element={<Details />} />
  </Routes>
);
