import React from "react";
import { Box, Image, Text, Tooltip } from "@chakra-ui/react";
import { Brand_Images } from "../../assets/Data";
import "../../styles/navbar.css";
const BG_COLOR = process.env.REACT_APP_BG_COLOR;

const TopNavbar = () => {
  return (
    <Box className="top_navbar_parent">
      <Box
        textAlign="left"
        w="100%"
        className="div_one_container"
        h="25px"
        display="flex" justifyContent="center" alignItems="center"
        bg={BG_COLOR}
      >
        <Box color="white" width="95%">
        <Text  fontSize="xs">
          <Tooltip border="1px solid white" label="We are woking on it">
            INTERNATIONAL DELIVERY
          </Tooltip>
          </Text>
        </Box>
      </Box>
      <Box className="div_two_container">
        {Brand_Images.map((el) => (
          <Box key={el.img} className="div_two_container_brands">
            <Image width="80%" src={el.img} alt={el.img} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TopNavbar;
