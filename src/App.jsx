import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Changelog from "./components/Changelog";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Projects />
            <Changelog />
        </div>
    );
}

export default App;
