//import React from "react";

import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
} from '@chakra-ui/react';


export default function Card(person) {
  
  return (
    
    <Box _dark={{ color: "black", bg:'#1A202C', border:"3px solid #006A7B"}}
    border="3px solid #5CA0AB" margin={5}>
    <Center as='section' bg='gray.100' h='120vh' _dark={{ color: "black", bg:'#2C313D', border:"3px solid #006A7B"}}
    border="3px solid #5CA0AB" margin={5}>
    <Box maxW='300px' bg='#ffffff' p='5' _dark={{ color: "black", border:"3px solid #006A7B",bg:"#1A202C"}}
    border="3px solid #5CA0AB">
      <Image  alt={person.name} src={ person.img}
        borderRadius='xl'
        objectFit='cover'
        mx='auto'
     

      />
      <HStack mt='5' spacing='3' color="white">
        {[person.item1, person.item2 ].map((item) => (
          <Tag key={item} variant='outline' _dark={{ color: "white", border:"3px solid #ffffff"}}
             border="3px solid #5CA0AB">
            {item}
          </Tag>
        ))}
      </HStack>
      <Heading my='4' size='lg' color="black" _dark={ {color: "white"}}>
       {person.name}
      </Heading>
      <Text color="black" _dark={ {color: "white"}}>
     {person.Dis}
      </Text>
    
    </Box>
  </Center>
  </Box>
  )
}
