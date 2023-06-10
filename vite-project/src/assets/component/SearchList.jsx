
// src/components/SearchList.js
import { Box} from '@chakra-ui/react';
import React from 'react';
import Card2 from './Card2';




function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map(person =>  <Card2 key={person.id} person={person} />); 
  return (
    <Box>
      {filtered}
    </Box>
  );
}

export default SearchList;