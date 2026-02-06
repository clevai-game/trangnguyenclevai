import React, { useState } from 'react';
import { topStudents } from '../data/students';

const LeaderboardTop20: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const displayedStudents = isExpanded ? topStudents : topStudents.slice(0, 10);

    const getMedalEmoji = (rank: number): string => {
        switch (rank) {
            case 1: return '🥇';
            case 2: return '🥈';
            case 3: return '🥉';
            default: return '';
        }
    };

    const getRankClass = (rank: number): string => {
        if (rank === 1) return 'top20__row--gold';
        if (rank === 2) return 'top20__row--silver';
        if (rank === 3) return 'top20__row--bronze';
        if (rank <= 10) return 'top20__row--top10';
        return '';
    };

    return (
        <section className="top20" id="top20">
            <div className="top20__container">
                <div className="top20__header">
                    <h2 className="top20__title">🏅 Ngựa Vàng Tranh Tài Tri Thức</h2>
                    <p className="top20__subtitle">
                        Bảng xếp hạng Top 20 học sinh xuất sắc nhất
                    </p>
                </div>

                <div className="top20__table-wrapper">
                    <table className="top20__table">
                        <thead>
                            <tr>
                                <th className="top20__th top20__th--rank">Hạng</th>
                                <th className="top20__th top20__th--name">Họ và Tên</th>
                                <th className="top20__th top20__th--grade">Lớp</th>
                                <th className="top20__th top20__th--school">Khóa học tham gia</th>
                                <th className="top20__th top20__th--score">Điểm</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedStudents.map((student) => (
                                <tr key={student.rank} className={`top20__row ${getRankClass(student.rank)}`}>
                                    <td className="top20__td top20__td--rank">
                                        <span className="top20__rank-number">{student.rank}</span>
                                        {getMedalEmoji(student.rank) && (
                                            <span className="top20__medal">{getMedalEmoji(student.rank)}</span>
                                        )}
                                    </td>
                                    <td className="top20__td top20__td--name">
                                        <span className="top20__avatar">{student.avatar}</span>
                                        <span className="top20__student-name">{student.name}</span>
                                    </td>
                                    <td className="top20__td top20__td--grade">
                                        <span className="top20__grade-badge">{student.grade}</span>
                                    </td>
                                    <td className="top20__td top20__td--school">{student.course}</td>
                                    <td className="top20__td top20__td--score">
                                        <span className="top20__score">🌰 {student.score.toLocaleString('vi-VN')}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Toggle button */}
                <div className="top20__toggle">
                    <button
                        className={`top20__toggle-btn ${isExpanded ? 'top20__toggle-btn--expanded' : ''}`}
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <span className="top20__toggle-text">
                            {isExpanded ? 'Thu gọn' : 'Xem thêm Top 11-20'}
                        </span>
                        <span className="top20__toggle-arrow">
                            {isExpanded ? '▲' : '▼'}
                        </span>
                    </button>
                </div>

                <div className="top20__footer">
                    <p className="top20__note">
                        📊 Cập nhật lúc 09:00 ngày 06/02/2025 • Điểm được tính từ tổng điểm các vòng thi
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LeaderboardTop20;
