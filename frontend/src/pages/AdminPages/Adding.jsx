import { Box, Button, Heading, Input, Select, Stack, useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import "../../styles/adminpages.css";

const Adding = () => {
  const toast = useToast();
  const [input, setInput] = useState({
    image: "",
    productname: "",
    category: "",
    price: "",
    size: "",
    description: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleClick = async () => {
    try {
      let res = await fetch("https://dull-pink-tortoise-wrap.cyclic.app/admin/products", {
        method: "POST",
        body: JSON.stringify(input),
        headers:{
          "Content-Type":"application/json"
        }
      });
      toast({
        title: "Added",
        description: "Successfully Added Product",
        status: "success",
        position: "top",
        duration: 1000,
        isClosable: true,
      });
      let response = await res.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box>
      <Box className="admin_parent">
        <Box className="admin_container">
          <Box>
            <Sidebar />
          </Box>
          <Box className="allusers_container">
            <Box bg="#000000" m="20px auto">
              <Heading p="10px 0px" color={"white"}>
                Add Products
              </Heading>
            </Box>
            <Box w="50%" m="auto">
              <Stack spacing={3}>
                <Input
                  variant="filled"
                  name="productname"
                  value={input.productname}
                  onChange={handleChange}
                  placeholder="Product Name"
                />
                <Select
                  variant="filled"
                  name="category"
                  value={input.category}
                  onChange={handleChange}
                  placeholder="Category"
                >
                  <option value="valentine">Valentine</option>
                  <option value="birthday">Birthday</option>
                  <option value="sympathy">Sympathy</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="plants">Plants</option>
                  <option value="Gift Baskets">Gift Baskets</option>
                  <option value="sameday delivery">Sameday Delivery</option>
                  <option value="sale">Sale</option>
                </Select>
                <Input
                  variant="filled"
                  name="price"
                  value={input.price}
                  onChange={handleChange}
                  placeholder="Price"
                />
                <Input
                  variant="filled"
                  name="size"
                  value={input.size}
                  onChange={handleChange}
                  placeholder="Size"
                />
                <Input
                  variant="filled"
                  name="description"
                  value={input.description}
                  onChange={handleChange}
                  placeholder="Description"
                />
                <Input
                  autoComplete="off"
                  variant="filled"
                  name="image"
                  value={input.image}
                  onChange={handleChange}
                  placeholder="Image URL"
                />
                <Button onClick={handleClick} colorScheme={"whatsapp"}>
                  POST
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Adding;
