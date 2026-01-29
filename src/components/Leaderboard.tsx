import React from 'react';

interface Player {
    id: number;
    name: string;
    score: number;
    avatar: string;
    school?: string;
}

const topPlayers: Player[] = [
    { id: 1, name: 'Nguyễn Văn An', score: 9850, avatar: '👦', school: 'Tiểu học Đoàn Thị Điểm' },
    { id: 2, name: 'Trần Thị Bích', score: 9200, avatar: '👧', school: 'Tiểu học Vinschool' },
    { id: 3, name: 'Lê Minh Châu', score: 8750, avatar: '👦', school: 'Tiểu học FPT' },
];



const Leaderboard: React.FC = () => {
    const displayOrder = [topPlayers[1], topPlayers[0], topPlayers[2]];
    const orderClasses = ['second', 'first', 'third'];
    const orderTitles = ['Bảng Nhãn', 'Trạng Nguyên', 'Thám Hoa'];
    const orderRanks = [2, 1, 3];

    return (
        <section className="leaderboard" id="leaderboard">
            <div className="leaderboard__container">
                <h2 className="leaderboard__title">🏆 Bảng Vàng Danh Dự</h2>
                <p className="leaderboard__subtitle">
                    Top 3 học sinh xuất sắc nhất mùa Tết Ất Tỵ 2025
                </p>

                <div className="podium">
                    {displayOrder.map((player, index) => (
                        <div
                            key={player.id}
                            className={`podium__item podium__item--${orderClasses[index]}`}
                        >
                            <div className="podium__avatar">{player.avatar}</div>
                            <span className="podium__name">{player.name}</span>
                            {player.school && (
                                <span className="podium__school">{player.school}</span>
                            )}
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
                    <a href="#" className="leaderboard__btn">Xem đầy đủ bảng xếp hạng</a>
                </div>
            </div>
        </section>
    );
};

export default Leaderboard;
