// Chakra imports
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand(props: { mini: boolean; hovered: boolean }) {
  const { mini, hovered } = props;
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex alignItems="center" flexDirection="column">
        <Text fontWeight="bold"
            fontSize="34px">Minerva</Text>

      <Text
        display={
          mini === false
            ? 'none'
            : mini === true && hovered === true
            ? 'none'
            : 'block'
        }
        fontSize={'30px'}
        fontWeight="800"
        color={logoColor}
      >
       Minerva
      </Text>
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
