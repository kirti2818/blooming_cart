import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import "../../styles/homepage.css";
import { ReviewData } from "../../assets/Data";

const ReviewSection = () => {
  return (
    <Box mt="70px" className="ReviewSection_parent">
      <Heading
        size={["sm", "md", "lg", "xl"]}
        className="CardSection_parent_heading"
        fontFamily="PlayfairDisplayBold"
      >
        Some of the Great Things Our Customers Say About Us
      </Heading>
      <Box className="ReviewSection_container">
        {ReviewData.map((el) => (
          <div key={el.des} className="ReviewSection_card">
            <div style={{ backgroundImage:`url(${el.img})`}} className="ReviewSection_card-img"></div>
            <div className="ReviewSection_card-info">
              <Text fontSize={["sm","md","lg","xl"]}  fontWeight="bold">{el.rating}</Text>
              <p className="ReviewSection_text-body">{el.des}</p>
              <Text fontSize={["sm","md","lg","xl"]}  fontWeight="bold" color="#200589">{el.name}</Text>
            </div>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default ReviewSection;
