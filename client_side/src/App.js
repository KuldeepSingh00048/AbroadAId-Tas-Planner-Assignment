import React from 'react'
import Navbar from './component/Navbar';
import Footer from './component/footer';
import Home from './component/home';
import CreateWork from './component/creatework';
import Dashboard from './component/dashboard';
import ShowWork from './component/yourwork';
import Signup from './component/signup';
import Signin from './component/signin';
import { Routes, Route } from "react-router-dom";
import './component/index.css'
const App =()=> {
  return (
    <>
    <div >
          <Navbar />
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route exact path='/' element={<Home />} />
            <Route path='/create' element={<CreateWork/>} />
            <Route path='/show' element={<ShowWork/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/signin' element={<Signin/>} />
            {/* <Route path='/booking/:cityname' element={<Booking />} /> */}
            {/* <Route path='/about' element={<About/>} /> */}
          </Routes>
            <Footer />
    </div>
    </>
  );
}

export default App;
