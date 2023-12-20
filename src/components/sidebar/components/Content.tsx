// chakra imports
import {
  Avatar,
  Box,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
//   Custom components
import Brand from 'components/sidebar/components/Brand';
import Links from 'components/sidebar/components/Links';

// FUNCTIONS

function SidebarContent(props: {
  routes: RoutesType[];
  hovered?: boolean;
  mini?: boolean;
}) {
  const { routes, mini, hovered } = props;
  const textColor = useColorModeValue('navy.700', 'white');
  // SIDEBAR
  return (
    <Flex  w="100%" direction="column" height="100%" pt="25px" borderRadius="30px">
      <Brand mini={mini} hovered={hovered} />
      <Stack direction="column" mb="auto" mt="8px">
        <Box w="100%" ps={
            mini === false
              ? '0px'
              : mini === true && hovered === true
              ? '0px'
              : '16px'
          }
          pe={{ md: '16px', '2xl': '1px' }}
          ms={mini && hovered === false ? '-16px' : 'unset'}
        >
          <Links mini={mini} hovered={hovered} routes={routes} />
        </Box>
      </Stack>

     
      
    </Flex>
  );
}

export default SidebarContent;
