import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const ImageSection = ({img}) => {
  return (
    <Box width="95%" margin="auto">
        <Image m="50px auto auto auto" src={img} alt="imagesSection" />
    </Box>
  )
}

export default ImageSection