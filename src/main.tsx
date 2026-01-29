import React from 'react';
import ReactDOM from 'react-dom/client';

// ============================================
// CHỌN BẢN THIẾT KẾ Ở ĐÂY
// Uncomment bản bạn muốn xem, comment bản còn lại
// ============================================

// BẢN B: GLASSMORPHISM (Kính mờ, hiện đại)
// import App from './App-B-Glass';

// BẢN D: 3D CARTOON (Pixar style, vui nhộn)
// import App from './App-D-Cartoon';

// BẢN E: TRẠNG NGUYÊN ORIGINAL (Clean Vector, Authentic)
import App from './App-E-Original';

// BẢN F: OCTO STYLE (Jelly Glassy, Cute, Glossy)
// import App from './App-F-Octo';

// ============================================

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
