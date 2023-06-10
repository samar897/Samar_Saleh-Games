import React from 'react';

import {
	Box,Center
  } from '@chakra-ui/react' 

function Card2({person}) {
	return(
       <Center>
		<Box _dark={{ color:"white", bg:'#1A202C', border:"3px solid #006A7B"}}

		border="3px solid #5CA0AB" margin={5}>

			<img  alt={person.name} src={person.img} />
			<Box>
			
				<h2>{person.name}</h2>
				<h2>{person.Dis}</h2>
				<p>{person.item1} + {person.item2} </p>
				
			</Box>
			
		</Box>
		</Center>
	);
}

export default Card2;