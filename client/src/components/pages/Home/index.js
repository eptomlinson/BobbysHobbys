import React, { useState } from 'react';
import Navbar from "../../Navbar";
import Jumbotron from "../../Jumbotron";
import Portfolio from "../../PortfolioContainer"
const Home = ({toggle}) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <Navbar toggle={toggle} />
            <Jumbotron />
            <Portfolio />
        </>
    )
};

export default Home;
