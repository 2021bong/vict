import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Nav from './components/Nav';
import Main from './pages/main/Main';
import Footer from './components/Footer';

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
