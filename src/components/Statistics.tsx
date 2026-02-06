import React from 'react';

const Statistics: React.FC = () => {
    const stats = [
        {
            icon: "👨‍🎓",
            value: "30K",
            label: "Học sinh tham gia"
        },
        {
            icon: "✍️",
            value: "6",
            label: "Vòng thi - 180 Câu hỏi"
        },
        {
            icon: "🏆",
            value: "54",
            label: "Giải thưởng"
        },
        {
            icon: "🌰",
            value: "4 Triệu",
            label: "Hạt dẻ thưởng"
        }
    ];

    return (
        <section className="statistics">
            <div className="statistics__container">
                <div className="statistics__grid">
                    {stats.map((item, index) => (
                        <div key={index} className="statistics__item">
                            <div className="statistics__icon">{item.icon}</div>
                            <div className="statistics__value">{item.value}</div>
                            <div className="statistics__label">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
