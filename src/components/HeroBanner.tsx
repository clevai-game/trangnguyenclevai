import React from 'react';

const HeroBanner: React.FC = () => {
    return (
        <section className="hero" id="home">
            <div className="hero__content">
                <div className="hero__text">
                    <h1 className="hero__title">
                        <span className="hero__title-line1">Ngựa Vàng</span>
                        <span className="hero__title-line2">Tranh Tài Tri Thức</span>
                    </h1>
                    <p className="hero__subtitle">
                        Chinh phục tri thức - Giành ngôi Quán quân!
                    </p>
                    <p className="hero__description">
                        Tham gia cuộc thi online lớn nhất mùa Tết Ất Tỵ 2025.
                        Giải đố, tích hạt dẻ, leo bảng xếp hạng và nhận phần thưởng hấp dẫn!
                    </p>
                    <div className="hero__buttons">
                        <a href="#play" className="hero__btn hero__btn--primary">
                            VÀO THI
                        </a>
                        <a href="#leaderboard" className="hero__btn hero__btn--secondary">
                            🏆 Xem bảng xếp hạng
                        </a>
                    </div>
                </div>

                <div className="hero__visual">
                    {/* Mascot placeholder - sẽ thay bằng ảnh thật */}
                    <div className="hero__mascot">
                        <span className="hero__mascot-emoji">🧒</span>
                        <div className="hero__mascot-badge">
                            <span>👑</span>
                            <span>Ngựa Vàng</span>
                        </div>
                    </div>

                    {/* Floating decorations */}
                    <div className="hero__decoration hero__decoration--1">🌸</div>
                    <div className="hero__decoration hero__decoration--2">🏮</div>
                    <div className="hero__decoration hero__decoration--3">🎋</div>
                    <div className="hero__decoration hero__decoration--4">🧧</div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero__scroll">
                <span>Cuộn xuống</span>
                <div className="hero__scroll-arrow">↓</div>
            </div>
        </section>
    );
};

export default HeroBanner;
