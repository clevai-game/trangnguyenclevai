import React from 'react';

interface Feature {
    icon: string;
    title: string;
    description: string;
    color: string;
}

const features: Feature[] = [
    {
        icon: '🎯',
        title: 'Quiz đa dạng',
        description: 'Hàng ngàn câu hỏi từ dễ đến khó, bao gồm Toán, Tiếng Việt, Khoa học và nhiều môn khác.',
        color: '#FF6B6B',
    },
    {
        icon: '🎮',
        title: 'Gameplay thú vị',
        description: 'Học mà chơi, chơi mà học! Giao diện game hấp dẫn, hiệu ứng sinh động.',
        color: '#4ECDC4',
    },
    {
        icon: '🏆',
        title: 'Bảng xếp hạng',
        description: 'Cạnh tranh với bạn bè toàn quốc, chinh phục ngôi vị Trạng Nguyên, Bảng Nhãn, Thám Hoa.',
        color: '#FFD93D',
    },
    {
        icon: '🎁',
        title: 'Phần thưởng hấp dẫn',
        description: 'Tích lũy hạt dẻ, đổi quà tặng, nhận học bổng và nhiều phần thưởng giá trị.',
        color: '#6BCB77',
    },
    {
        icon: '📊',
        title: 'Theo dõi tiến độ',
        description: 'Phụ huynh và giáo viên dễ dàng theo dõi kết quả học tập của con em.',
        color: '#9B59B6',
    },
    {
        icon: '🌐',
        title: 'Học mọi lúc mọi nơi',
        description: 'Truy cập trên điện thoại, máy tính bảng, laptop. Học bất cứ đâu, bất cứ lúc nào.',
        color: '#3498DB',
    },
];

const Features: React.FC = () => {
    return (
        <section className="features" id="games">
            <div className="features__container">
                <h2 className="features__title">🎮 Tính năng nổi bật</h2>
                <p className="features__subtitle">
                    Khám phá những trải nghiệm học tập tuyệt vời cùng Trạng Nguyên Clevai
                </p>

                <div className="features__grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="features__card"
                            style={{ '--accent-color': feature.color } as React.CSSProperties}
                        >
                            <div className="features__card-icon">{feature.icon}</div>
                            <h3 className="features__card-title">{feature.title}</h3>
                            <p className="features__card-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
