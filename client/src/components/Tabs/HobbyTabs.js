import React from "react";
import "./style.css"

function HobbyTabs(props) {
  
  return (
    <ul className="nav nav-tabs">
            <li className="nav-item">
        <a
          href="#art"
          onClick={() => props.handlePageChange("Art")}
          className={props.currentPage === "Art" ? "nav-link active" : "nav-link"}
        >
          Arts and Crafts
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#cooking"
          onClick={() => props.handlePageChange("Cooking")}
          className={props.currentPage === "Cooking" ? "nav-link active" : "nav-link"}
        >
          Cooking
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#entertainment"
          onClick={() => props.handlePageChange("Entertainment")}
          className={props.currentPage === "Entertainment" ? "nav-link active" : "nav-link"}
        >
          Entertainment
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#exercise"
          onClick={() => props.handlePageChange("Exercise")}
          className={props.currentPage === "Exercise" ? "nav-link active" : "nav-link"}
        >
          Exercise and Sports
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#games"
          onClick={() => props.handlePageChange("Games")}
          className={props.currentPage === "Games" ? "nav-link active" : "nav-link"}
        >
          Tabletop Games
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#homeimprovement"
          onClick={() => props.handlePageChange("Home-Improvement")}
          className={props.currentPage === "Home-Improvement" ? "nav-link active" : "nav-link"}
        >
          Home Improvement
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#music"
          onClick={() => props.handlePageChange("Music")}
          className={props.currentPage === "Music" ? "nav-link active" : "nav-link"}
        >
          Music
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#outdoors"
          onClick={() => props.handlePageChange("Outdoors")}
          className={props.currentPage === "Outdoors" ? "nav-link active" : "nav-link"}
        >
          Outdoors
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#thrillseeking"
          onClick={() => props.handlePageChange("ThrillSeeking")}
          className={props.currentPage === "ThrillSeeking" ? "nav-link active" : "nav-link"}
        >
          Thrill Seeking
        </a>
      </li>
    </ul>
  );
}

export default HobbyTabs;
