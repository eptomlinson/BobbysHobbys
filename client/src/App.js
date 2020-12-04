import './App.css';

// import Portfolio from './components/PortfolioContainer';
// import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import FavoritesPage from "./components/pages/FavoritesPage"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import Login from "./components/Login/Login"

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)


  const toggle = (loginInfo) => {
    console.log(loginInfo);
    setisLoggedIn(loginInfo);
  }
  console.log(isLoggedIn);
  return (
    <Router>
      <div className="App">
        <Switch>

          {/* </Route> */}
          <Route exact path="/">
            {isLoggedIn ? <Home toggle={toggle} isLoggedIn={isLoggedIn} /> : <Login toggle={toggle} />}
          </Route>

          <Route exact path="/favorites">
          {/* <Navbar toggle={toggle} isLoggedIn={isLoggedIn} /> */}
          {true ? <FavoritesPage toggle={toggle} isLoggedIn={true} /> : <Login toggle={toggle} />}
            {/* <FavoritesPage>

            </FavoritesPage> */}

            {/* {isLoggedIn ?
              <>
                <Navbar toggle={toggle} isLoggedIn={isLoggedIn} />
                <FavoritesPage toggle={toggle} isLoggedIn={isLoggedIn} />
              </>
              : <Login toggle={toggle} />} */}
          </Route>


        </Switch>
      </div>
    </Router>
  );
}
export default App;
