import React, { useState, useEffect, Alert } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./style.css";

var passport = require("passport")
const Login = (props) => {

    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [inputPassword, setInputPassword] = React.useState("")
    const [inputEmail, setInputEmail] = React.useState("")
    const [user, setUser] = React.useState(null)
    
    const [loggedIn, setLoggedIn] = React.useState()
    const [errorMessage, setErrorMessage] = React.useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("hello")

        if (password.length < 6 && password !== (/[0-9]/) && password !== (/[a-z]/)){
            alert('Password must contain at least 6 characters long, lettters, and at least one number');
            setPassword('');
        }
        else {
            console.log("about to make axios call")
        axios.post("/api/users/signup", {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
        })
            .then(function (res) {
                console.log(res);
                alert("You're all signed up!");
                setFirstName('');
                setLastName('');
                setPassword('');
                setEmail('');
            })
        }
    }


    const handleLoginUser = (e) => {
        e.preventDefault()
        console.log("something");
        axios.post("/api/users/login", {
            email: inputEmail,
            password: inputPassword,
        })
            .then(function (res) {
                console.log(res)
                console.log("logged in user")
                // window.location.reload()
                setLoggedIn(true)
                props.toggle()
                // window.location.href = "/home"

            })
            // this.setState({
            // redirectTo: '/home'})

            .catch(error => { 
                console.log(error) 
                setErrorMessage("User doesn't exist")
            })
    }
    React.useEffect(() => {
        axios.get("/api/users/info")
            .then(function (res) {
                console.log(res.data)
                setUser(res.data)
            })
    }, [])
    function Login() {
        passport.authenticate('local', {
            successRedirect: '/home',
            failureRedirect: '/',
            failureFlash: true
        })
    }
    return (
        <div>
            {(user) &&
                <p>Welcome {user.first_name}!!</p>
            }

<section className="container-fluid">
            <section className="row">
                <section className="col-12 col-sm-6 col-md-3">
                    <div className="form-container">
                        {(user) &&
                            <p>Welcome {user.first_name}!!</p>
                        }
                        <form className="form-group" onSubmit={handleSubmit}>
                            <label for="exampleInputName">Sign Up</label>
                            <div class="form-group">
                                <input value={firstName} placeholder="First Name" onChange={e => setFirstName(e.target.value)} class="form-control" id="firstname" ></input>
                            </div>
                            <div class="form-group">
                                <input value={lastName} placeholder="Last Name" onChange={e => setLastName(e.target.value)} class="form-control" id="lastname"></input>
                            </div>
                            <div class="form-group">
                                <input value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} class="form-control" id="exampleemail" ></input>
                            </div>
                            <div class="form-group">
                                <input value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} class="form-control" id="examplepassword" ></input>
                            </div>
                            <button type="submit" class="btn btn-dark btn-block">Sign Up</button>
                        </form>

                        <form onSubmit={handleLoginUser}>
                            <label for="exampleInputEmail1">Already a user? Login</label>
                            <div class="form-group">
                                <input value={inputEmail} placeholder="Email" onChange={e => setInputEmail(e.target.value)} class="form-control" aria-describedby="emailHelp" ></input>
                            </div>
                            <div class="form-group">
                                <input value={inputPassword} placeholder="Password" onChange={e => setInputPassword(e.target.value)} class="form-control" id="examplepassword" aria-describedby="emailHelp"></input>
                            </div>
                            <button type="submit" class="btn btn-dark btn-block">Login</button>
                            <br></br>
                            {errorMessage}
                        </form>






                    </div>
                </section>
            </section>
        </section>


            
        </div>
        
    )
}

export const handleLogoutUser = (e) => {
    // e.preventDefault()
    console.log("loggingout")
    axios.get("/api/users/logout", {
    })
        .then(function (res) {
            console.log(res)
            // setLoggedIn(false)
            window.location.href = "/"

        })
}
export default Login;