import './App.css';
import Home from './components/pages/Home';
import FavoritesPage from "./components/pages/FavoritesPage"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import Login from "./components/Login/Login"

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(false)

  const toggle = (loginInfo) => {
    setisLoggedIn(loginInfo);
  }

  return (

    <Router>
      <div className="App">
        <Switch>

          <Route exact path="/">
            {isLoggedIn ? <Home toggle={toggle} isLoggedIn={isLoggedIn} /> : <Login toggle={toggle} />}
          </Route>

          <Route exact path="/home">
            {isLoggedIn ? <Home toggle={toggle} isLoggedIn={isLoggedIn} /> : <Login toggle={toggle} />}
          </Route>
          <Route exact path="/" component={Login} />

          <Route exact path="/favorites">
            {isLoggedIn ? <FavoritesPage toggle={toggle} isLoggedIn={isLoggedIn} /> : <Login toggle={toggle} />}
          </Route>
          <Route exact path="/favorites" component={FavoritesPage} />

        </Switch>
      </div>
    </Router>

  );
  
};

export default App;
