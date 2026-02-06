import React from 'react';
import './styles/style-E-original.css';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ContestRules from './components/ContestRules';
import Leaderboard from './components/Leaderboard';
import LeaderboardTop20 from './components/LeaderboardTop20';
// import Features from './components/Features';
import PrizeStructure from './components/PrizeStructure';
// import News from './components/News';
import Footer from './components/Footer';
// import FallingPetals from './components/FallingPetals';

const AppOriginal: React.FC = () => {
    return (
        <div className="app">
            {/* <FallingPetals /> */}
            <Navbar />
            <main>
                <HeroBanner />
                <ContestRules />
                <Leaderboard />
                <LeaderboardTop20 />
                <PrizeStructure />
                {/* <Features /> */}
                {/* <News /> */}
            </main>
            <Footer />
        </div>
    );
};

export default AppOriginal;

