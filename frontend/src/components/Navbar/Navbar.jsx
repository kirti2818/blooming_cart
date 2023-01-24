import { Box} from "@chakra-ui/react";
import React from "react";
import "../../styles/navbar.css";
import MobNavbar from "./MobNavbar";
import WebNavbar from "./WebNavbar";

const Navbar = () => {

  return (
    <Box position="sticky" zIndex="999" top="0" className="container">
      <WebNavbar />
      <MobNavbar />
    </Box>
  );
};

export default Navbar;