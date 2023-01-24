import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import TopNavbar from "../components/Navbar/TopNavbar";
import CartPage from "../pages/Cart/Cart";
import { ShopingCart } from "../pages/Cart/ShopingCart";
import Homepage from "../pages/Homepage";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import {PaymentsPage} from "../pages/Cart/PaymentsPage";
import Footer from "../components/Footer/Footer";
import { Delivery } from "../pages/Cart/Delivery";
import Indvidual from "../pages/Indvidual";
import Allusers from "../pages/AdminPages/Allusers";
import Dashboard from "../pages/AdminPages/Dashboard";
import Allproducts from "../pages/AdminPages/Allproducts";
import Order from "../pages/AdminPages/Order";
import Adding from "../pages/AdminPages/Adding";
import Productdata from "../pages/Productdata";
import PrivateRoute from "./PrivateRoute";


export default function AllRoutes() {
  return (
    <Box>
      <TopNavbar />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/payments" element={<PaymentsPage />}></Route>
        <Route path="/shoping" element={<ShopingCart />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/payment" element={<PaymentsPage />}></Route>
        <Route path="/delivery" element={<Delivery />}></Route>
        <Route path="/ind" element={<Indvidual />}></Route>
        <Route path="/ind/:params" element={<Indvidual />}></Route>
        <Route path="/admin" element={ <PrivateRoute><Dashboard /></PrivateRoute> }></Route>
        <Route path="/admin/users" element={<PrivateRoute><Allusers /></PrivateRoute>} />
        <Route path="/admin/products" element={<PrivateRoute><Allproducts /></PrivateRoute>} />
        <Route path="/admin/orders" element={<PrivateRoute><Order /></PrivateRoute>} />
        <Route path="/admin/adding" element={<PrivateRoute><Adding /></PrivateRoute>} />
        <Route path="/ind" element={<Indvidual/>}></Route>
        <Route path="/:id" element={<Productdata/>}></Route>
        {/* <Route path="/getcart" element={<GetCart/>}></Route> */}
        <Route path="*" element={<h1>Page Not Found</h1>}></Route>
      </Routes>
      <Footer></Footer>
    </Box>
  );
}
