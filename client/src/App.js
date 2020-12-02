import './App.css';
// import Portfolio from './components/PortfolioContainer';
// import Jumbotron from './components/Jumbotron';
// import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useState} from 'react';
import Login from "./components/Login/Login"

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)

  const toggle = () => {
    setisLoggedIn(!isLoggedIn);
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          
          {/* <Route exact path="/" component={Login}> */}

          {/* </Route> */}
          <Route exact path="/">
            {isLoggedIn ? <Home toggle={toggle} /> : <Login toggle = {toggle} />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
