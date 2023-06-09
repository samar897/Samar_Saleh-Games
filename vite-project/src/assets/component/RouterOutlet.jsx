//import About from "../component/About";
import Notfound from "../component/Notfound";
//import Nav from "../component/Nav";
//import Footer from "../component/Footer";
import Home from "../component/Home"; 
import Login from "./Login";
import Register from "./Register"; 

import { Box } from '@chakra-ui/react';

import React from 'react';


import {Route, Routes,Outlet } from 'react-router-dom';
/*
//import HomeExpanded from "./HomeExpanded";
import Images11 from '../component/IBM.jpg'
import SDAIA from '../component/SDAIA.jpg'
import Photo from '../component/photo1.jpg'*/

export default function RouterOutlet() {


  return (
<Box>

<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/register" element={<Register/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/logout" element={<Login/>}></Route>
<Route path="/*" element={<Notfound/>}></Route>


 <Route path="/home" element={
      
      <Box>
   
      <Home/>
     
      <Outlet/>
      
      </Box>
    }>
        
      </Route>


</Routes>

</Box>
  )
}
