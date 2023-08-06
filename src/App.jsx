import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './component/ui/Navbar.component';
import FooterComponent from './component/ui/Footer.component';
import HomePage from './pages/Home.page';
import AboutUsPage from './pages/Aboutus.page';
import ContactUsPage from './pages/Contactus.page';
import FAQPage from './pages/FAQ.page'; 
import './App.css';
import SignupPage from './pages/Signup.page';
import ValidSignupPage from './pages/ValidSignup.page';
import LoginPage from './pages/Login.page';
import ForgetPage from './pages/Forget.Page';
import CoinPage from './pages/Coin.page';
import CoinDetail from './pages/CoinDetail';


function App() {
  return (
    <div >
   {/* // Navbar */}
      <NavbarComponent />

    {/* // Wrapper */}
      <div className='wrapper d-flex flex-column'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/faq' element={<FAQPage/>}/>
          <Route path='/contact' element={<ContactUsPage/>}/>
          <Route path='/about' element={<AboutUsPage/>}/>
          <Route path='/signup' element={<SignupPage/>} />
          <Route path='/coin/:id' element={<CoinDetail/>}/>
          <Route path='/validsignup' element={<ValidSignupPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forget' element={<ForgetPage />} />
        </Routes>
      </div>
    {/* // Footer */}
      <FooterComponent />
    </div>
 
  );
}

export default App;
