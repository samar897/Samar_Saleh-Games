import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,CircularProgress,InputGroup,
    InputRightElement,
    Icon
  } from '@chakra-ui/react';
       
 
// ...after other import statements
import { userLogin } from '../component/MockApi';
import ErrorMessage from '../component/ErrorMessage';

import Nav from "../component/Nav";
import Footer from "../component/Footer";
import Home from "../component/Home"; 
import React, { useState } from 'react';




  export default function Login() {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
  
    const handleSubmit = async event => {
      event.preventDefault();
  
      setIsLoading(true);
  
      try {
        await userLogin({ email, password });
        setIsLoggedIn(true);
        setIsLoading(false);
        setShowPassword(false);
      } catch (error) {
        setError('Invalid username or password');
        setIsLoading(false);
        setEmail('');
        setPassword('');
        setShowPassword(false);
      }
    };
  
    const handlePasswordVisibility = () => setShowPassword(!showPassword);

    return (

  <Box>
    {isLoggedIn ? (
      <Box textAlign="center">
      <Home ></Home>
        <Button
          variantColor="orange"
          variant="outline"
          width="full"
          mt={4}
          onClick={() => setIsLoggedIn(false)}
        >
          Sign out
        </Button>

      </Box>
    ) : (
      <>
      <Nav register="Register" login="Login"></Nav>
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      
      <Stack spacing={1} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'} _dark={{ color: "white" }}>
         
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>

      
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <form onSubmit={handleSubmit}>
          {error && <ErrorMessage message={error} />}
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
    type="email"
    placeholder="test@test.com"
    size="lg"
    onChange={event => setEmail(event.currentTarget.value)}
  />
            </FormControl>
            <FormControl id="password" isRequired mt={4}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
              <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="*******"
              size="lg"
              onChange={event => setPassword(event.currentTarget.value)}
            />
            <InputRightElement width="3rem">
      <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
      {showPassword ? <Icon name="view-off" /> : <Icon name="view" />}
        </Button>
     </InputRightElement>
            </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
              variant="outline"
              colorScheme="blackAlpha"
              bg="#006A7B"
              _dark={{ color: "inherit" }}
              size="sm"
              type="submit"
              width="full"
              mt={4}
            >
            {isLoading ? (
              <CircularProgress isIndeterminate size="24px" color="teal" />
            ) : (
              'Sign In'
            )}  
         
            </Button>
            </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    <Footer></Footer>
      </>
    )}

      </Box>
    );
  }