import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar__container">
                {/* Logo */}
                <div className="navbar__logo">
                    <img src="/assets/Logoclevai.png" alt="Clevai" className="navbar__logo-img" />
                </div>

                {/* Desktop Menu */}
                <ul className="navbar__menu">
                    <li><a href="#home" className="navbar__link">Trang chủ</a></li>
                    <li><a href="#leaderboard" className="navbar__link">Bảng xếp hạng</a></li>
                    <li><a href="#games" className="navbar__link">Trò chơi</a></li>
                    <li><a href="#news" className="navbar__link">Tin tức</a></li>
                </ul>

                {/* CTA Button */}
                <a href="#play" className="navbar__cta">
                    🎮 Chơi ngay
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    className="navbar__toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="navbar__mobile-menu">
                    <a href="#home" className="navbar__mobile-link">Trang chủ</a>
                    <a href="#leaderboard" className="navbar__mobile-link">Bảng xếp hạng</a>
                    <a href="#games" className="navbar__mobile-link">Trò chơi</a>
                    <a href="#news" className="navbar__mobile-link">Tin tức</a>
                    <a href="#play" className="navbar__mobile-cta">🎮 Chơi ngay</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
