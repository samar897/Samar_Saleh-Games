import React from 'react'
//import Home from "./Home"; 
import Footer from "./Footer";
import Nav from "./Nav";

import Img from './a74c9aa349a442927c6cb70be828cea8.jpg'
import { Box, Flex, Image, Link, chakra } from "@chakra-ui/react";

//import { Link as Link2 } from 'react-router-dom';


export default function About() {
  return (

    <Box>

    <Nav home="Home"></Nav>
    <Flex
    bg="#edf3f8"
    _dark={{ bg: "#3e3e3e" }}
    p={50}
    w="full"
    alignItems="center"
    justifyContent="center"
  >
    <Box
      mx="auto"
      rounded="lg"
      shadow="md"
      bg="white"
      _dark={{ bg: "gray.800" }}
      maxW="2xl"
    >
      <Image
        roundedTop="lg"
        w="full"
        h={64}
        fit="cover"
        src={Img}
        alt="Article"
      />

      <Box p={6}>
        <Box>
          <chakra.span
            fontSize="xs"
            textTransform="uppercase"
            color="brand.600"
            _dark={{ color: "brand.400" }}
          >
            About me
          </chakra.span>
          <Link
            display="block"
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
            fontSize="2xl"
            mt={2}
            _hover={{ color: "gray.600", textDecor: "underline" }}
          >
          In three months, every day I gained new experience
          </Link>
          <chakra.p
            mt={2}
            fontSize="sm"
            color="gray.600"
            _dark={{ color: "gray.400" }}
          >
          Technology and computers are the closest fields to me.
           'Passion and ambition' is the main driver for learning and progress in my field. 
           I am a person who loves to learn and gain experiences from everyone.
           I aspire to learn everything new, I want to benefit my community.

           I graduated from Princess Noura bint Abdulrahman University with a second honors degree,My graduation project 
           is Face Detection and Recognition, and it’s has won One of the ten best graduation projects for the year 2019.
           At the beginning, I trained with several volunteer companies until I gained experience,
            and until I was prepared for real work, I trained at IBM and got an official job with them. 
            After five months of training, and after a year of work, 
            I got hired at SDAIA and completed a year with them, 
            And now I have been accepted into Tuwaiq BootCamps to develop web browsers using JavaScript

          </chakra.p>
        </Box>

        <Box mt={4}>
          <Flex alignItems="center">
            <Flex alignItems="center">
            
              <Link
                mx={2}
                fontWeight="bold"
                color="gray.700"
                _dark={{ color: "gray.200" }}
              >
                Samar Saleh
              </Link>
            </Flex>
            <chakra.span
              mx={1}
              fontSize="sm"
              color="gray.600"
              _dark={{ color: "gray.300" }}
            >
             08-07/06/2023
            </chakra.span>
          </Flex>
        </Box>
      </Box>
    </Box>
  </Flex>

    <Footer></Footer>


    </Box>
  )}
