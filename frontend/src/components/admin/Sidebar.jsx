import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faHouse, faUser, faGift, faTruck, faSliders } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <Box className='sidebar_parent'>
        <Box className='sidebar_container'>
            <Box className='sidebar_child'>
                <Box className='link_box'>
                <Link to="/admin">
                <FontAwesomeIcon icon={faHouse} />
                    <Text>DASHBOARD</Text>
                </Link>
                <Link to="/admin/users">
                <FontAwesomeIcon icon={faUser} />
                    <Text>ALL USERS</Text>
                </Link>
                <Link to="/admin/products" >
                <FontAwesomeIcon icon={faGift} />
                    <Text>ALL PRODUCTS</Text>
                </Link>
                <Link to="/admin/orders" >
                <FontAwesomeIcon icon={faTruck} />
                    <Text>ORDERS</Text>
                </Link>
                <Link to='/admin/adding'>
                <FontAwesomeIcon icon={faSliders} />
                    <Text>ADD DATA</Text>
                </Link>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Sidebar