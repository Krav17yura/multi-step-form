import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import ProfileForm from "./components/sign-up-form";

const App = () => {
    return (
        <Router>
            <div className="app"><ProfileForm/></div>
        </Router>
    );
}

export default App;
