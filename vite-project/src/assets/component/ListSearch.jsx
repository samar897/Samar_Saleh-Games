//import React from 'react'
import Search from './Search'
//import SearchList from './SearchList'
import initialDetails from './initialDetails'
import Footer from "./Footer";
import Nav from "./Nav";

import {
   
    Box,SimpleGrid,

  } from "@chakra-ui/react";

export default function ListSearch() {
  return (


    <Box _dark={{ color: "black", bg:'#1A202C', border:"3px solid #006A7B"}}
    border="3px solid #5CA0AB" margin={5}>

    <Nav home="Home Page" logout="Sign out"></Nav>
    <center>
    <SimpleGrid columns={2} spacingX='40px' spacingY='20px' margin={200}>
    <center>
    <Search details={initialDetails}/>
    </center>
    </SimpleGrid></center>
    <Footer></Footer>
    </Box>
  )
}
