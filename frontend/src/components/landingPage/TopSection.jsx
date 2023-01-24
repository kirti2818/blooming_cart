import React from "react";
import { Box, Image, Link, Text } from "@chakra-ui/react";
import "../../styles/homepage.css";
const COLOR = process.env.REACT_APP_BG_COLOR;

const TopSection = () => {
  return (
    <Box className="top_section_parent">
      <Box className="top_section_container">
        <Link>
          <Text color={COLOR}>
            SAVE UP TO 40% ON TOP FLOWERS & GIFTS! | SHOP NOW {">"}
          </Text>
        </Link>
        <Box>
          <Image w={"100%"} src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0e98fd147de5199a/631a53cd10c00a57bb0cd53d/birthday-flowers-hero-fy23-fall.jpg?quality=75&auto=webp&optimize={medium}" />
        </Box>
      </Box>
    </Box>
  );
};

export default TopSection;
