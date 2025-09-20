// Core User Types
export interface User {
    id: string;
    email: string;
    name: string;
    avatar: string;
    role: 'student' | 'instructor' | 'admin';
    bio?: string;
    joinDate: string;
    enrolledCourses: string[];
    completedCourses: string[];
    certificates: Certificate[];
    socialLinks?: SocialLinks;
    expertise?: string[];
    totalStudents?: number; // For instructors
    totalCourses?: number; // For instructors
}

export interface SocialLinks {
    linkedin?: string;
    twitter?: string;
    website?: string;
    github?: string;
}

// Certificate Types
export interface Certificate {
    id: string;
    courseId: string;
    courseName: string;
    studentId: string;
    studentName: string;
    issueDate: string;
    certificateUrl: string;
    verificationCode: string;
}

// Course Types
export interface Course {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    instructor: string;
    instructorName: string;
    instructorAvatar: string;
    category: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    price: number;
    originalPrice?: number;
    discount?: number;
    duration: string;
    thumbnail: string;
    previewVideo?: string;
    rating: number;
    reviewsCount: number;
    studentsCount: number;
    modules: Module[];
    requirements: string[];
    whatYouWillLearn: string[];
    tags: string[];
    language: string;
    lastUpdated: string;
    createdAt: string;
    updatedAt: string;
    isPublished: boolean;
    isFeatured: boolean;
    difficulty: number; // 1-5
    totalLessons: number;
    totalQuizzes: number;
    hasSubtitles: boolean;
    hasCertificate: boolean;
}

// Course Content Types
export interface Module {
    id: string;
    title: string;
    description: string;
    duration: string;
    lessons: Lesson[];
    isLocked: boolean;
    order: number;
}

export interface Lesson {
    id: string;
    title: string;
    type: 'video' | 'text' | 'quiz' | 'assignment';
    duration: string;
    content: string;
    videoUrl?: string;
    thumbnailUrl?: string;
    resources?: Resource[];
    quiz?: Quiz;
    assignment?: Assignment;
    isCompleted: boolean;
    isLocked: boolean;
    order: number;
    transcript?: string;
    subtitles?: Subtitle[];
}

export interface Resource {
    id: string;
    title: string;
    type: 'pdf' | 'doc' | 'zip' | 'link' | 'image';
    url: string;
    size?: string;
    description?: string;
}

export interface Subtitle {
    start: number;
    end: number;
    text: string;
}

// Quiz Types
export interface Quiz {
    id: string;
    title: string;
    description: string;
    questions: Question[];
    timeLimit?: number; // in minutes
    passingScore: number;
    maxAttempts: number;
    showCorrectAnswers: boolean;
}

export interface Question {
    id: string;
    type: 'multiple-choice' | 'true-false' | 'short-answer';
    question: string;
    options?: string[];
    correctAnswer: string | string[];
    explanation?: string;
    points: number;
}

// Assignment Types
export interface Assignment {
    id: string;
    title: string;
    description: string;
    instructions: string;
    dueDate?: string;
    maxPoints: number;
    submissionFormat: 'text' | 'file' | 'link';
    resources?: Resource[];
}

// Progress Types
export interface Progress {
    userId: string;
    courseId: string;
    moduleId: string;
    lessonId: string;
    completed: boolean;
    completedAt?: string;
    timeSpent: number; // in seconds
    lastAccessedAt: string;
    score?: number;
}

export interface CourseProgress {
    courseId: string;
    userId: string;
    enrolledAt: string;
    lastAccessedAt: string;
    overallProgress: number; // percentage
    completedLessons: string[];
    completedModules: string[];
    totalTimeSpent: number; // in seconds
    currentLesson?: string;
    isCompleted: boolean;
    completedAt?: string;
    certificateEarned: boolean;
    quizScores: { [quizId: string]: number };
}

// Category Types
export interface Category {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
    courseCount: number;
    isPopular: boolean;
    subcategories: Subcategory[];
}

export interface Subcategory {
    id: string;
    name: string;
    courseCount: number;
}

// Review Types
export interface Review {
    id: string;
    courseId: string;
    userId: string;
    userName: string;
    userAvatar: string;
    rating: number;
    comment: string;
    createdAt: string;
    isVerified: boolean;
    helpfulCount: number;
}

// Enrollment Types
export interface Enrollment {
    id: string;
    userId: string;
    courseId: string;
    enrolledAt: string;
    price: number;
    paymentMethod: string;
    status: 'active' | 'completed' | 'expired' | 'refunded';
    expiresAt?: string;
    progress: CourseProgress;
}

// Analytics Types
export interface Analytics {
    totalUsers: number;
    totalCourses: number;
    totalRevenue: number;
    totalEnrollments: number;
    monthlyUsers: number;
    monthlyRevenue: number;
    popularCourses: PopularCourse[];
    revenueByMonth: RevenueData[];
    userGrowth: UserGrowthData[];
    categoryStats: CategoryStats[];
}

export interface PopularCourse {
    courseId: string;
    title: string;
    enrollments: number;
    revenue: number;
    rating: number;
}

export interface RevenueData {
    month: string;
    revenue: number;
    enrollments: number;
}

export interface UserGrowthData {
    month: string;
    users: number;
    growth: number;
}

export interface CategoryStats {
    category: string;
    courses: number;
    enrollments: number;
    revenue: number;
}

// Notification Types
export interface Notification {
    id: string;
    userId: string;
    type: 'course' | 'system' | 'achievement' | 'reminder';
    title: string;
    message: string;
    isRead: boolean;
    createdAt: string;
    actionUrl?: string;
}

// Search Types
export interface SearchFilters {
    category?: string;
    level?: string;
    price?: 'free' | 'paid' | 'all';
    rating?: number;
    duration?: string;
    language?: string;
    sortBy?: 'newest' | 'oldest' | 'rating' | 'price-low' | 'price-high' | 'popular';
}

export interface SearchResult {
    courses: Course[];
    totalCount: number;
    facets: SearchFacets;
}

export interface SearchFacets {
    categories: { name: string; count: number }[];
    levels: { name: string; count: number }[];
    priceRanges: { name: string; count: number }[];
    ratings: { rating: number; count: number }[];
}

// Auth Types
export interface AuthUser {
    id: string;
    email: string;
    name: string;
    role: 'student' | 'instructor' | 'admin';
    avatar: string;
    token: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterData {
    name: string;
    email: string;
    password: string;
    role: 'student' | 'instructor';
}

// Cart Types (for demo purposes)
export interface CartItem {
    courseId: string;
    course: Course;
    addedAt: string;
}

export interface Cart {
    items: CartItem[];
    total: number;
    discountAmount: number;
    finalTotal: number;
}

// Learning Interface Types
export interface LearningState {
    currentCourse: Course | null;
    currentModule: Module | null;
    currentLesson: Lesson | null;
    progress: CourseProgress | null;
    isPlaying: boolean;
    playbackRate: number;
    volume: number;
    currentTime: number;
    duration: number;
    notes: Note[];
    bookmarks: Bookmark[];
}

export interface Note {
    id: string;
    lessonId: string;
    timestamp: number;
    content: string;
    createdAt: string;
}

export interface Bookmark {
    id: string;
    lessonId: string;
    timestamp: number;
    title: string;
    createdAt: string;
}

// Dashboard Stats Types
export interface StudentStats {
    totalCourses: number;
    completedCourses: number;
    inProgressCourses: number;
    totalHoursLearned: number;
    certificatesEarned: number;
    currentStreak: number;
    averageRating: number;
    recentActivity: RecentActivity[];
}

export interface InstructorStats {
    totalCourses: number;
    totalStudents: number;
    totalRevenue: number;
    averageRating: number;
    totalReviews: number;
    monthlyEarnings: number;
    recentEnrollments: RecentEnrollment[];
    topCourses: PopularCourse[];
}

export interface AdminStats {
    totalUsers: number;
    totalCourses: number;
    totalRevenue: number;
    totalEnrollments: number;
    newUsersThisMonth: number;
    newCoursesThisMonth: number;
    pendingCourses: number;
    reportedContent: number;
}

export interface RecentActivity {
    id: string;
    type: 'lesson_completed' | 'course_started' | 'certificate_earned' | 'quiz_passed';
    description: string;
    timestamp: string;
    courseId?: string;
    courseName?: string;
}

export interface RecentEnrollment {
    id: string;
    studentName: string;
    courseName: string;
    enrolledAt: string;
    amount: number;
}

// API Response Types
export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
    error?: string;
}

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}