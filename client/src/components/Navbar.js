import React from "react";

function Navbar(props) {


return (
<div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h4 class="text-white">Bobby's Hobbies</h4>
      <span class="text-muted">Your Leisure Liaison</span>
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Login</a>
      <a class="nav-item nav-link" href="#">About</a>
      <a class="nav-item nav-link" href="#">Contact Us</a>
      <a class="nav-item nav-link" href="#">Logout</a>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
  <h1 style={{fontFamily: "Monaco", fontSize: "100px"}}>BOBBY'S HOBBIES</h1>
</div>
) 
}

export default Navbar;