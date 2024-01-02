

// Chakra imports
import { Box, Flex, Grid, GridItem,Input,Text, Select, useColorModeValue, Button, Divider, Heading, Stack, Checkbox } from '@chakra-ui/react';
import Card from 'components/card/Card';
// Custom components

export default function AddPeoplePage() {
  const bg = useColorModeValue('background.100', 'background.900');
  // Chakra Color Mode
  const paleGray = useColorModeValue('#DFE6F6', 'whiteAlpha.100');
  return (
    <Box>
      <Card bg={bg} extra={'w-full h-full pb-5 sm:overflow-auto px-6'}>
          <Grid templateRows='repeat(3)' templateColumns='repeat(3, 1fr)' gap={4} >
            <GridItem colSpan={1}>
              <Box p={5}>
                <Text mb='8px'>First Name: </Text>
                <Input placeholder='First Name' size='md' />
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box p={5}>
                <Text mb='8px'>Last Name: </Text>
                <Input placeholder='First Name' size='md' />
              </Box>
            </GridItem>
            <GridItem colSpan={1}  >
              
            </GridItem>
          </Grid>

          <Grid templateRows='repeat(3)' templateColumns='repeat(2, 1fr)' gap={4} >
            <GridItem colSpan={1}>
              <Box p={5}>
                <Text mb='8px'>Mobile Number: </Text>
                <Input placeholder='+1 000 111 2223' size='md' />
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box p={5}>
                <Text mb='8px'>Email: </Text>
                <Input placeholder='name@email.com' size='md' />
              </Box>
            </GridItem>
          </Grid>

          <Grid templateRows='repeat(3)' templateColumns='repeat(4, 1fr)' gap={4} >
            <GridItem colSpan={1}>
              <Box p={5}>
                <Text mb='8px'>Street Address 1: </Text>
                <Input placeholder='Address 1' size='md' />
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box p={5}>
              <Text mb='8px'>Street Address 2: </Text>
                <Input placeholder='Address 2' size='md' />
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box p={5}>
              <Text mb='8px'>City: </Text>
                <Input placeholder='City' size='md' />
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
                <Grid templateRows='repeat(3)' templateColumns='repeat(2, 1fr)' gap={4} >
                    <GridItem colSpan={1}>
                      <Box p={5}>
                        <Text mb='8px'>State: </Text>
                        <Select placeholder='Select option'>
                            <option value='--'>--</option>
                        </Select>
                      </Box>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Box p={5}>
                        <Text mb='8px'>Postal Code: </Text>
                        <Input placeholder='00000-000' size='md' />
                      </Box>
                    </GridItem>
                </Grid>
            </GridItem>
          </Grid>
          <Divider mt="24px" mb="24px" />

          <Heading pt="24px"  pb="24px" as='h4' size='lg'>
            Extended Profile
          </Heading>

          <Grid templateRows='repeat(3)' templateColumns='repeat(5, 1fr)' gap={4} >
            <GridItem colSpan={1}>
              <Box p={5}>
                <Text mb='8px'>Date of Birth: </Text>
                <Input placeholder='+1 000 111 2223' size='md' />
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box p={5}>
                <Text mb='8px'>Social Security Number: </Text>
                <Input placeholder='name@email.com' size='md' />
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box p={5}>
                <Text mb='8px'>Martial Status: </Text>
                <Select placeholder='Select option'>
                  <option value='---'>---</option>
                  <option value='S'>Single</option>
                  <option value='M'>Married</option>
                </Select>
              </Box>
            </GridItem>
          </Grid>
          <Divider mt="24px" mb="24px" />

          <Heading pt="24px"  pb="24px" as='h4' size='lg'>
            Roles & Permissions
          </Heading>

          <Grid templateRows='repeat(3)' templateColumns='repeat(5, 1fr)' gap={4} >
            <GridItem colSpan={3}>
              <Box p={5}>
                <Text mb='8px'>Configure the Roles and Permissions assigned to this person: </Text>
                <Stack spacing={5} direction='row'>
                  <Checkbox colorScheme='red' defaultChecked>Admin</Checkbox>
                  <Checkbox colorScheme='red'>Staff</Checkbox>
                  <Checkbox colorScheme='red'>Client</Checkbox>
                  <Checkbox colorScheme='red'>Lender</Checkbox>
                </Stack>
              </Box>
            </GridItem>
          </Grid>


          <Grid  ml="8px"   mb="16px"  templateRows='repeat(3)' templateColumns='repeat(3, 1fr)' gap={4} >
            <GridItem></GridItem>
            <GridItem colSpan={2}>
              <Box float="right">
                  <Button pl="40px" pr="40px" isLoading={false} colorScheme='teal' variant='solid'>
                      Cancel
                  </Button>
                  <Button pl="40px" pr="40px" ml="20px" bg="black" color="white"
                    isLoading={false}
                    colorScheme='teal'
                    loadingText='Saving File'
                    variant='solid' >
                    Save
                  </Button>
                  <Button pl="40px" pr="40px" ml="20px"
                    isLoading={false}
                  
                    loadingText='Saving File'
                    variant='solid' >
                    Save and go to Profile
                  </Button>
              </Box>
            </GridItem>
        </Grid>

      </Card>
    </Box>
  );
}
