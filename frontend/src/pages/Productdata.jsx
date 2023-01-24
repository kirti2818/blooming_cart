import React from 'react'
import { useState, useEffect } from 'react';
import Indvidual from './Indvidual';
import axios from "axios";
import { Box, Image, Text,Badge, Button, HStack,Divider,
   Stack, useToast, VStack } from '@chakra-ui/react';
   import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useParams } from 'react-router-dom';
import { BiShoppingBag  } from "react-icons/bi";
import {IoIosHeart } from "react-icons/io";

const Productdata = () => {
  const toast = useToast();
  const { id } = useParams();
  console.log("param", id)
  const [data, setData] = useState([]);
  
  const [count,setCount]=useState(1);
  const [DefaultImg, setImage] = useState();

  let auth=localStorage.getItem("token")
  useEffect(() => {
    axios.get(`https://dull-pink-tortoise-wrap.cyclic.app/products/${id}`, {
      headers: {
        'Authorization': auth
      }
    })
      .then((res) => setData(res.data))
      .catch((er) => console.log(er))
  }, [id])
  console.log(data)

 

  const handleClick=(el)=>{
    const post = {
      image: el.image,
      productname: el.productname,
      price: el.price,
      size: el.size,
      category: el.category
    }
    //console.log("post",post)
    axios.post("https://dull-pink-tortoise-wrap.cyclic.app/carts/",post,{
      headers: {
        'Authorization': auth
    }
    })
    .then((res)=>console.log(res),
    toast({
      title: data.productname,
      description: "Item added to your Cart",
      status: "success",
      position: "top",
      duration: 3000,
      isClosable: true,
    })
    )
    .catch((er)=>console.log(er))
  }
  
  return (
    <Box m="auto">
      <Stack w={["98%","95%","97%"]} margin="auto" alignSelf="center" justifyContent="center" direction={{ base: "column", md: "row" }} spacing={{ base: 0, sm: 30 }} padding={5} justify="center" style={{ marginTop: "11px", marginBottom: "50px" }} >

        <Stack
          flexDirection={{ base: "column-reverse", md: "row" }} spacing={5} padding={5}>

          <Stack direction={{ base: "row", md: "column" }} maxH="500px" padding={3} >

            <ChevronDownIcon display={{ base: "none", md: "block" }} boxSize="20px" color="gray.500" cursor="pointer" />

            {
            data.multi_image && data.multi_image.map((img,i) => (

              <Image key={i} borderRadius={5}  maxW={"70"} minW={["50px","85px","90px"]}
                objectFit='cover' src={img}
                 onClick={() => setImage(img)} cursor="pointer" />

            ))}
            <ChevronUpIcon display={{ base: "none", md: "block" }} boxSize="20px" color="gray.500" cursor="pointer" />
          </Stack>

          <Stack>
            <Image borderRadius={15}  src={data.image} maxH="auto" minW={["100px","80px","200px"]} />
          </Stack>

        </Stack>


        <VStack w={{ base: "full", md: "50%" }} h={{ base: "full" }} textAlign="left" padding={{ base: 5, md: 8 }} align="revert-layer" spacing={5} >

          <Text fontSize={["15px","19px","25px"] } fontWeight="bold" fontFamily="cursive" paddingLeft={["5px","3px","1px"]} color="blue.500"  >Blooming Cart</Text>
          <Text fontSize={["12px","15px","19px"]} color="black" paddingLeft={["5px","3px","1px"]} >{data.productname}</Text>
          <Stack>

            <HStack alignContent="center">
              <Badge fontSize={["13px","16px","19px"] } paddingLeft={["5px","3px","1px"]} variant="outline" width="fit-content" colorScheme="#65388B">{"4.4  ⭐"}</Badge>
              <Text fontWeight="bold" paddingLeft={["5px","3px","1px"]} fontSize="20px"  > $ {Math.floor(data.price)}</Text>

              <Text as="s" paddingLeft={["5px","3px","1px"]} marginLeft={4} fontSize="xl" >$ {Math.floor(data.strike_price * 6)}</Text>
            </HStack>
            <Text paddingLeft={["5px","3px","1px"]} >inclusive of all taxes</Text>
          </Stack>

          <Divider />

          <Badge fontSize={["13px","16px","19px"]} variant="solid" fontFamily="monospace" paddingLeft={["5px","3px","1px"]} bg="#F4F2F7 " color="#65388B"> Most popular! 14,563 people viewed this today.</Badge>

          <Text paddingLeft={["5px","3px","1px"]}>Free Shipping/No Service Charge for One Full Year for Only $19.99/Year.</Text>

         

          <Text paddingLeft={["5px","3px","1px"]} fontWeight="extrabold">Qty.</Text>
          <Box paddingLeft={["5px","3px","1px"]}>
            <Button variant="solid" marginLeft={2} onClick={() => setCount(count + 1)}>+</Button>
            <Button variant="solid"  marginLeft={2}>{count}</Button>
            <Button variant="solid"  marginLeft={2} onClick={() => setCount(count - 1)}>-</Button>
          </Box>

          <Text fontSize={{ base: "11px", md: "13px" }} paddingLeft={["5px","3px","1px"]} variant="subtle" color="teal">Designed & Delivered by a local shop</Text>

          <Divider />

          <HStack w="full" paddingLeft={["5px","3px","1px"]}>

            <Button _hover={{bg:"#92bcb5"}} onClick={() => handleClick(data)} fontSize="19px" padding={5} w="half" backgroundColor={process.env.REACT_APP_BG_COLOR}>

              <BiShoppingBag fontSize={{ base: "25px", sm: "25px", md: "3xl" }} />Add to Cart</Button>

            <Button _hover={{bg:"#92bcb5"}} variant="outline" color={process.env.REACT_APP_BG_COLOR}>

            <IoIosHeart  size="29px" ></IoIosHeart>


            </Button>


          </HStack>



        </VStack>


      </Stack>
    </Box>
  )
}

export default Productdata