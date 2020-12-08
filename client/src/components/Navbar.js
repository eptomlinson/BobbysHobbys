import React, { useState } from "react";
import { Link } from "react-router-dom";
import PostModal from "./Modal/MakeAPost";
import API from "../utils/API";
import whiteorangetransparent from "./whiteorangetransparent.PNG";
import bobbyround2 from "./bobbyround2.png";
import "./navbar.css";

function Navbar(props) {
  const styles = {
    backgroundColor: "#141414",
    boxShadow: " 0px 0px 10px 0px #000",
  };
  const buttonStyle = { backgroundColor: "#141414" };

  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(e, image) {
    e.preventDefault();
    console.log(formObject, image);

    API.saveHobby({
      name: formObject.name,
      image: image,
      cost: formObject.cost,
      description: formObject.description,
      category: formObject.category,
    })
      .then(() => {
        alert("Your post has been saved");
        e.target.reset();
      })
      .catch((err) => console.log(err));
  }

  function handleClick(event) {
    event.preventDefault();

    window.location = "/";
  }

  const styles2 = {
    alignSelf: "center",
    height: 50,
  };

  return (
    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div style={styles} className="p-4">
          <h4 className="text-white">Bobby's Hobbies</h4>
          <span className="text-muted">Your Leisure Liaison</span>
          <Link to="/home">
            <button
              className="nav-item nav-link active"
              style={{
                width: "70%",
                marginLeft: "15%",
                marginRight: "15%",
                marginTop: "5%",
                outline: "none",
                textDecoration: "none",
              }}
            >
              Home <span className="sr-only">(current)</span>
            </button>
          </Link>
        </div>
      </div>
      <nav style={styles} className="navbar">
        <button
          style={buttonStyle}
          align="center"
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img
            style={styles2}
            className="bobbyImage"
            src={whiteorangetransparent}
            alt="bobbyorange"
          ></img>
          <span className="navbar-toggler-icon">
            <div style={{ fontSize: 20 }}>^</div>
          </span>
        </button>
        <div className="row">
          <Link to="/favorites">
            <button
              style={{
                fontFamily: `'Assistant', sans-serif`,
                color: "#BF3A0D",
                size: 25,
                marginRight: 5,
                border: "1px solid #BF3A0D",
              }}
              className="btn btn-outline-light btn-space"
            >
              Favorites
            </button>
          </Link>
          <PostModal
            onChange={handleInputChange}
            submitPost={handleFormSubmit}
          />

          <Link to="/">
            <button
              onClick={handleClick}
              type="button"
              className="btn btn-outline-light btn-space"
              style={{ marginRight: 5, fontFamily: `'Assistant', sans-serif` }}
            >
              Logout
            </button>
          </Link>
        </div>
      </nav>

      <img
        style={{ height: 400 }}
        className="bobbyround"
        src={bobbyround2}
        alt="bobby round"
      ></img>
    </div>
  );
}
export default Navbar;
