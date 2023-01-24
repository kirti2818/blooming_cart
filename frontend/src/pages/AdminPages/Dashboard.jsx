import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import "../../styles/adminpages.css";
import LineChart from "../../components/admin/LineChart";
import PieChart from "../../components/admin/PieChart";

const Dashboard = () => {
  const [user, setUser] = useState(0);
  const [product, setProduct] = useState(0);
  const [amount, setAmount] = useState(0);
  var totalAmount=0;

  const handleData = async () => {
    try {
      let res = await fetch("https://dull-pink-tortoise-wrap.cyclic.app/admin/users");
      let res2 = await fetch("https://dull-pink-tortoise-wrap.cyclic.app/admin/products");
      let result = await res.json();
      let result2 = await res2.json();
      setUser(result.length);
      setProduct(result2.length);
      console.log(result2);
      // setData(result2);
      result2 &&
        result2.forEach((item) => {
          totalAmount += +Math.round(item.price);
        });
      console.log(totalAmount);
      setAmount(totalAmount);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(totalAmount);
  useEffect(() => {
    handleData();
  }, []);

  const userData = {
    labels: [2019, 2020, 2021, 2022, 2023],
    datasets: [
      {
        label: "Users Gained",
        data: [0, 8, 4, 7, user],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  const ProductData = {
    labels: [2019, 2020, 2021, 2022, 2023],
    datasets: [
      {
        label: "Products Increased",
        data: [25, 54, 23, 87, product],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#5F9DF7",
          "#CA4E79",
          "#f3ba2f",
          "#FF6E31",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <Box className="admin_parent">
      <Box className="admin_container">
        <Box>
          <Sidebar />
        </Box>
        <Box>
          <Box bg="#000000" m="20px auto">
            <Heading p="10px 0px" color={"white"}>Dashboard</Heading>
          </Box>
          <Box>
            <Box bg="twitter.500" className="detail1_container">
              <Text>Total Amount</Text>
              <Text>{amount}</Text>
            </Box>
            <Box className="detail2_container">
              <Box bg="yellow.400">
                <Text>Products</Text>
                <Text>{product}</Text>
              </Box>
              <Box bg="red.500">
                <Text>Orders</Text>
                <Text>5</Text>
              </Box>
              <Box bg="teal.400">
                <Text>Users</Text>
                <Text>{user}</Text>
              </Box>
            </Box>
            <Box
              mt="70px"
              justifyContent="space-around"
              mb="100px"
              display="flex"
            >
              <Box style={{ width: 500 }}>
                <LineChart chartData={userData} />
              </Box>
              <Box style={{ width: 350 }}>
                <PieChart chartData={ProductData} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
