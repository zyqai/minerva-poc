

// Chakra imports
import { useColorModeValue } from '@chakra-ui/react';
import { Box } from "@chakra-ui/react"

// Custom components

export default function BusinessesPage() {
  // Chakra Color Mode
  const paleGray = useColorModeValue('#DFE6F6', 'whiteAlpha.100');
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      This is the Businessess
    </Box>

  );
}
