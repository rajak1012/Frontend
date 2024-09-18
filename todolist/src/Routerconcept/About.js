import React from 'react'

const About = () => {
  return (
    <div>
    <h1>About Page</h1>
    </div>
  )
}

export default About
/*
import './App.css';
 import Home from './Routerconcept/Home.js';
 import  About from './Routerconcept/About.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Oldbooks from './Routerconcept/Oldbooks.js';
import Newbooks from './Routerconcept/Newbooks.js';
import Login from './Routerconcept/Login.js';
import Getpost from './Getpost.js';

function App() {
  return (
   <>
  <Getpost/>
   <BrowserRouter>
   <ul>
    <li><Link to='/' >Home</Link></li>
    <li><Link to='/about' >About page</Link></li>
    <li><Link to='/book/old' >Oldbooks</Link></li>
    <li><Link to='/book/new' >Newbooks</Link></li>
    <li><Link to='/login' >Login</Link></li>
   </ul>
   
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/book'>
        <Route path='old' element={<Oldbooks/>} ></Route>
        <Route path='new' element={<Newbooks/>} ></Route>
      </Route>
      <Route path='/login' element= {<Login />}></Route>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
*/ //this is in App.js code 