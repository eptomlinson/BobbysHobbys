import logo from './logo.svg';
import './App.css';
import Portfolio from './components/PortfolioContainer';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Jumbotron/>
      <Portfolio/>
    </div>
  );
}

export default App;
