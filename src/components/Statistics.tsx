import React, { useEffect, useState } from 'react';

interface StatItem {
    icon: string;
    value: number;
    label: string;
    suffix?: string;
}

const stats: StatItem[] = [
    { icon: '👨‍🎓', value: 15000, label: 'Học sinh tham gia', suffix: '+' },
    { icon: '📝', value: 50000, label: 'Bài thi hoàn thành', suffix: '+' },
    { icon: '🌰', value: 2500000, label: 'Hạt dẻ đã thu thập', suffix: '' },
    { icon: '🏆', value: 100, label: 'Trạng Nguyên xuất sắc', suffix: '' },
];

const Statistics: React.FC = () => {
    const [animated, setAnimated] = useState(false);
    const [counts, setCounts] = useState(stats.map(() => 0));

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !animated) {
                    setAnimated(true);
                    animateCounters();
                }
            },
            { threshold: 0.3 }
        );

        const section = document.getElementById('statistics');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, [animated]);

    const animateCounters = () => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
            step++;
            setCounts(stats.map((stat) => Math.floor((stat.value / steps) * step)));
            if (step >= steps) {
                setCounts(stats.map((stat) => stat.value));
                clearInterval(timer);
            }
        }, interval);
    };

    const formatNumber = (num: number): string => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
        return num.toLocaleString('vi-VN');
    };

    return (
        <section className="statistics" id="statistics">
            <div className="statistics__container">
                <h2 className="statistics__title">🎯 Thành tích ấn tượng</h2>
                <div className="statistics__grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="statistics__item">
                            <div className="statistics__icon">{stat.icon}</div>
                            <div className="statistics__value">
                                {formatNumber(counts[index])}{stat.suffix}
                            </div>
                            <div className="statistics__label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
