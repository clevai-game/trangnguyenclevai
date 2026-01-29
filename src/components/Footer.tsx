import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Main Footer */}
                <div className="footer__main">
                    {/* Brand */}
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <span>🏮</span>
                            <span>Trạng Nguyên Clevai</span>
                        </div>
                        <p className="footer__tagline">
                            Chinh phục tri thức - Giành ngôi Trạng Nguyên!
                        </p>
                        <div className="footer__social">
                            <a href="#" className="footer__social-link" aria-label="Facebook">📘</a>
                            <a href="#" className="footer__social-link" aria-label="YouTube">📺</a>
                            <a href="#" className="footer__social-link" aria-label="TikTok">🎵</a>
                            <a href="#" className="footer__social-link" aria-label="Zalo">💬</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer__links">
                        <h4 className="footer__links-title">Truy cập nhanh</h4>
                        <ul className="footer__links-list">
                            <li><a href="#">Trang chủ</a></li>
                            <li><a href="#">Bảng xếp hạng</a></li>
                            <li><a href="#">Trò chơi</a></li>
                            <li><a href="#">Phần thưởng</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="footer__links">
                        <h4 className="footer__links-title">Hỗ trợ</h4>
                        <ul className="footer__links-list">
                            <li><a href="#">Hướng dẫn chơi</a></li>
                            <li><a href="#">Câu hỏi thường gặp</a></li>
                            <li><a href="#">Liên hệ</a></li>
                            <li><a href="#">Điều khoản sử dụng</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer__contact">
                        <h4 className="footer__links-title">Liên hệ</h4>
                        <ul className="footer__contact-list">
                            <li>📧 support@clevai.edu.vn</li>
                            <li>📞 1900 xxxx xx</li>
                            <li>📍 Hà Nội, Việt Nam</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="footer__bottom">
                    <p>© 2025 Clevai Education. All rights reserved.</p>
                    <p>Made with ❤️ for Vietnamese students</p>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="footer__decoration footer__decoration--1">🏮</div>
            <div className="footer__decoration footer__decoration--2">🌸</div>
        </footer>
    );
};

export default Footer;
