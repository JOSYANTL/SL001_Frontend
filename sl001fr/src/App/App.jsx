import logo from '../assets/icons/logo.svg';
import './App.css';
import Home from "../Pages/Home";
// import router from "./router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Home />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <Button />
      </header>
    </div>
  );
}
function Button(){
    return <button>Click me</button>
}
export default function SLApp(){
    return <App />
}
