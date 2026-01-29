# 🏮 Trạng Nguyên Clevai - Landing Page

Landing page cho chiến dịch **Trạng Nguyên Clevai** - Tết Ất Tỵ 2025.

## 🎨 Hai phiên bản thiết kế

| Phiên bản | File | Phong cách |
|-----------|------|------------|
| **B** | `App-B-Glass.tsx` | Glassmorphism (Kính mờ, hiện đại, sang trọng) |
| **D** | `App-D-Cartoon.tsx` | 3D Cartoon (Pixar style, vui nhộn, game-like) |

## 🔄 Chuyển đổi giữa 2 bản

Mở file `src/main.tsx` và đổi dòng import:

```tsx
// BẢN B: GLASSMORPHISM
import App from './App-B-Glass';

// BẢN D: 3D CARTOON
// import App from './App-D-Cartoon';
```

## 🚀 Cách chạy

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build
```

## 📁 Cấu trúc dự án

```
src/
├── main.tsx                  # Entry point
├── App-B-Glass.tsx           # App bản Glassmorphism
├── App-D-Cartoon.tsx         # App bản 3D Cartoon
│
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── HeroBanner.tsx        # Hero section + CTA
│   ├── Statistics.tsx        # Số liệu animated
│   ├── Leaderboard.tsx       # Top 3 podium
│   ├── Features.tsx          # Tính năng nổi bật
│   ├── News.tsx              # Tin tức & Sự kiện
│   ├── Footer.tsx            # Footer
│   └── FallingPetals.tsx     # Hoa đào rơi animation
│
└── styles/
    ├── style-B-glass.css     # CSS Glassmorphism
    └── style-D-3dcartoon.css # CSS 3D Cartoon
```

## 🎯 Tính năng

- ✅ **Responsive** - Mobile, Tablet, Desktop
- ✅ **Hoa đào rơi** - Animation CSS thuần
- ✅ **Animated counters** - Số liệu chạy khi scroll
- ✅ **Podium Top 3** - Trạng Nguyên, Bảng Nhãn, Thám Hoa
- ✅ **Vietnamese fonts** - Hỗ trợ tiếng Việt đầy đủ
- ✅ **Tết theme** - Màu sắc đỏ, vàng, cam rực rỡ

## 🛠️ Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **CSS thuần** (không dùng framework CSS)
- **Google Fonts** (Poppins, Fredoka, Nunito)

## 📅 Thông tin dự án

- **Tạo ngày:** 28/01/2025
- **Tác giả:** Clevai Team
- **Mục đích:** Landing page chiến dịch Tết 2025

---

Made with ❤️ by Clevai Education
