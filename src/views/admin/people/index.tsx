

// Chakra imports
import { Flex, Grid, useColorModeValue } from '@chakra-ui/react';
import { Box } from "@chakra-ui/react"
import PeopleListTable from './components/PeopleListTable';
import peopleDataComplex from 'variables/peopleDataComplex';

// Custom components

export default function PeoplePage() {
  // Chakra Color Mode
  const paleGray = useColorModeValue('#DFE6F6', 'whiteAlpha.100');
  return (
    <Box w="100%" p={4}>
      <PeopleListTable tableData={peopleDataComplex}></PeopleListTable>
    </Box>

  );
}
