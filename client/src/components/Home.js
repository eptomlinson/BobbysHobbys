import React from "react";
import axios from "axios";



export default function Home () {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [inputPassword, setInputPassword] = React.useState("")
    const [inputEmail, setInputEmail] = React.useState("")
    const [user, setUser] = React.useState(null)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("hello")
        axios.post("/api/users/signup", {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,

        })

        .then(function(res){
            console.log(res)
        })
    }

            const handleLoginUser = (e) => {
                e.preventDefault()
                axios.post("/api/users/login", {
                    email: inputEmail,
                    password: inputPassword,
                })
                .then(function(res){
                    console.log(res)
                    console.log("logged in user")
                    window.location.reload()
                })
                .catch(error => {console.log(error)})
            }
            
            React.useEffect(()=> {
                axios.get("/api/users/info")
                .then(function(res){
                console.log(res.data)
                setUser(res.data)
                })
            }, [])

    return( 
        <div>
            {(user) && 
            <p>Welcome {user.first_name}!!</p> 
            }
            <form onSubmit = {handleSubmit}> 
                <input value={firstName} placeholder= "first name" onChange = {e => setFirstName(e.target.value)}/>
                <br></br>
                
            
                <input value= {lastName} placeholder= "last name" onChange = {e => setLastName(e.target.value)}/>
                <br></br>
                <input value= {email} placeholder= "email" onChange = {e => setEmail(e.target.value)}/>
                <br></br>
                <input value= {password} placeholder= "password" onChange = {e => setPassword(e.target.value)}/>
                <br></br>
                <button>sign up</button>
            </form>
            <br></br>
            <form onSubmit = {handleLoginUser}>
                <input value= {inputEmail} placeholder= "input email"onChange = {e => setInputEmail(e.target.value)}/>
                <input value= {inputPassword} placeholder= "input password" onChange = {e => setInputPassword(e.target.value)}/>
                <button>Login</button>
            </form>
        </div>
    )
}
