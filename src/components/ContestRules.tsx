import React from 'react';

const ContestRules: React.FC = () => {
    return (
        <section className="contest-rules" id="contest-rules">
            <div className="contest-rules__container">
                <div className="contest-rules__header">
                    <h2 className="contest-rules__title">📋 Thể Lệ Cuộc Thi</h2>
                    <p className="contest-rules__subtitle">
                        Lịch thi và cấu trúc các vòng đấu
                    </p>
                </div>

                <div className="contest-rules__table-wrapper">
                    <table className="contest-rules__table">
                        <thead>
                            <tr>
                                <th className="contest-rules__th">Ngày thi</th>
                                <th className="contest-rules__th contest-rules__th--date">14/2</th>
                                <th className="contest-rules__th contest-rules__th--date">15/2</th>
                                <th className="contest-rules__th contest-rules__th--date contest-rules__th--break" colSpan={2}>16/2 - 17/2</th>
                                <th className="contest-rules__th contest-rules__th--date">18/2</th>
                                <th className="contest-rules__th contest-rules__th--date">19/2</th>
                                <th className="contest-rules__th contest-rules__th--date">20/2</th>
                                <th className="contest-rules__th contest-rules__th--date">21/2</th>
                                <th className="contest-rules__th contest-rules__th--date contest-rules__th--final">22/2 - 28/2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Row 1: Vòng thi */}
                            <tr className="contest-rules__row">
                                <td className="contest-rules__td contest-rules__td--label">Vòng thi</td>
                                <td className="contest-rules__td">
                                    <span className="contest-rules__round">Vòng 1</span>
                                </td>
                                <td className="contest-rules__td">
                                    <span className="contest-rules__round">Vòng 2</span>
                                </td>
                                <td className="contest-rules__td contest-rules__td--break" colSpan={2} rowSpan={3}>
                                    <div className="contest-rules__break-cell">
                                        <span className="contest-rules__break-icon">🧧</span>
                                        <span className="contest-rules__break-label">Nghỉ Tết</span>
                                        <span className="contest-rules__break-sub">Nguyên Đán</span>
                                    </div>
                                </td>
                                <td className="contest-rules__td">
                                    <span className="contest-rules__round">Vòng 3</span>
                                </td>
                                <td className="contest-rules__td">
                                    <span className="contest-rules__round">Vòng 4</span>
                                </td>
                                <td className="contest-rules__td">
                                    <span className="contest-rules__round">Vòng 5</span>
                                </td>
                                <td className="contest-rules__td">
                                    <span className="contest-rules__round">Vòng 6</span>
                                </td>
                                <td className="contest-rules__td contest-rules__td--final" rowSpan={3}>
                                    <div className="contest-rules__final-cell">
                                        <span className="contest-rules__final-icon">🏆</span>
                                        <span className="contest-rules__final-label">Tổng kết</span>
                                        <span className="contest-rules__final-sub">& Trao giải</span>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 2: Số dạng bài */}
                            <tr className="contest-rules__row">
                                <td className="contest-rules__td contest-rules__td--label">Số dạng bài</td>
                                <td className="contest-rules__td">
                                    <span className="contest-rules__number">6</span>
                                </td>
                                <td className="contest-rules__td">
                                    <span className="contest-rules__number">6</span>
                                </td>
                                {/* Merged cell from row 1 */}
                                <td className="contest-rules__td">
                                    <span className="contest-rules__number">6</span>
                                </td>
                                <td className="contest-rules__td">
                                    <span className="contest-rules__number">6</span>
                                </td>
                                <td className="contest-rules__td">
                                    <span className="contest-rules__number">6</span>
                                </td>
                                <td className="contest-rules__td">
                                    <span className="contest-rules__number">6</span>
                                </td>
                                {/* Merged cell from row 1 */}
                            </tr>

                            {/* Row 3: Tổng số câu hỏi */}
                            <tr className="contest-rules__row">
                                <td className="contest-rules__td contest-rules__td--label">Tổng số câu hỏi</td>
                                <td className="contest-rules__td">
                                    <span className="contest-rules__questions">30</span>
                                </td>
                                <td className="contest-rules__td">
                                    <span className="contest-rules__questions">30</span>
                                </td>
                                {/* Merged cell from row 1 */}
                                <td className="contest-rules__td">
                                    <span className="contest-rules__questions">30</span>
                                </td>
                                <td className="contest-rules__td">
                                    <span className="contest-rules__questions">30</span>
                                </td>
                                <td className="contest-rules__td">
                                    <span className="contest-rules__questions">30</span>
                                </td>
                                <td className="contest-rules__td">
                                    <span className="contest-rules__questions">30</span>
                                </td>
                                {/* Merged cell from row 1 */}
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="contest-rules__footer">
                    <div className="contest-rules__legend">
                        <div className="contest-rules__legend-item">
                            <span className="contest-rules__legend-dot contest-rules__legend-dot--active"></span>
                            <span>Vòng thi chính thức</span>
                        </div>
                        <div className="contest-rules__legend-item">
                            <span className="contest-rules__legend-dot contest-rules__legend-dot--break"></span>
                            <span>Nghỉ Tết Nguyên Đán</span>
                        </div>
                        <div className="contest-rules__legend-item">
                            <span className="contest-rules__legend-dot contest-rules__legend-dot--final"></span>
                            <span>Tổng kết & Trao giải</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContestRules;
