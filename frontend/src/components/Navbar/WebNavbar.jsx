import React from "react";
import {
  Box,
  Button,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import "../../styles/navbar.css";
import logo from "../../assets/images/Blooming Cart.png";
import avatar from "../../assets/images/icons8-customer.gif";
import cart from "../../assets/images/icons8-shopping-cart.gif";
import orders from "../../assets/images/icons8-truck.gif";
import { Categories_Data } from "../../assets/Data";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WebNavbar = () => {
  const navigate = useNavigate();
  const [scrollTop, setScrollTop] = useState(0);
  let name = localStorage.getItem("userName");
  let role = localStorage.getItem("role");

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  const handleLogout= ()=> {
    localStorage.clear();
    window.location.reload(false);
  }
  return (
    <Box position="sticky" top="0" className="stickyNavbar">
      <Box className="div_three_container">
        <Box className="div_three_container_logo">
          <Link to="/">
            <Image src={logo} alt="logo_of_website" />
          </Link>
        </Box>
        <Box className="div_three_container_input-group">
          <input
            type="text"
            className="div_three_container_input"
            id="Email"
            name="title"
            placeholder="Enter Title or Keyword"
            autoComplete="off"
          />
          <input
            className="div_three_container_button--submit"
            value="SEARCH"
            type="submit"
          />
        </Box>
        <Box className="div_three_container_Avtar">
          {name ? (
            <Popover>
              <PopoverTrigger>
                <Box>
                  <Image ml="10px" w="65%" src={avatar} alt="avatar" />
                  <Text fontSize="xs" fontWeight="bold">
                    {name}
                  </Text>
                </Box>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Hello {name} !</PopoverHeader>
                <PopoverBody display={"grid"} gap="10px">
                  {
                    role === "Admin" ? <Button colorScheme="green"
                    color={"white"}
                    bg="#200589"
                    size={"sm"}
                    onClick={()=> navigate("/admin")} >Admin Panel</Button> : <Box></Box>
                  }
                  <Button
                    size={"sm"}
                    colorScheme="green"
                    color={"white"}
                    bg="#200589"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Box>
                  <Image ml="10px" w="65%" src={avatar} alt="avatar" />
                  <Text fontSize="xs" fontWeight="bold">
                    Login
                  </Text>
                </Box>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Hello Guest!</PopoverHeader>
                <PopoverBody>
                  <Button
                    size={"sm"}
                    colorScheme="green"
                    color={"white"}
                    bg="#200589"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          )}
        </Box>
        <Box className="div_three_container_Avtar">
          <Link>
            <Image src={orders} alt="orders" />
            <Text fontSize="xs" fontWeight="bold">
              My Orders
            </Text>
          </Link>
        </Box>
        <Box className="div_three_container_Avtar">
          <Link to="/shoping">
            <Image src={cart} alt="cart" />
            <Text fontSize="12px" fontWeight="bold">
              Cart
            </Text>
          </Link>
        </Box>
      </Box>
      <Box className="div_four_container">
        {Categories_Data.map((el) => (
          <Link key={el.category} to={el.url}>
            <Text>{el.category}</Text>
          </Link>
        ))}
      </Box>
      <Box className="div_five_container">
        <Box className="div_five_container_progress">
          <Box w={`${scrollTop}%`} className="div_five_container_style"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WebNavbar;
