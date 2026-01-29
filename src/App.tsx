import React from 'react';
import './styles/style-B-glass.css';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Statistics from './components/Statistics';
import Leaderboard from './components/Leaderboard';
import Features from './components/Features';
import News from './components/News';
import Footer from './components/Footer';
import FallingPetals from './components/FallingPetals';

const App: React.FC = () => {
    return (
        <div className="app">
            {/* Falling Peach Blossoms */}
            <FallingPetals />

            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main>
                <HeroBanner />
                <Statistics />
                <Leaderboard />
                <Features />
                <News />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default App;
