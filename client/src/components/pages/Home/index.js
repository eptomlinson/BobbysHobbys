import React from 'react';
import Navbar from "../../Navbar";
import Jumbotron from "../../Jumbotron/Jumbotron";
import Portfolio from "../../PortfolioContainer"

const Home = (props) => {

    return (
        <>
            <Navbar toggle={props.toggle} isLoggedIn={props.isLoggedIn} />
            <Jumbotron />
            <Portfolio />
        </>
    )
};

export default Home;
