import React from 'react';
import { getTop3 } from '../data/students';

const Leaderboard: React.FC = () => {
    const top3 = getTop3();

    // Thứ tự hiển thị: Hạng 2 (trái) - Hạng 1 (giữa) - Hạng 3 (phải)
    const displayOrder = [top3[1], top3[0], top3[2]];
    const orderClasses = ['second', 'first', 'third'];
    const orderTitles = ['Ngựa Bạc', 'Ngựa Vàng', 'Ngựa Đồng'];
    const orderRanks = [2, 1, 3];

    return (
        <section className="leaderboard" id="leaderboard">
            <div className="leaderboard__container">
                <h2 className="leaderboard__title">🏆 Ngựa Vàng Tranh Tài Tri Thức</h2>
                <p className="leaderboard__subtitle">
                    Top 3 học sinh xuất sắc nhất
                </p>

                <div className="podium">
                    {displayOrder.map((player, index) => (
                        <div
                            key={player.rank}
                            className={`podium__item podium__item--${orderClasses[index]}`}
                        >
                            <div className="podium__avatar">{player.avatar}</div>
                            <span className="podium__name">{player.name}</span>
                            <span className="podium__school">{player.grade}</span>
                            <span className="podium__score">
                                🌰 {player.score.toLocaleString('vi-VN')}
                            </span>
                            <span className="podium__title">{orderTitles[index]}</span>
                            <div className="podium__stand">
                                <span className="podium__rank">{orderRanks[index]}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="leaderboard__cta">
                    <a href="#top20" className="leaderboard__btn">Xem đầy đủ bảng xếp hạng</a>
                </div>
            </div>
        </section>
    );
};

export default Leaderboard;
