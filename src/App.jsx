import React from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/ProjectsSection/Projects";
import Changelog from "./components/ChangelogSection/Changelog";
import Footer from "./components/Footer";
import PieChartSection from "./components/PieChartSection/PieChartSection";

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <Navbar />
                <PieChartSection />
                <Projects />
                <Changelog id="changelogSection" />
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
