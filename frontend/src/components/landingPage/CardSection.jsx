import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import "../../styles/homepage.css"
import {useNavigate} from "react-router-dom"

const CardSection = ({details,title}) => {
  const navigate = useNavigate();
  return (
    <Box className='CardSection_parent'>
        <Heading size={['sm', 'md', 'lg', 'xl']} className='CardSection_parent_heading' fontFamily="PlayfairDisplayBold">{title}</Heading>
        <Box className='CardSection_container'>
            {
               details && details.map((el)=> (
                    <Box key={el.img} onClick={()=> navigate("/ind") }>
                        <Image width="90%" src={el.img} />
                        <Text fontSize={['xs', 'sm', 'md', 'lg']} fontWeight="bold" >{el.name}</Text>
                    </Box>
                ))
            }
        </Box>
    </Box>
  )
}

export default CardSection