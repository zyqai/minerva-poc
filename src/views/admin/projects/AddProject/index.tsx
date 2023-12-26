

// Chakra imports
import { background, Button, Checkbox, Divider, Flex, Grid, GridItem, Heading, Select, SimpleGrid, Spacer, Stack, Textarea, useColorModeValue } from '@chakra-ui/react';
import { Box, Text, Input } from "@chakra-ui/react";

// Custom components

export default function AddProjectsPage() {
  // Chakra Color Mode

  const styles = {
    checkBoxStyle: {
      padding: "8px",
      background: "#EEE",
      border: '1px solid rgba(0, 0, 0, 0.05)'
    }
  }
  

  const paleGray = useColorModeValue('#DFE6F6', 'whiteAlpha.100');
  return (
    <Box>
      <Grid templateRows='repeat(3)' templateColumns='repeat(5, 1fr)' gap={4} >
        <GridItem colSpan={2}>
          <Box p={5}>
            <Text mb='8px'>File Name: </Text>
            <Input placeholder='File Name (default to Primary Business)' size='md' />
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box p={5}>
            <Text mb='8px'>Loan Amount: </Text>
            <Input placeholder='$0000000' size='md' />
          </Box>
        </GridItem>
        <GridItem colSpan={2}  >
          <Box p={5}>
              <Text mb='8px'>Assigned Staff: </Text>
              <Flex>
                <Box width="80%" pr="16px">
                  <Select placeholder='Select option'>
                    <option value='--'>--</option>
                  </Select>
                </Box>
                <Box>
                  <Button colorScheme='blue'>Add New</Button>
                </Box>
              </Flex>
          </Box>
        </GridItem>
      </Grid>


      <Grid templateRows='repeat(3)' templateColumns='repeat(5, 1fr)' gap={4} >
        <GridItem colSpan={5}>
            <Box p={5}>
              <Text mb='8px'>File Description: </Text>
              <Textarea placeholder='Purpose: Project Description' />
            </Box>
        </GridItem>
      </Grid>

      <Grid templateRows='repeat(3)' templateColumns='repeat(5, 1fr)' gap={4} >
        <GridItem colSpan={5}>
            <Box p={5}>
              <Text mb='8px'>Staff Note (Only visable by Staff): </Text>
              <Textarea placeholder='Staff Notes' />
              <Button mt="16px" colorScheme='blue' float="right">Add Note</Button>
            </Box>
        </GridItem>
      </Grid>
      <Divider mt="24px" mb="24px" />
      <Grid templateRows='repeat(3)' templateColumns='repeat(5, 1fr)' gap={4} >
        <GridItem colSpan={4}>
            <Box p={5}>
              <Text mb='8px'>Primary Borrower: </Text>
              <Flex>
                <Box width="80%" pr="16px">
                  <Select placeholder='Search'>
                    <option value='--'>--</option>
                  </Select>
                </Box>
                <Box>
                  <Button colorScheme='blue'>Add New</Button>
                </Box>
              </Flex>
            </Box>
        </GridItem>
      </Grid>



      <Grid templateRows='repeat(3)' templateColumns='repeat(5, 1fr)' gap={4} >
        <GridItem colSpan={4}>
            <Box p={5}>
              <Text mb='8px'>Primary Business: </Text>
              <Flex>
                <Box width="80%" pr="16px">
                  <Select placeholder='Search'>
                    <option value='--'>--</option>
                  </Select>
                </Box>
                <Box>
                  <Button colorScheme='blue'>Add New</Button>
                </Box>
              </Flex>
            </Box>
        </GridItem>
      </Grid>



      <Grid templateRows='repeat(1)' ml="8px" templateColumns='repeat(4, 1fr)' gap={4} >
        <GridItem colSpan={3} >
          <Grid templateColumns='repeat(3, 1fr)' gap={4} >
            <GridItem >
                <Box p={5}>
                  <Text mb='8px'>Start Date: </Text>
                  <Select placeholder='Search'>
                    <option value='--'>--</option>
                  </Select>
                </Box>
            </GridItem>
            <GridItem >
                <Box p={5}>
                  <Text mb='8px'>Desired Closing Date: </Text>
                  <Select placeholder='Search'>
                    <option value='--'>--</option>
                  </Select>
                </Box>
            </GridItem>
            <GridItem >
                <Box p={5}>
                  <Text mb='8px'>Initial Phase: </Text>
                  <Select placeholder='Search'>
                    <option value='--'>--</option>
                  </Select>
                </Box>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
      <Divider mt="24px" mb="24px" />

      <Grid  ml="8px"  templateRows='repeat(3)' templateColumns='repeat(2, 1fr)' gap={4} >
        <GridItem>
            <Box p={5}>
              <Text mb='8px'>Primary Borrower: </Text>
              <Text mb='8px'>What does the borrower intend to do with the money?</Text>
            </Box>
        </GridItem>
        <GridItem>
            <Box p={5}>
                <Select placeholder='Search'>
                    <option value='--'>--</option>
                </Select>
            </Box>
        </GridItem>
      </Grid>
      <Box>
        <Stack ml="24px"   spacing={[1, 5]} direction={['column', 'row']}>
          <Checkbox size='lg' borderRadius="15px" pr="18px"  pl="18px" style={styles.checkBoxStyle} colorScheme='orange' defaultChecked>
            Checkbox
          </Checkbox>
          <Checkbox size='lg' borderRadius="15px" pr="18px"  pl="18px" style={styles.checkBoxStyle} colorScheme='orange'>
            Checkbox
          </Checkbox>
          <Checkbox size='lg' borderRadius="15px" pr="18px"  pl="18px" style={styles.checkBoxStyle} colorScheme='orange'>
            Checkbox
          </Checkbox>
          <Checkbox size='lg' borderRadius="15px" pr="18px"  pl="18px" style={styles.checkBoxStyle} colorScheme='orange'>
            Checkbox
          </Checkbox>
          <Checkbox size='lg' borderRadius="15px" pr="18px"  pl="18px" style={styles.checkBoxStyle} colorScheme='orange'>
            Checkbox
          </Checkbox>
        </Stack>
      </Box>
      <Divider mt="24px" mb="24px" />

      <Grid  ml="8px"  templateRows='repeat(3)' templateColumns='repeat(3, 1fr)' gap={4} >
      
        <GridItem></GridItem>
        <GridItem colSpan={2}>
          <Box float="right">
              <Button pl="40px" pr="40px" bg="black" isLoading={false} colorScheme='teal' variant='solid'>
                  Save
              </Button>
              <Button pl="40px" pr="40px" ml="20px" bg="black" color="white"
                isLoading={false}
                colorScheme='teal'
                loadingText='Saving File'
                variant='solid' >
                Save View File Details
              </Button>
          </Box>
        </GridItem>
      </Grid>

    </Box>

  );
}
