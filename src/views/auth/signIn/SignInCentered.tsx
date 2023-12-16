/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   ____  ____   ___  
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| |  _ \|  _ \ / _ \ 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || |  | |_) | |_) | | | |
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |  |  __/|  _ <| |_| |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___| |_|   |_| \_\\___/ 
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.horizon-ui.com/pro/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
// Assets
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';

// Custom components
import { HSeparator } from 'components/separator/Separator';
import CenteredAuth from 'layouts/auth/variants/Centered';
import { async } from 'q';

function SignIn() {
  const navigate = useNavigate();

    

  // Chakra color mode
  const textColor = useColorModeValue('navy.700', 'white');
  const errorMsgColor = useColorModeValue('red.600', 'white');
  const textColorSecondary = 'gray.400';
  const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  const brandStars = useColorModeValue('brand.500', 'brand.400');
  const googleBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.200');
  const googleText = useColorModeValue('navy.700', 'white');
  const googleHover = useColorModeValue(
    { bg: 'gray.200' },
    { bg: 'whiteAlpha.300' },
  );
  const googleActive = useColorModeValue(
    { bg: 'secondaryGray.300' },
    { bg: 'whiteAlpha.200' },
  );
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorLogin, setErrorLogin] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('Invalid Username or Password');


  const [userLoggedIn, setUserLoggedIn] = React.useState(
    JSON.parse(localStorage.getItem("userLoginStatus"))
  );
  
  
  if(userLoggedIn && (userLoggedIn?.isUserLoggedIn) ) {
    navigate("/admin");
  }


  const doLoginAuthentication = (e:any): any => {
   console.log(e);
    console.log(userName);
    console.log(password);
    if(userName ==='admin' && password ==='admin') {
      setErrorLogin(true);
      setErrorMsg("");
      
      // doAuthentication(userName, password);
      const now = new Date()
      const item = {
        isUserLoggedIn: true,
        expiry: now.getTime() + 2000,
      }
      localStorage.setItem("userLoginStatus", JSON.stringify(item));
      navigate("/admin");

    } else {
      setErrorLogin(true);
      setErrorMsg("Invalid Username or Password");
      setUserName('');
      setPassword('');
      localStorage.setItem('isLogin',"True");
    }
    return null;
  }

//    const doAuthentication => async login {
//     // POST request using fetch with async/await
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title: 'React POST Request Example' })
//     };
//     const response = await fetch('https://reqres.in/api/posts', requestOptions);
//     const data = await response.json();
//     // this.setState({ postId: data.id });
// }

// useEffect(() => {
//     const doAuthentication: any => async () => {
//       const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username: userName, password: password })
//       };
//       const response = await fetch('https://api-dev.minerva.zyq.ai/login', requestOptions);
//       const data = await response.json();
//       }
//     }
//   // React advises to declare the async function directly inside useEffect
//       , 
//     []);


  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <CenteredAuth
      cardTop={{ base: '140px', md: '14vh' }}
      cardBottom={{ base: '50px', lg: 'auto' }}
      mx="0px"
    >
      <Flex
        maxW={{ base: '100%', md: 'max-content' }}
        w="100%"
        mx={{ base: 'auto', lg: '0px' }}
        me="auto"
        justifyContent="center"
        px={{ base: '20px', md: '0px' }}
        flexDirection="column"
      >
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Sign In
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Enter your username and password to sign in!
          </Text>
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: '100%', md: '420px' }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: 'auto', lg: 'unset' }}
          me="auto"
          mb={{ base: '20px', md: 'auto' }}
        >
         
          {
            errorLogin? <Flex align="center" mb="25px">
              <Text color={errorMsgColor}>{errorMsg}</Text>
            </Flex>: ""
          }
          <FormControl>
            <FormLabel
              display="flex"
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              mb="8px"
            >
              Username<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant="auth"
              fontSize="sm"
              ms={{ base: '0px', md: '0px' }}
              type="text"
              placeholder="Username"
              mb="24px"
              fontWeight="500"
              size="lg"
              value = {userName}
              onChange={ e => setUserName(e.target.value)}
            />
            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              display="flex"
            >
              Password<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                isRequired={true}
                fontSize="sm"
                ms={{ base: '0px', md: '4px' }}
                placeholder="Password"
                mb="24px"
                size="lg"
                type={show ? 'text' : 'password'}
                variant="auth"
                value = {password}
                onChange={ e => setPassword(e.target.value)}
              />
              <InputRightElement display="flex" alignItems="center" mt="4px">
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: 'pointer' }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <Flex justifyContent="space-between" align="center" mb="24px">
              <FormControl display="flex" alignItems="center">
                <Checkbox id="remember-login" colorScheme="brand" me="10px" />
                <FormLabel
                  htmlFor="remember-login"
                  mb="0"
                  fontWeight="normal"
                  color={textColor}
                  fontSize="sm"
                >
                  Keep me logged in
                </FormLabel>
              </FormControl>
              <NavLink to="/auth/forgot-password">
                <Text
                  color={textColorBrand}
                  fontSize="sm"
                  w="124px"
                  fontWeight="500"
                >
                  Forgot password?
                </Text>
              </NavLink>
            </Flex>
            <Button
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              w="100%"
              h="50"
              mb="24px"
              onClick={ e => doLoginAuthentication(e)}
            >
              Sign In
            </Button>
          </FormControl>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColorDetails} fontWeight="400" fontSize="14px">
              Not registered yet?
              <NavLink to="/auth/sign-up">
                <Text
                  color={textColorBrand}
                  as="span"
                  ms="5px"
                  fontWeight="500"
                >
                  Create an Account
                </Text>
              </NavLink>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </CenteredAuth>
  );
}

export default SignIn;
