import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./elements/Header/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./pages/home/Home";

function App({history}) {
  return (
    <div className="App">
        <Router>
            <Header/>
            <div id="content">
                <Home/>
            </div>
        </Router>
    </div>
  );
}

export default App;
