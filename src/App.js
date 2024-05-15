import React from 'react';
import './App.css';
import {Routes, Route, } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import About from './pages/About/About';
import Academics from './pages/Academics/Academics';
import Contact from './pages/Contact/Contact';
import Student from './Student';
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminLogin from './pages/AdminLogin/AdminLogin';

import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#bed2e5',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#626364',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  { id: 'chatbot', message: "Hey cute!", trigger: "chatbot1" },
  { id: 'chatbot1', user: true, trigger: "1" },
  { id: '1', message: "What's your name?", trigger: "2" },
  { id: '2', user: true, trigger: "3" },
  { id: '3', message: "Hi {previousValue}, how's it goin?", trigger: "4" },
  { id: '4', message: "What can I do for you?", trigger: "5" },
  {
    id: '5',
    options: [
      { value: 1, label: 'About Us', trigger: 'AboutPage' },
      { value: 2, label: 'Facebook', trigger: 'FacebookPage' },
      { value: 3, label: 'Location', trigger: 'Our Location in Google Map' },
      { value: 4, label: 'CourseList', trigger: 'Course' },
      { value: 5, label: 'Contact Us', trigger: 'Contact' },
      { value: 6, label: 'Academic', trigger: 'Academics' },
      { value: 7, label: 'Portal', trigger: 'UdmPortal' },
  
    ],
  },
  {
    id: 'AboutPage',
    message: 'You can learn more about us by clicking the link below:',
    trigger: 'About Us',
  },
  {
    id: 'About Us',
    component: (
      <div>
        <a href='http://localhost:3000/about' target='_blank' rel='noopener noreferrer'>
          About Us
        </a>
      </div>
    ),
    trigger: '5',
    
  },
  {
    id: 'FacebookPage',
    message: 'You can check our facebook page by clicking the link below:',
    trigger: 'Facebook',
  },
  {
    id: 'Facebook',
    component: (
      <div>
        <a href='https://www.facebook.com/UdM.Merlions' target='_blank' rel='noopener noreferrer'>
          Facebook Page
        </a>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'Our Location in Google Map',
    message: 'You can locate us through google map by clicking the link below:',
    trigger: 'Location',
  },
  {
    id: 'Location',
    component: (
      <div>
        <a href='https://www.google.com/maps/place/Universidad+De+Manila/@14.5912009,120.9806225,17z/data=!4m6!3m5!1s0x3397ca18d1ebbc55:0xd017325c95111277!8m2!3d14.5915659!4d120.9815705!16zL20vMGR6bGI2?entry=ttu' target='_blank' rel='noopener noreferrer'>
          Our Location
        </a>
      </div>
    ),
    trigger:'5',
  },
  {
    id: 'Course',
    message: 'This is all the Courses that udm have',
    trigger: 'CourseList',
  },
  {
    id: 'CourseList',
    component: (
      <div>
      <a href='http://localhost:3000/courses' target='_blank' rel='noopener noreferrer'>
          Our Course List
        </a>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'Contact',
    message: 'This is the contact of Udm',
    trigger: 'Contact Us',
  },
  {
    id: 'Contact Us',
    component: (
      <div>
      <a href='http://localhost:3000/contact' target='_blank' rel='noopener noreferrer'>
          Our Contact
        </a>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'Academics',
    message: 'This is the Academics',
    trigger: 'Academic',
  },
  {
    id: 'Academic',
    component: (
      <div>
      <a href='http://localhost:3000/academics' target='_blank' rel='noopener noreferrer'>
          Academics 
        </a>
      </div>
    ),
    trigger: '5',
  },
  {
    id: 'UdmPortal',
    message: 'This is the UdmPortal',
    trigger: 'Portal',
  },
  {
    id: 'Portal',
    component: (
      <div>
      <a href='https://portal.udm.edu.ph/register/' target='_blank' rel='noopener noreferrer'>
          UdmPortal
        </a>
      </div>
    ),
    end: true,
  },
  
];
function App() {

  return (

    <div>
      <Navbar expand = "lg" className='position-absolute w-100'>
        <Container>
          <Navbar.Brand>
            <Link to = "/" className='navbar-brand d-flex align-items-center'>
              <svg xmlns="https://images.app.goo.gl/mLfzq7D3A6qpj1fW6" width="50" height="50" fill="#23caba" class="bi bi-app" viewBox="0 0 16 16">
                <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4z"/>
              </svg>
              <span className='mx-2 text-light 1h-1 fw-semibold'>
                Universidad De Manila 
                <br></br> Former City College of Manila <br></br> 659-A Cecilia Muñoz St, Ermita, Manila, 1000 Metro Manila <br></br>
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light'/>
          <Navbar.Collapse id = 'basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/adminlogin' className='text-uppercase' > Admin Login</Nav.Link>
              <Nav.Link href='/' className='text-uppercase' > Home</Nav.Link>
              <Nav.Link href='/courses' className='text-uppercase' > Courses</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase' > About</Nav.Link>
              <Nav.Link href='/academics' className='text-uppercase' > Academics</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase' > Get in Touch</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

   
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/academics' element={<Academics/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path ='/' element = {<Student/>}></Route>
        <Route path ='/adminlogin' element = {<AdminLogin/>}></Route>
      </Routes>
   

      <footer>
        <div className='container my-5'>
          <div className='row d-flex justify-content-between align-items-center'>
            <div className='col-md-4'>
              <Link to="/contact">
                <button type ='button' className='btn btn-outline-danger btn-lg mb-5 mb-md-4'>Click Me
                </button>
              </Link>
              <ul className='footer-social-icons list-unstyled d-flex justify-content-between'>
                <Link to="/contact">
                  <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#12aaff" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                  </svg>
                  </li>
                </Link>
              </ul>
            </div>
            <div className='col-md-7 col-lg-6'>
              <div className='d-row d-md-flex justify-content-between align-items-center'>
                <div className='col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0'>
                  <ul className='footer-navigation list-unstyled mb-0'>
                  <Link to="/adminlogin" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>AdminLogin</li>
                    </Link>
                    <Link to="/" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Home</li>
                    </Link>
                    <Link to="/courses" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Courses</li>
                    </Link>
                    <Link to="/about" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>About</li>
                    </Link>
                    <Link to="/academics" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Academics</li>
                    </Link>
                    <Link to="/contact" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Click Me</li>
                    </Link>
                  </ul>
                </div>
                <div className='col-12 col-md-6 col-lg-7'>
                  <ul className='list-unstyled mb-0'>
                    <li>
                      <p>Main Address - 659-A Cecilia Muñoz St, Ermita, Manila, 1000 Metro Manila</p>
                    </li>
                    <li>
                      <p>Contact Number - +639999999999 </p>
                    </li>
                    <li>
                      <p>Email </p>
                      <p>      - treasuryoffice@udm.edu.ph</p>
                      <p>      - udmalumni.official@gmail.com</p>
                      <p>      - registrarsoffice@udm.edu.ph</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className='bg-body-tertiary'>
            <div className='container'>
              <p className='p-3 m-0 text-center'>copyright @ made by students</p>
          </div>
        </div>
      </footer>
      
    
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} />;
  </ThemeProvider>
      
    
    </div>
  );
}

export default App;
