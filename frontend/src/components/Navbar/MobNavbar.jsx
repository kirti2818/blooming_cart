import React from "react";
import {
  Box,
  Image,
  Text
} from "@chakra-ui/react";
import logo from "../../assets/images/Blooming Cart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import DrawerJSX from "./DrawerJSX";
const BG_COLOR = process.env.REACT_APP_BG_COLOR;

const MobNavbar = () => {
  const navigate = useNavigate();
  
  return (
    <Box className="mobile_nav_parent">
      <Box w="100%" h="80px" bg={BG_COLOR} className="mobile_nav_container">
        <Box>
          <DrawerJSX />
        </Box>
        <Box className="mobile_nav_container_logo">
          <Image w="29%" borderRadius="50%" src={logo} alt="logo" onClick={()=> navigate("/")} />
        </Box>
        <Box>
          <Link to="/shoping">
            <FontAwesomeIcon color="white" size="xl" icon={faCartShopping} />
            <Text fontWeight="bold" color="white">
              Cart
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default MobNavbar;
