import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Nav from './components/Nav';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Footer from './components/Footer';

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
