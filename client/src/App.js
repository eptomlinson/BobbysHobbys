import './App.css';
import Portfolio from './components/PortfolioContainer';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import FavoritesPage from "./components/pages/FavoritesPage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login}>

          </Route>
          <Route exact path="/home">
            <Navbar />
            <Jumbotron />
            <Portfolio />
          </Route>

          <Route exact path="/favorites">
            <Navbar />
      <FavoritesPage />
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
