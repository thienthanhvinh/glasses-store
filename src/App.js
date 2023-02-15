
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Routes>
      <Route path='/sign-up' element={<SignUpPage></SignUpPage>}></Route>
      <Route path='/sign-in' element={<SignInPage></SignInPage>}></Route>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/shop' element={<ShopPage></ShopPage>}></Route>
      <Route path='/about' element={<AboutPage></AboutPage>}></Route>
      <Route path='/contact' element={<ContactPage></ContactPage>}></Route>

    </Routes>
  );
}

export default App;
