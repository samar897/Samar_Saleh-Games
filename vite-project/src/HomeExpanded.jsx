

//import Images from '../public/unnamed.jpg'
//import { Route, Routes, Link } from 'react-router-dom';
//import Images2 from '../public/unnamed2.jpg'
//import Images3 from '../public/unnamed3.jpg'
//import About from "./assets/component/About";
//import Notfound from "./assets/component/Notfound";
//import ToggleColorMode from "./assets/component/ToggleColorMode";
//import { Link } from 'react-router-dom';

import {
  Box,SimpleGrid,
} from '@chakra-ui/react'
//import React from "react";
import Footer from "./assets/component/Footer";
import Nav from "./assets/component/Nav";

//import Display1 from "./assets/component/Display1";
import Card from "./assets/component/Card";


//<Route path="/*" element={<p> the page not found </p>}></Route>


export default function HomeExpanded() {
  return (

    <Box>

<Nav></Nav>



    <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
    <Card name=" Toyota" Dis="Toyota Camry: The Toyota Camry Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. " img="https://imgd.aeplcdn.com/664x374/n/cw/ec/110233/2022-camry-exterior-right-front-three-quarter.jpeg?isig=0&q=75"></Card>
    
    <Card name=" Honda " Dis="Honda Civic: The Honda Civic Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat." img="https://imgd.aeplcdn.com/664x374/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148156.jpeg?q=75" ></Card>
    
    </SimpleGrid>
  <Footer></Footer>



</Box>

  )
}
