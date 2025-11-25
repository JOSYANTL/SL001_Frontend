import React from 'react';
import './App.css';
import Home from '../Pages/Home';                 // src/Pages/Home.jsx
import logo from '../assets/icons/react.svg';     // src/assets/icons/react.svg

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Home />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App/App.jsx</code> and save to reload.
                </p>
                <Button />
            </header>
        </div>
    );
}

function Button() {
    return <button>Click me</button>;
}

export default function SLApp() {
    return <App />;
}