import React from 'react';

interface NewsItem {
    id: number;
    image: string;
    category: string;
    date: string;
    title: string;
    excerpt: string;
}

const newsItems: NewsItem[] = [
    {
        id: 1,
        image: '🎆',
        category: 'Sự kiện',
        date: '28/01/2025',
        title: 'Khai mạc Trạng Nguyên Clevai mùa Tết Ất Tỵ',
        excerpt: 'Chương trình học tập kết hợp giải trí lớn nhất dành cho học sinh Clevai chính thức khởi động!',
    },
    {
        id: 2,
        image: '🏆',
        category: 'Thông báo',
        date: '25/01/2025',
        title: 'Top 10 Trạng Nguyên tuần đầu tiên',
        excerpt: 'Chúc mừng 10 bạn học sinh xuất sắc nhất tuần đầu tiên với thành tích ấn tượng.',
    },
    {
        id: 3,
        image: '🎁',
        category: 'Phần thưởng',
        date: '20/01/2025',
        title: 'Cập nhật kho phần thưởng mới',
        excerpt: 'Hàng loạt phần thưởng hấp dẫn vừa được bổ sung. Nhanh tay đổi hạt dẻ lấy quà!',
    },
];

const News: React.FC = () => {
    return (
        <section className="news" id="news">
            <div className="news__container">
                <h2 className="news__title">📰 Tin tức & Sự kiện</h2>
                <p className="news__subtitle">
                    Cập nhật những thông tin mới nhất từ Trạng Nguyên Clevai
                </p>

                <div className="news__grid">
                    {newsItems.map((item) => (
                        <article key={item.id} className="news__card">
                            <div className="news__card-image">
                                <span>{item.image}</span>
                            </div>
                            <div className="news__card-content">
                                <div className="news__card-meta">
                                    <span className="news__card-category">{item.category}</span>
                                    <span className="news__card-date">{item.date}</span>
                                </div>
                                <h3 className="news__card-title">{item.title}</h3>
                                <p className="news__card-excerpt">{item.excerpt}</p>
                                <a href="#" className="news__card-link">
                                    Đọc thêm →
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="news__more">
                    <a href="#" className="news__more-btn">Xem tất cả tin tức</a>
                </div>
            </div>
        </section>
    );
};

export default News;
