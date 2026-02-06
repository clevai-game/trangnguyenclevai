import React from 'react';

const PrizeStructure: React.FC = () => {
    return (
        <section className="prizes" id="prizes">
            <div className="prizes__container">
                <div className="prizes__header">
                    <h2 className="prizes__title">Cơ Cấu Giải Thưởng</h2>
                    <p className="prizes__subtitle">
                        Phần thưởng hấp dẫn dành cho các học sinh xuất sắc
                    </p>
                </div>

                <div className="prizes__tables">
                    {/* Bảng 1: Số lượng giải theo khối */}
                    <div className="prizes__table-section">
                        {/* Mascot ngựa - đặt trước bảng */}
                        <div className="prizes__mascots">
                            <div className="prizes__mascot prizes__mascot--silver">
                                <img src="/assets/horse-silver.png" alt="Ngựa Bạc" className="prizes__mascot-img" />
                                <span className="prizes__mascot-label">Ngựa Bạc</span>
                            </div>
                            <div className="prizes__mascot prizes__mascot--gold">
                                <img src="/assets/horse-gold.png" alt="Ngựa Vàng" className="prizes__mascot-img" />
                                <span className="prizes__mascot-label">Ngựa Vàng</span>
                            </div>
                            <div className="prizes__mascot prizes__mascot--bronze">
                                <img src="/assets/horse-bronze.png" alt="Ngựa Đồng" className="prizes__mascot-img" />
                                <span className="prizes__mascot-label">Ngựa Đồng</span>
                            </div>
                        </div>

                        <h3 className="prizes__table-title">Số lượng giải theo khối</h3>
                        <div className="prizes__table-wrapper">
                            <table className="prizes__table">
                                <thead>
                                    <tr>
                                        <th className="prizes__th prizes__th--label">Khối</th>
                                        <th className="prizes__th prizes__th--gold">Ngựa Vàng</th>
                                        <th className="prizes__th prizes__th--silver">Ngựa Bạc</th>
                                        <th className="prizes__th prizes__th--bronze">Ngựa Đồng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="prizes__row">
                                        <td className="prizes__td prizes__td--label">Tiểu học</td>
                                        <td className="prizes__td prizes__td--gold">
                                            <span className="prizes__count prizes__count--gold">1</span>
                                        </td>
                                        <td className="prizes__td prizes__td--silver">
                                            <span className="prizes__count prizes__count--silver">3</span>
                                        </td>
                                        <td className="prizes__td prizes__td--bronze">
                                            <span className="prizes__count prizes__count--bronze">5</span>
                                        </td>
                                    </tr>
                                    <tr className="prizes__row">
                                        <td className="prizes__td prizes__td--label">Trung học cơ sở</td>
                                        <td className="prizes__td prizes__td--gold">
                                            <span className="prizes__count prizes__count--gold">1</span>
                                        </td>
                                        <td className="prizes__td prizes__td--silver">
                                            <span className="prizes__count prizes__count--silver">3</span>
                                        </td>
                                        <td className="prizes__td prizes__td--bronze">
                                            <span className="prizes__count prizes__count--bronze">5</span>
                                        </td>
                                    </tr>
                                    <tr className="prizes__row">
                                        <td className="prizes__td prizes__td--label">Trung học phổ thông</td>
                                        <td className="prizes__td prizes__td--gold">
                                            <span className="prizes__count prizes__count--gold">1</span>
                                        </td>
                                        <td className="prizes__td prizes__td--silver">
                                            <span className="prizes__count prizes__count--silver">3</span>
                                        </td>
                                        <td className="prizes__td prizes__td--bronze">
                                            <span className="prizes__count prizes__count--bronze">5</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Bảng 2: Thưởng hạt dẻ - dạng card */}
                    <div className="prizes__rewards-section">
                        <h3 className="prizes__table-title">Thưởng Hạt Dẻ</h3>
                        <div className="prizes__cards">
                            {/* Card Ngựa Vàng */}
                            <div className="prizes__card prizes__card--gold">
                                <div className="prizes__card-mascot">
                                    <img src="/assets/horse-gold.png" alt="Ngựa Vàng" />
                                </div>
                                <div className="prizes__card-content">
                                    <span className="prizes__card-title">Ngựa Vàng</span>
                                    <span className="prizes__card-value">150,000</span>
                                    <span className="prizes__card-unit">🌰 Hạt dẻ</span>
                                </div>
                                <div className="prizes__card-glow"></div>
                            </div>

                            {/* Card Ngựa Bạc */}
                            <div className="prizes__card prizes__card--silver">
                                <div className="prizes__card-mascot">
                                    <img src="/assets/horse-silver.png" alt="Ngựa Bạc" />
                                </div>
                                <div className="prizes__card-content">
                                    <span className="prizes__card-title">Ngựa Bạc</span>
                                    <span className="prizes__card-value">75,000</span>
                                    <span className="prizes__card-unit">🌰 Hạt dẻ</span>
                                </div>
                            </div>

                            {/* Card Ngựa Đồng */}
                            <div className="prizes__card prizes__card--bronze">
                                <div className="prizes__card-mascot">
                                    <img src="/assets/horse-bronze.png" alt="Ngựa Đồng" />
                                </div>
                                <div className="prizes__card-content">
                                    <span className="prizes__card-title">Ngựa Đồng</span>
                                    <span className="prizes__card-value">45,000</span>
                                    <span className="prizes__card-unit">🌰 Hạt dẻ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="prizes__note">
                    <p>💡 <strong>Lưu ý:</strong> Hạt dẻ có thể đổi thành các phần quà hấp dẫn trong hệ thống Clevai</p>
                </div>
            </div>

        </section>
    );
};

export default PrizeStructure;
