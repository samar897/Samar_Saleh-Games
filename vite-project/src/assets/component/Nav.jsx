import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Tabs,
  TabList,
  Tab,
  Spacer,
} from "@chakra-ui/react";


//import Register from "../component/Register";
import ToggleColorMode from "./ToggleColorMode";
import Logo from "../logo.png"
import { Link } from 'react-router-dom';
import {
  AiOutlineMenu,
  AiOutlineInbox,
  AiFillBell,
} from "react-icons/ai";


export default function Nav(props){
  const bg = useColorModeValue("#006A7B", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <Box shadow="md">
      <chakra.header
        bg={bg}
        borderColor="gray.600"
        borderBottomWidth={1}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        _dark={{ color: "inherit", border:"3px solid #006A7B" }}
                border="3px solid #5CA0AB"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack spacing={4} display="flex" alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
                _dark={{ color: "inherit", border:"3px solid #006A7B" }}
                border="3px solid #5CA0AB"
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
            
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
               
                _dark={{ color: "inherit", border:"3px solid #006A7B" }}
                border="3px solid #5CA0AB"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                  _dark={{ color: "inherit" }}
                />

                <Button
                  w="full"
                  variant="solid"
                  colorScheme="whiteAlpha"
                  _dark={{ color: "inherit" }}
                  leftIcon={<AiOutlineInbox />}
                >
                <Link to="/login" >{props.login}</Link>
                </Button>
                <Button
                  w="full"
                  variant="solid"
                  colorScheme="whiteAlpha"
                  _dark={{ color: "inherit" }}
                  leftIcon={<AiOutlineInbox />}
                >
                <Link to="/register" > {props.register} </Link>
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
            <img src= {Logo} width={120} height={120}/>
           
              <VisuallyHidden>Games Rate</VisuallyHidden>
            </chakra.a>
            <center>  <chakra.h1 fontSize="xl" color={"#FFFFFF"}> Games Rate </chakra.h1> </center>
          </HStack>
          <HStack spacing={3} display="flex" alignItems="center">
          <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
              
            <Button
                variant="solid"
                colorScheme="whiteAlpha"
                _dark={{ color: "inherit" }}
                leftIcon={<AiOutlineInbox />}
                size="sm"
              >
              <Link to="/login" >{props.login}</Link>
              </Button>
              <Button
              variant="solid"
              colorScheme="whiteAlpha"
              _dark={{ color: "inherit" }}
              leftIcon={<AiOutlineInbox />}
              size="sm"
            >
            <Link to="/register" >{props.register}</Link>
            </Button>
            </HStack>
            <chakra.a
              p={3}
              color="gray.800"
              _dark={{ color: "#FFFFFF" }}
              rounded="sm"
              _hover={{ color: "gray.800", _dark: { color: "gray.600" } }}
            >
              <AiFillBell />
              <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>
            <ToggleColorMode></ToggleColorMode>
  
          </HStack>
        </Flex>
      </chakra.header>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx={2}
        borderWidth={0}
        overflowX="auto"
        _dark={{ color: "inherit", border:"3px solid #006A7B" }}
                border="3px solid #5CA0AB"
      >
        <Tabs defaultIndex={1} borderBottomColor="transparent">
          <TabList>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }} _dark={{ color:"white", bg:'#1A202C', border:"3px solid #006A7B"}}>
            <Link to="/" >{props.home}</Link> 
            </Tab>
     
            
          </TabList>
        </Tabs>
        <Spacer />
        <HStack spacing={3} alignItems="center">
        <Button
        w="full"
        variant="solid"
        colorScheme="whiteAlpha"
        _dark={{ color:"white", bg:'#1A202C', border:"3px solid #006A7B"}}

        border="3px solid #5CA0AB" margin={5}
        leftIcon={<AiOutlineInbox />}
        bg="#006A7B"
        color={"white"}
      >
      <Link to="/ListSearch" > Search </Link>

      </Button>
           
        </HStack>
      </Flex>
    </Box>
  );
}
