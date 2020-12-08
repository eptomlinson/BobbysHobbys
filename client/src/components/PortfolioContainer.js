import React, { Component } from "react";
import HobbyTabs from "./Tabs/HobbyTabs";
import Cooking from "./pages/Cooking/Cooking";
import Exercise from "./pages/Exercise/Exercise";
import Art from "./pages/Art/Art";
import Entertainment from "./pages/Entertainment/Entertainment";
import Games from "./pages/Games/Games";
import HomeImprovement from "./pages/HomeImprovement/HomeImprovement";
import Outdoors from "./pages/Outdoors/Outdoors";
import ThrillSeeking from "./pages/Thrill-Seeking/Thrill-Seeking";
import Music from "./pages/Music/Music";

class Portfolio extends Component {
  state = {
    currentPage: "Art",
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Art") {
      return <Art />;
    } else if (this.state.currentPage === "Cooking") {
      return <Cooking />;
    } else if (this.state.currentPage === "Entertainment") {
      return <Entertainment />;
    } else if (this.state.currentPage === "Exercise") {
      return <Exercise />;
    } else if (this.state.currentPage === "Games") {
      return <Games />;
    } else if (this.state.currentPage === "Home-Improvement") {
      return <HomeImprovement />;
    } else if (this.state.currentPage === "Music") {
      return <Music />;
    } else if (this.state.currentPage === "Outdoors") {
      return <Outdoors />;
    } else if (this.state.currentPage === "ThrillSeeking") {
      return <ThrillSeeking />;
    }
  };

  render() {
    return (
      <div>
        <HobbyTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
