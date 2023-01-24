import React from 'react'
import {
  Box, Text, Image, Button, Wrap, SimpleGrid,useToast
} from "@chakra-ui/react";
import {IoIosHeart } from "react-icons/io";
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import axios from "axios";
import { useNavigate } from 'react-router';


const Indvidual = () => {
  const {params}=useParams();
  const toast = useToast();
  let navigate = useNavigate();
  const [data, setData] = useState([]);


  let auth=localStorage.getItem("token")

  const handleCart = async(el) => {
    const post = {
      image: el.image,
      productname: el.productname,
      price: el.price,
      size: el.size,
      category: el.category
    }
    //console.log("post",post)
    try {
      let res = await axios.post("https://dull-pink-tortoise-wrap.cyclic.app/carts/",post,{
        headers: {
          'Authorization': auth
      }
      });
      if(res.data=== "Token is Missing Please Login First"){
        toast({
          title: Error,
          description: "Please Login First",
          status: "error",
          position: "top",
          duration: 3000,
          isClosable: true,
        })
      }else{
        toast({
          title: data.productname,
          description: "Item added to your Cart",
          status: "success",
          position: "top",
          duration: 3000,
          isClosable: true,
        })
      }
    } catch (error) {
      
    }
    

  }

  const handleshow = (id) => {
    navigate(`/${id}`)

  }

  useEffect(() => {
    if(params){
      axios.get(`https://dull-pink-tortoise-wrap.cyclic.app/products?category=${params}`)
      .then((res) => setData(res.data))
      .catch((er) => console.log(er))
    }else{
      axios.get(`https://dull-pink-tortoise-wrap.cyclic.app/`)
      .then((res) => setData(res.data))
      .catch((er) => console.log(er))
    }
  }, [params])

  return (
    <div style={{marginBottom:"100px"}}>
      <Box marginTop="2px" marginBottom="5px" bg="#F4F2F7 " justifyContent="center" paddingTop={["10px","15px","18px"]}  h={["30px","51px","65px"]}>
        <Text color="#65388B" fontWeight="semibold" fontSize={["11px","14px","17px"]}>save upto 40% on top {params} | SHOP NOW ^</Text>
      </Box>
      {/* <Text textAlign="center" fontSize="21px" textDecoration="underline 2px #088DF5" fontWeight="semibold" margin="15px">{params}</Text> */}
      <Wrap justify="center">
        <SimpleGrid w="90%" gap="15px 2px" columns={[2, 4]} >
          {
            data && data.map((el) => (
              <Box key={el._id} w="100%" textAlign="center">
                <Box onClick={() => handleshow(el._id)} cursor={"pointer"} w="81%" m="auto">
                  <Image w="100%" src={el.image}></Image>
                </Box>
                <Box fontSize={["15px", "16px", "16px"]} fontWeight="semibold" h={["41px", "46px", "48px"]} overflow="hidden">
                  <Text p="3px 7px" >{el.productname}</Text>
                </Box>
                <Box w="39%" display={"flex"} gap="5px" margin="auto" alignItems="center" justifyContent="center">
                  <Text fontSize="17px">{el.ratings}</Text>
                  <Image w="100%" src="https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg"></Image>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Text color="teal" fontWeight="semibold" fontSize="17px">  $ {el.price} </Text>
                  <Text as="s" m="3px 4px" fontSize="14px"> $ {Math.floor(el.strike_price * 5)}</Text>
                </Box>
                <Box display="flex" m="auto" alignItems="center" justifyContent="center">

                  <Button _hover={{bg:"#92bcb5"}} onClick={() => handleCart(el)} backgroundColor={process.env.REACT_APP_BG_COLOR} mr="5px" size='sm'>
                    Add to Cart
                  </Button>
                  <Button _hover={{bg:"#92bcb5"}} variant="outline" color={process.env.REACT_APP_BG_COLOR} size='sm'>
                    <IoIosHeart size="24px" ></IoIosHeart>
                  </Button>
                </Box>
              </Box>
            ))
          }

        </SimpleGrid>
      </Wrap>
    </div>
  )
}

export default Indvidual