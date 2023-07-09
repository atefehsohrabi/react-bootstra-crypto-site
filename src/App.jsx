import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './component/ui/Navbar.component';
import FooterComponent from './component/ui/Footer.component';
import HomePage from './pages/Home.page';
import AboutusPage from './pages/Aboutus.page';
import ContactusPage from './pages/Contactus.page';
import FAQPage from './pages/FAQ.page'; 
import './App.css';
import SignupPage from './pages/Signup.page';
import ValidSignupPage from './pages/ValidSignup.page';
import LoginPage from './pages/Login.page';
import ForgetPage from './pages/Forget.Page';


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
          <Route path='/contactus' element={<ContactusPage/>}/>
          <Route path='/aboutus' element={<AboutusPage/>}/>
          <Route path='/signup' element={<SignupPage/>} />
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
