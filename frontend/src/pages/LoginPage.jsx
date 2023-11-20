import React, { useState } from "react";
import {
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Box,
  Alert,
  AlertIcon,
  CloseButton,
} from "@chakra-ui/react";
import { Link, Form, useNavigate } from "react-router-dom";
import { PATH } from "../constants/path.js";
import { loginUser } from "../fetcher/indexFetcher.js";
import { delay } from "../utils/index.js";

function LoginPage() {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({
        email: e.target.email.value,
        password: e.target.password.value,
      });
      window.localStorage.setItem("token", response.token);
      setLoginStatus("success");
      await delay(1500);
      navigate(PATH.home);
    } catch (error) {
      console.error(error);
      setLoginStatus("error");
    }
  };

  return (
    <Box w="full" py={4} px={24} mx="auto" mt={8}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Login to Your Account
      </Text>
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <Form onSubmit={onSubmit}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="Email" name="email" placeholder="Enter Your Email" />
            <FormErrorMessage>Email is required</FormErrorMessage>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="Enter Your Password"
            />
          </FormControl>
          <Button type="submit" mt="10px" colorScheme="teal">
            Login
          </Button>
        </Form>

        {loginStatus === "success" && (
          <Alert status="success" mt="10px">
            <AlertIcon />
            Login successful! You will be redirected to the homepage shortly.
            <CloseButton
              onClick={() => setLoginStatus("")}
              position="absolute"
              right="8px"
              top="8px"
            />
          </Alert>
        )}

        {loginStatus === "error" && (
          <Alert status="error" mt="10px">
            <AlertIcon />
            Login failed. Please check your email and password and try again.
            <CloseButton
              onClick={() => setLoginStatus("")}
              position="absolute"
              right="8px"
              top="8px"
            />
          </Alert>
        )}

        <Button mt="10px">
          <Link to={PATH.register}>
            <Text>don't have accont?? Clik here to Regist</Text>
          </Link>
        </Button>
      </Box>
      <Button mt="10px">
        <Link to={PATH.home}>
          <Text>Back To Home</Text>
        </Link>
      </Button>
    </Box>
  );
}

export default LoginPage;
