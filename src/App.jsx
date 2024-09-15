import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Library from "./pages/Library/Library";

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/lib" element={<Library />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
