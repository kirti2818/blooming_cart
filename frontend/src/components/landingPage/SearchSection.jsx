import { Box, Button, Input, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import "../../styles/homepage.css";
import { Categories_Data } from "../../assets/Data";
import {useNavigate} from "react-router-dom";

const SearchSection = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  return (
    <Box className="search_section_parent">
      <Box className="search_section_container">
        <Text>FIND THE PERFECT GIFT</Text>
        <Box>
          <Input placeholder="Zip Code" color="black" bg="white"></Input>
        </Box>
        <Box>
          <Select onChange={(e)=> setInput(e.target.value)} fontSize={['xs', 'sm', 'md', 'lg']} colorScheme="red" color="black" bg="white" placeholder="Categories">
            {Categories_Data.map((el) => (
              <option key={el.category} value={el.url}>{el.category}</option>
            ))}
          </Select>
        </Box>
        <Box>
          <Input
            placeholder="Select Date and Time"
            type="date"
            color="black"
            bg="white"
          />
        </Box>
        <Box>
          <Button bg="green" colorScheme="whatsapp" onClick={()=> navigate(`${input}`)} >Find a Gift Now</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchSection;
