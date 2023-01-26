import React from "react";
import {Route, Routes} from "react-router-dom";

import Login from "pages/Login";
import Home from "pages/Home";
import Register from "pages/Register";
import styled from "styled-components";
import Search from "../pages/Search";
import MovieDetail from "pages/MovieDetail"
import ShoppingCart from "../pages/ShoppingCart";
import Checkout from "../pages/Checkout"
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderHistory from "../pages/OrderHistory"
import OrderStatus from "../pages/OrderStatus";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 25px;

  background: #ffffff;
  box-shadow: inset 0 3px 5px -3px #000000;
`

/**
 * This is the Component that will switch out what Component is being shown
 * depending on the "url" of the page
 * <br>
 * You'll notice that we have a <Routes> Component and inside it, we have
 * multiple <Route> components. Each <Route> maps a specific "url" to show a
 * specific Component.
 * <br>
 * Whenever you add a Route here make sure to add a corresponding NavLink in
 * the NavBar Component.
 * <br>
 * You can essentially think of this as a switch statement:
 * @example
 * switch (url) {
 *     case "/login":
 *         return <Login/>;
 *     case "/":
 *         return <Home/>;
 * }
 *
 */
const Content = () => {
    return (
        <StyledDiv>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/movie/:id" element={<MovieDetail/>}/>
                <Route path="/cart" element={<ShoppingCart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/orders" element={<OrderHistory/>}/>
                <Route path="/orderStatus" element={<OrderStatus/>}/>
            </Routes>
        </StyledDiv>
    );
}

export default Content;
