import React from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import signup_cover from "../assets/images/signup_cover.jpg";
import signup_backcover from "../assets/images/signup_backcover.jpg";
import navbar_img from "../assets/images/navbar_img.jpg";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Divider,
  Box,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

import logo from "../assets/images/Blooming Cart.png";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const toast = useToast();
  const [open, setOpen] = useState(false);
  const [error, changeError] = useState("");
  const navigate = useNavigate();
  const toggle = () => {
    setOpen(!open);
  };
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password.length < 8) {
      return toast({
        title: "Error",
        description: "Password should be more than 8 digits, Try Again",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
    let name = user.firstname;
    axios
      .post(`https://dull-pink-tortoise-wrap.cyclic.app/users/signup`, {
        name: name,
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data === "Signup Successfully") {
          toast({
            title: "Account created.",
            description: "Successfully Created your Account",
            status: "success",
            position: "top",
            duration: 3000,
            isClosable: true,
          });
          navigate("/login");
        }
        if (
          response.data === `User with Email Id ${user.email} already exist`
        ) {
         return toast({
          title: "Invalid Email",
          description: "Email Id is already Registered",
          status: "error",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
        }
        if (response.data.error !== false) {
          changeError(response.data.error);
        }
      })
      .catch((err) => {
        console.log(err);
        return toast({
          title: "Error",
          description: err,
          status: "error",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  return (
    <>
      <Stack bgImage={signup_backcover}>
        <Stack
          minH={"100vh"}
          direction={{ base: "column", md: "row" }}
          border={"1px solid lightgrey"}
          w={"85%"}
          margin="auto"
          borderRadius={"5px"}
          marginTop={"5px"}
        >
          <Flex
            flex={1}
            align={"center"}
            justify={"center"}
            bg={"white"}
            borderRadius={"5px"}
          >
            <Stack spacing={4} w={"65%"} maxW={"md"} pt="50px">
              <Link onClick={() => navigate("/")}>
                <Image
                  src={logo}
                  margin="auto"
                  width={"50%"}
                  marginLeft={{ base: "2xl", md: "3xl", lg: "100px" }}
                  marginTop={"0px"}
                />
              </Link>
              <Heading
                fontSize={"1.625rem"}
                fontWeight={"16px"}
                color={"black"}
              >
                Create Your Account
              </Heading>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel fontSize={"14px"} color={"#e7b270"}>
                    {" "}
                    First Name
                  </FormLabel>
                  <Input
                    type="text"
                    height={"34px"}
                    placeholder="Enter your First Name"
                    value={user.firstname}
                    name="firstname"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={"14px"} color={"#e7b270"}>
                    {" "}
                    Last Name
                  </FormLabel>
                  <Input
                    type="text"
                    height={"34px"}
                    placeholder="Enter your Last Name"
                    value={user.lastname}
                    name="lastname"
                    onChange={handleChange}
                  />
                </FormControl>


                <FormControl>
                  <FormLabel fontSize={"14px"} color={"#e7b270"}>
                    Email{" "}
                  </FormLabel>
                  <Input
                    type="email"
                    height={"34px"}
                    placeholder="Enter your Email"
                    value={user.email}
                    name="email"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={"14px"} color={"#e7b270"}>
                    Password
                  </FormLabel>
                  <InputGroup>
                    <Input
                      type={open === false ? "password" : "text"}
                      height={"34px"}
                      placeholder="Enter your password"
                      value={user.password}
                      name="password"
                      onChange={handleChange}
                    />
                    <InputRightElement>
                      <Box>
                        {open === false ? (
                          <AiOutlineEyeInvisible onClick={toggle} />
                        ) : (
                          <AiOutlineEye onClick={toggle} />
                        )}
                      </Box>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox
                    fontSize={"14px"}
                    color={"#777e85"}
                    marginTop={"5px"}
                  >
                    {" "}
                    <span
                      style={{
                        color: "#3070F0",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      Email me about special offers, new products and
                      promotions.
                    </span>
                  </Checkbox>
                </Stack>
                <Text color="red">{error}</Text>
                <Button
                  colorScheme={"blue"}
                  variant={"solid"}
                  height={"34px"}
                  fontSize={"14px"}
                  w={"100%"}
                  marginTop="20px"
                  type="submit"
                >
                  Create your Account
                </Button>
              </form>

              <Divider orientation={"horizontal"} />
              <Stack>
                <Button
                  colorScheme={"none"}
                  border={"1px solid lightgrey"}
                  _hover={{ bg: "#e2e6eb" }}
                  leftIcon={<FcGoogle fontSize={"20px"} />}
                  textColor={"#777E85"}
                  variant={"solid"}
                  height={"34px"}
                  fontSize={"14px"}
                >
                  Sign Up with Google
                </Button>
                <Button
                  colorScheme={"none"}
                  border={"1px solid lightgrey"}
                  _hover={{ bg: "#e2e6eb" }}
                  leftIcon={<FaFacebook fontSize={"20px"} />}
                  textColor={"#777E85"}
                  variant={"solid"}
                  height={"34px"}
                  fontSize={"14px"}
                >
                  Sign Up with Facebook
                </Button>
              </Stack>
              <Divider orientation={"horizontal"} color={"blue"} />
              <Heading
                fontSize={"14px"}
                fontWeight={"10px"}
                paddingBottom="20px"
              >
                Already have an account?
                <Link onClick={() => navigate("/login")} color="blue">
                  {" "}
                  Login
                </Link>
              </Heading>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Link onClick={() => navigate("/")}>
              <Image
                backgroundColor={"#4b5f54"}
                alt={"Signup Image"}
                objectFit={"cover"}
                borderRadius={"15px"}
                width={"90%"}
                height={"96%"}
                margin={"20px"}
                src={signup_cover}
              />
            </Link>
          </Flex>
        </Stack>
      </Stack>
      <Stack>
        <Image src={navbar_img} />
      </Stack>
    </>
  );
};

export default Signup;
