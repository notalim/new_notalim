import React from 'react';
import PieChartSection from '../components/PieChartSection/PieChartSection';
import Projects from '../components/ProjectsSection/Projects';
import Changelog from '../components/ChangelogSection/Changelog';

const Home = () => {
    const scrollToSection = (sectionId) => {
        // console.log(`Attempting to scroll to ${sectionId}`);
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                console.log(`Scrolled to ${sectionId}`);
            } else {
                console.log(`Element with id ${sectionId} not found`);
            }
        }, 100);
    };

    return (
        <div>
            <PieChartSection scrollToSection={scrollToSection} />
            <Projects />
            <Changelog />
        </div>
    );
};

export default Home;