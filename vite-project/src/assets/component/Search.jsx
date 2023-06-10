
import React, { useState } from 'react';


import {

    Box,
    HStack,
    InputGroup,
    InputLeftElement,
    Input,Text, Center
 
  } from "@chakra-ui/react";

  import {

    AiOutlineSearch,

  } from "react-icons/ai";


  import Scroll from './Scroll';
  import SearchList from './SearchList';


function Search( {details} ) {

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false); 

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .Dis
        .toLowerCase()
        .includes(searchField.toLowerCase())
        ||
        person
        .item1
        .toLowerCase()
        .includes(searchField.toLowerCase())
        ||
        person
        .item2
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <Scroll>
          <SearchList filteredPersons={filteredPersons} />
        </Scroll>
      );
    }
  }

  return (
   <Box >
   
      <Box className="navy georgia ma0 grow">
        <Text gap={2}  _dark={{ color:"white", bg:'#1A202C', border:"3px solid #006A7B"}}>Search</Text>
      </Box>
      <Box>
      <Center>
      <HStack spacing={3} alignItems="center">
      <InputGroup display={{ base: "none", lg: "block" }} ml="auto">
        <InputLeftElement pointerEvents="none">
          <AiOutlineSearch />
        </InputLeftElement>
        <Input type = "search"  placeholder="Search..." onChange = {handleChange} _dark={{ color:"white", bg:'#1A202C', border:"3px solid #006A7B"}}/>
      </InputGroup>
    </HStack>
    </Center>
      </Box>
      <Center>
      {searchList()} </Center>
</Box>
  );
}

export default Search;



