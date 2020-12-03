import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
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
        axios.post("/api/users/signup", {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,

        })

            .then(function (res) {
                console.log(res)
            })
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
                window.location.href = "/home"

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
        <div style={{ marginBottom: 10 }}>
            <div  style={{width: '100%'}}>
                <nav  style={{width: '100%'}}>
                    <h1 style={{textAlign: 'center', backgroundColor: '#ffa64d'}}>| BOBBY'S HOBBY'S |</h1>
                </nav>
            </div>

            {(user) &&
                <p>Welcome {user.first_name}!!</p>
            }


            <form onSubmit={handleLoginUser} style={{border: '2px solid #ccc', borderRadius: '5px', width: '75%', align: 'center', marginLeft: '12.5%', marginRight: '12.5%', marginTop: '10%', backgroundColor: "#DCDCDC"}}>
            <h1 style={{fontFamily: "'Epilogue', sans-serif", marginTop: 10}}>LOG IN</h1>
                <hr/>
                <div class="form-group">
                    <input value={inputEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/> 
                </div>
                    <div class="form-group">
                    <input value={inputPassword} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <Button color="primary" style={{marginBottom: 10}} onClick={Login}>Log In</Button>
                {errorMessage}
            </form>

                        {/* <form onSubmit={handleLoginUser} style={{border: '2px solid #ccc', borderRadius: '5px', width: '50%', align: 'center', marginLeft: '25%', marginRight: '25%', backgroundColor: "#DCDCDC"}}>
                <h1 style={{fontFamily: "'Epilogue', sans-serif", marginTop: 10}}>LOG IN</h1>
                <hr/>
                <input value={inputEmail} placeholder="input email" onChange={e => setInputEmail(e.target.value)} />
                <br></br>
                <input value={inputPassword} placeholder="input password" onChange={e => setInputPassword(e.target.value)} style={{margin: 10}}/>
                <br></br>
                <Button color="primary" style={{marginBottom: 10}}>Log In</Button>
                <br></br>
                {errorMessage}
                {/* <button onClick={Login}>Login</button> */}
                        {/* </form> */}

                        <br></br>
                        <h3>~OR~</h3>
                        <br></br>

                <form onSubmit={handleSubmit} style={{border: '2px solid #ccc', borderRadius: '5px', width: '75%', align: 'center', marginLeft: '12.5%', marginRight: '12.5%', backgroundColor: "#DCDCDC"}}>
            <h1 style={{fontFamily: "'Epilogue', sans-serif", marginTop: 10}}>SIGN UP</h1>
                <hr/>
                <div class="form-group">
                    <input value={inputPassword} type="firstName" class="form-control" id="exampleInputPassword1" placeholder="first name" onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div class="form-group">
                    <input value={inputPassword} type="lasName" class="form-control" id="exampleInputPassword1" placeholder="last name" onChange={e => setLastName(e.target.value)}/>
                </div>
                <div class="form-group">
                    <input value={inputEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email" onChange={e => setEmail(e.target.value)}/> 
                </div>
                <div class="form-group">
                    <input value={inputPassword} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <Button color="danger" style={{ marginBottom: 10 }}>Sign Up</Button>
            </form>

                        {/* <form onSubmit={handleSubmit} style={{ border: '2px solid #ccc', borderRadius: '5px', width: '50%', align: 'center', marginLeft: '25%', marginRight: '25%', backgroundColor: "#DCDCDC" }}>
                            <h1 style={{ fontFamily: "'Epilogue', sans-serif", marginTop: 10 }}>SIGN UP</h1>
                            <hr />
                            <input value={firstName} placeholder="first name" onChange={e => setFirstName(e.target.value)} />
                            <br></br>
                            <input value={lastName} placeholder="last name" onChange={e => setLastName(e.target.value)} style={{ marginTop: 10 }} />
                            <br></br>
                            <input value={email} placeholder="email" onChange={e => setEmail(e.target.value)} style={{ marginTop: 10 }} />
                            <br></br>
                            <input value={password} placeholder="password" onChange={e => setPassword(e.target.value)} style={{ margin: 10 }} />
                            <br></br>
                            <Button color="danger" style={{ marginBottom: 10 }}>Sign Up</Button>
                        </form> */}

                    </div>

    )
}

export const handleLogoutUser = (e) => {
                        e.preventDefault()
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