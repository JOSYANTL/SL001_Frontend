import React from 'react';
import './App.css';               // src/Pages/Home.jsx
// import '../scss/styles.scss'
import logo from '../assets/icons/react.svg';     // src/assets/icons/react.svg
import {Outlet} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Outlet />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App/App.jsx</code> and save to reload.
                </p>
                {/*<Button />*/}
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