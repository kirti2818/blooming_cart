import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  Input,
  Heading,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import { Categories_Data } from "../../assets/Data";
import { Link } from "react-router-dom";
const BG_COLOR = process.env.REACT_APP_BG_COLOR;

const DrawerJSX = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Box>
      <button ref={btnRef} onClick={onOpen}>
        <FontAwesomeIcon color="white" size="xl" icon={faBars} />
        <Text fontWeight="bold" color="white">
          Menu
        </Text>
      </button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Blooming Cart</DrawerHeader>
          <DrawerBody>
            <Box bg="grey.100">
              <Input placeholder="Enter Keyword" />
            </Box>
            {Categories_Data.map((el) => (
              <Box key={el.category} p="10px" display="flex" justifyContent="space-between">
                <Link to={el.url}>
                  <Text fontWeight="500">{el.category}</Text>
                </Link>
                <Text fontWeight="bold">{">"}</Text>
              </Box>
            ))}
            <Box display="block" textAlign="center">
              <Button color="white" background={BG_COLOR}>
                SHOP LAST MINUTES DEALS
              </Button>
              <Box textAlign="left">
                <Link to="/login">
                  <Heading p="10px 5px" size="sm">
                    Login
                  </Heading>
                </Link>
                <Link>
                  <Heading p="10px 5px" size="sm">
                    Track My Order
                  </Heading>
                </Link>
                <Link>
                  <Heading p="10px 5px" size="sm">
                    International Delivey
                  </Heading>
                </Link>
              </Box>
            </Box>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default DrawerJSX;
