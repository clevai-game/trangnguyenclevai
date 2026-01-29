import React from 'react';
import './styles/style-D-3dcartoon.css';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Statistics from './components/Statistics';
import Leaderboard from './components/Leaderboard';
import Features from './components/Features';
import News from './components/News';
import Footer from './components/Footer';
import FallingPetals from './components/FallingPetals';

const AppCartoon: React.FC = () => {
    return (
        <div className="app">
            <FallingPetals />
            <Navbar />
            <main>
                <HeroBanner />
                <Statistics />
                <Leaderboard />
                <Features />
                <News />
            </main>
            <Footer />
        </div>
    );
};

export default AppCartoon;
