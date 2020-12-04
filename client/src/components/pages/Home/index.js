import React, { useState } from 'react';
import Navbar from "../../Navbar";
import Jumbotron from "../../Jumbotron/Jumbotron";
import Portfolio from "../../PortfolioContainer"
const Home = ({toggle, isLoggedIn}) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log(isLoggedIn);
    return (
        <>
            <Navbar toggle={toggle} isLoggedIn = {isLoggedIn} />
            <Jumbotron />
            <Portfolio />
        </>
    )
};

export default Home;
