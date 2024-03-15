import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Components/HomePage/HomePage'
import AboutUs from './Components/AboutUs/AboutUs'
import Sectors from './Components/Sectors/Sectors'
import Candidates from './Components/Candidates/Candidates'
import Testimonials from './Components/Testimonials/Testimonials'
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'
import CookiesPage from './Components/CookiesPage/CookiesPage'
import ContactPage from './Components/ContactPage/ContactPage'
import logo from './Components/PC_emailsignature-01.png'
import linkedIn from './assets/linkedIn.png'
import email from './assets/email.png'
import insta from './assets/insta.png'


function App() {
 

  return (
    <>
      <BrowserRouter>
        <nav className='navbar'>
          <div>
            <NavLink to="/"><img className='logo' src={logo} alt="" /></NavLink>
          </div>
          <div className='nav-links'>
            <NavLink to="/aboutus" activeClassName='active' >About Us</NavLink>
            <NavLink to="/sectors" activeClassName='active'>Sectors</NavLink>
            <NavLink to="/candidates" activeClassName='active'>Candidates</NavLink>
            <NavLink to="/testimonials" activeClassName='active'>Testimonials</NavLink>
            <Link ><img className='linkedin' src={linkedIn}></img></Link>
            <Link ><img className='email' src={email}></img></Link>
            <Link ><img className='insta' src={insta}></img></Link>
            <NavLink to="/contact"><button className='contact-button'>CONTACT</button></NavLink>
          </div>
        </nav>

        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/aboutus' element={<AboutUs/>}></Route>
          <Route path='/sectors' element={<Sectors/>}></Route>
          <Route path='/candidates' element={<Candidates/>}></Route>
          <Route path='/testimonials' element={<Testimonials/>}></Route>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}></Route>
          <Route path='/cookies' element={<CookiesPage/>} ></Route>
          <Route path='/contact' element={<ContactPage/>} ></Route>
        </Routes>


        <footer>
          <div className='nav-links'>
            <a href="#"><img className='linkedin' src={linkedIn} alt="" /></a>
            <a href="#"><img className='email' src={email} alt="" /></a>
            <a href="#"><img className='insta' src={insta} alt="" /></a>
          </div>
          <div>
            <a href="">50 LIVERPOOL STREET, LONDON, EC2M 7PY</a>
          </div>
          <div>
            <a href="">+44 (0) 207 043 0426</a>
          </div>
          <div>
            <Link to="/privacy-policy">PRIVACY POLICY</Link>
            <Link to="/cookies">COOKIES</Link>
          </div>
        </footer>
      </BrowserRouter>
    </>

  )
}

export default App
