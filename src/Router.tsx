import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/main/App';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
