import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Changelog from "./components/Changelog";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Projects />
            <Changelog id="changelogSection" />
            <Footer />
        </div>
    );
}

export default App;
