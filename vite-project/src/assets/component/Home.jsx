

//import Images from '../public/unnamed.jpg'
//import { Route, Routes, Link } from 'react-router-dom';
//import Images2 from '../public/unnamed2.jpg'
//import Images3 from '../public/unnamed3.jpg'
//import About from "./assets/component/About";
//import Notfound from "./assets/component/Notfound";
//import ToggleColorMode from "./assets/component/ToggleColorMode";
//import { Link } from 'react-router-dom';

import { React, useState } from "react";
import List from "./List"


import {
  Box,SimpleGrid,HStack,InputGroup, InputLeftElement,Input
} from '@chakra-ui/react'   

import Footer from "./Footer";
import Nav from "./Nav";
//import Home from "./Home"; 

//import Display1 from "./assets/component/Display1";
import Card from '../component/Card'

import {
  AiOutlineSearch,

} from "react-icons/ai";


//<Route path="/*" element={<p> the page not found </p>}></Route>


export default function Home() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase); };

  
  return (    

    <Box>

    <Nav home="Home Page" logout="Sign out"></Nav>

    <HStack spacing={3} alignItems="center">
          <InputGroup display={{ base: "none", lg: "block" }} ml="auto">
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch />
              
            </InputLeftElement>
            <Input type="tel" placeholder="Search..." onChange={inputHandler} />
          </InputGroup>
        </HStack>
        <List input={inputText} />
 

    <SimpleGrid columns={3} spacingX='40px' spacingY='20px' >


    <Card name="Assassin's Creed Origins (PS4)" Dis="The Discovery Tour by Assassin’s Creed: Ancient Egypt is available now as a free update!Ancient Egypt, a land of majesty and intrigue, is disappearing in a ruthless fight for power. " 
    img={"https://m.media-amazon.com/images/I/71H3F4vqPIS._SX425_.jpg"}
     item1={"Assassin"} item2={"PlayStation 4"}></Card>

    <Card name="Hogwarts Legacy" Dis="Hogwarts Legacy is an open-world action RPG set in the world introduced in the Harry Potter books; Explore and discover magical beasts, customize your character and craft potions, master spell casting, upgrade talents and become the wizard you want to be"
     img={"https://m.media-amazon.com/images/I/812H5hRw6TL._AC_SL1500_.jpg"} 
     
     item1={"Harry Potter"} item2={" PlayStation4"}></Card>

     

    <Card name="Shadow of the Tomb Raider" Dis="orgiving jungle setting in order to survive. Explore underwater environments filled with crevasses and deep tunnel systems" img={"https://m.media-amazon.com/images/I/917q49DeTgL._AC_SL1500_.jpg"} item1={"Definitive Edition"} item2={"Open World"}></Card>
    <Card name="Horizon Forbidden West" Dis="Brave an expansive open world - discover distant lands, new enemies, rich cultures and striking characters" img={"https://m.media-amazon.com/images/I/81WLMsIZF5L._AC_SL1500_.jpg"} item1={"PS4 and More"} item2={"Open World"}></Card>
    <Card name="Ghost of Tsushima" Dis="Brave an expansive open world - discover distant lands, new enemies, rich cultures and striking characters" 
    img={"https://m.media-amazon.com/images/I/81XPzboI34S._SL1500_.jpg"}
     item1={"Japanese Game"} item2={"Traditional"} ></Card>

     
     <Card name="Crash Bandicoot N.Sane Trilogy" Dis="Experience N. Tense Platforming, Epic Challenges & Adventures" img={"https://m.media-amazon.com/images/I/71UtDDAfxBL._AC_SL1500_.jpg"} item1={"3 Full Games"} item2={"100+ Levels & 2 Playable Characters"}></Card>


    </SimpleGrid>
  <Footer></Footer>



</Box>

  )
}
