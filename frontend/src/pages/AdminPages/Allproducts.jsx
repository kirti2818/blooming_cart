import {
  Box,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import "../../styles/adminpages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Loader from "../Loader";

const Allproducts = () => {
  const toast = useToast();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const handleData = async () => {
    try {
      let res = await fetch("https://dull-pink-tortoise-wrap.cyclic.app/admin/products");
      let result = await res.json();
      setLoading(false);
      setData(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  const handleClick = async (id) => {
    try {
       await fetch(`https://dull-pink-tortoise-wrap.cyclic.app/admin/products/${id}`, {
        method: "DELETE",
      });
      console.log("deleted sucessfully");
      toast({
        title: "Deleted",
        description: "Successfully Deleted Product",
        status: "success",
        position: "top",
        duration: 1000,
        isClosable: true,
      });
      handleData();
    } catch (error) {
      console.log("error");
      toast({
        title: "ERROR",
        description: "Error While Deleting",
        status: "error",
        position: "top",
        duration: 1000,
        isClosable: true,
      });
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
                Product Page
              </Heading>
            </Box>
            {loading ? (
              <Loader />
            ) : (
              <TableContainer>
                <Table size="sm" variant="simple" colorScheme="purple">
                  <TableCaption>
                    All the Users Data is Present Here
                  </TableCaption>
                  <Thead colorScheme="red" fontWeight="bold">
                    <Tr>
                      <Th color="Black">Product ID</Th>
                      <Th color="Black">Product Name</Th>
                      <Th color="Black">Category</Th>
                      <Th color="Black">Price</Th>
                      <Th color="Black">Actions</Th>
                    </Tr>
                  </Thead>
                  {data &&
                    data.map((el, i) => (
                      <Tbody
                        bg={i % 2 === 0 ? "white" : "#E9D8FD"}
                        textAlign="left"
                      >
                        <Tr>
                          <Td>{el._id}</Td>
                          <Td>{el.productname}</Td>
                          <Td>{el.category}</Td>
                          <Td>{el.price}</Td>
                          <Td>
                            <Box display="flex" gap="30px">
                              <button>
                                <FontAwesomeIcon icon={faPen} />
                              </button>
                              <button onClick={() => handleClick(el._id)}>
                                <FontAwesomeIcon color="red" icon={faTrash} />
                              </button>
                            </Box>
                          </Td>
                        </Tr>
                      </Tbody>
                    ))}
                </Table>
              </TableContainer>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Allproducts;
