export interface Student {
    rank: number;
    name: string;
    grade: string;
    course: string;
    score: number;
    avatar: string;
}

// Top 20 học sinh với tên thật Việt Nam
export const topStudents: Student[] = [
    { rank: 1, name: 'Nguyễn Gia Bảo', grade: 'Lớp 10', course: 'MathVIP', score: 9850, avatar: '👦' },
    { rank: 2, name: 'Trịnh Kim Chi', grade: 'Lớp 11', course: 'MathTutor', score: 9720, avatar: '👧' },
    { rank: 3, name: 'Lê Hoàng Minh', grade: 'Lớp 9', course: 'MathDuo', score: 9680, avatar: '👦' },
    { rank: 4, name: 'Phạm Thu Hà', grade: 'Lớp 12', course: 'MathExam10', score: 9550, avatar: '👧' },
    { rank: 5, name: 'Trần Đức Anh', grade: 'Lớp 8', course: 'EngTutor', score: 9480, avatar: '👦' },
    { rank: 6, name: 'Võ Ngọc Ánh', grade: 'Lớp 10', course: 'MathVIP', score: 9350, avatar: '👧' },
    { rank: 7, name: 'Hoàng Văn Khoa', grade: 'Lớp 7', course: 'EarlySpeak', score: 9280, avatar: '👦' },
    { rank: 8, name: 'Đặng Thị Mai', grade: 'Lớp 11', course: 'EngDuo', score: 9150, avatar: '👧' },
    { rank: 9, name: 'Bùi Quang Huy', grade: 'Lớp 9', course: 'MathTutor', score: 9080, avatar: '👦' },
    { rank: 10, name: 'Ngô Thanh Tâm', grade: 'Lớp 6', course: 'PhilSpeak', score: 8950, avatar: '👧' },
    { rank: 11, name: 'Đinh Công Danh', grade: 'Lớp 12', course: 'MathExam10', score: 8820, avatar: '👦' },
    { rank: 12, name: 'Phan Thị Linh', grade: 'Lớp 8', course: 'EngExam10', score: 8750, avatar: '👧' },
    { rank: 13, name: 'Vũ Minh Quân', grade: 'Lớp 10', course: 'MathDuo', score: 8680, avatar: '👦' },
    { rank: 14, name: 'Lý Thị Hồng', grade: 'Lớp 7', course: 'EarlySpeak', score: 8550, avatar: '👧' },
    { rank: 15, name: 'Trương Văn Phúc', grade: 'Lớp 11', course: 'MathVIP', score: 8480, avatar: '👦' },
    { rank: 16, name: 'Mai Thị Ngọc', grade: 'Lớp 9', course: 'EngTutor', score: 8350, avatar: '👧' },
    { rank: 17, name: 'Đỗ Hải Long', grade: 'Lớp 6', course: 'PhilSpeak', score: 8280, avatar: '👦' },
    { rank: 18, name: 'Lương Thị Yến', grade: 'Lớp 12', course: 'MathExam10', score: 8150, avatar: '👧' },
    { rank: 19, name: 'Cao Văn Thắng', grade: 'Lớp 8', course: 'EngDuo', score: 8080, avatar: '👦' },
    { rank: 20, name: 'Hà Phương Thảo', grade: 'Lớp 10', course: 'MathTutor', score: 7950, avatar: '👧' },
];

// Helper function to get top 3
export const getTop3 = () => topStudents.slice(0, 3);
