import { Analytics } from '@/types';

export const analytics: Analytics = {
    totalUsers: 45683,
    totalCourses: 756,
    totalRevenue: 2847650,
    totalEnrollments: 156430,
    monthlyUsers: 8456,
    monthlyRevenue: 347890,
    popularCourses: [
        {
            courseId: 'course-4',
            title: 'UI/UX Design Masterclass',
            enrollments: 18520,
            revenue: 129640,
            rating: 4.9
        },
        {
            courseId: 'course-7',
            title: 'AWS Cloud Practitioner Complete Course',
            enrollments: 16780,
            revenue: 125850,
            rating: 4.6
        },
        {
            courseId: 'course-1',
            title: 'Complete React Developer Course',
            enrollments: 15420,
            revenue: 138780,
            rating: 4.8
        },
        {
            courseId: 'course-5',
            title: 'Machine Learning with Python',
            enrollments: 14230,
            revenue: 156530,
            rating: 4.8
        },
        {
            courseId: 'course-3',
            title: 'Node.js Backend Development',
            enrollments: 12340,
            revenue: 117230,
            rating: 4.6
        }
    ],
    revenueByMonth: [
        { month: 'Jan 2023', revenue: 145000, enrollments: 8500 },
        { month: 'Feb 2023', revenue: 167000, enrollments: 9200 },
        { month: 'Mar 2023', revenue: 189000, enrollments: 10100 },
        { month: 'Apr 2023', revenue: 203000, enrollments: 11500 },
        { month: 'May 2023', revenue: 225000, enrollments: 12800 },
        { month: 'Jun 2023', revenue: 245000, enrollments: 13900 },
        { month: 'Jul 2023', revenue: 267000, enrollments: 15200 },
        { month: 'Aug 2023', revenue: 289000, enrollments: 16700 },
        { month: 'Sep 2023', revenue: 347890, enrollments: 18450 }
    ],
    userGrowth: [
        { month: 'Jan 2023', users: 28500, growth: 12 },
        { month: 'Feb 2023', users: 31200, growth: 9.5 },
        { month: 'Mar 2023', users: 34100, growth: 9.3 },
        { month: 'Apr 2023', users: 37500, growth: 10.0 },
        { month: 'May 2023', users: 40800, growth: 8.8 },
        { month: 'Jun 2023', users: 43200, growth: 5.9 },
        { month: 'Jul 2023', users: 45100, growth: 4.4 },
        { month: 'Aug 2023', users: 47300, growth: 4.9 },
        { month: 'Sep 2023', users: 45683, growth: -3.4 }
    ],
    categoryStats: [
        {
            category: 'Web Development',
            courses: 152,
            enrollments: 45670,
            revenue: 856420
        },
        {
            category: 'Design',
            courses: 124,
            enrollments: 38920,
            revenue: 678340
        },
        {
            category: 'Mobile Development',
            courses: 89,
            enrollments: 28450,
            revenue: 524780
        },
        {
            category: 'Data Science',
            courses: 76,
            enrollments: 22340,
            revenue: 623890
        },
        {
            category: 'Business',
            courses: 98,
            enrollments: 19230,
            revenue: 345670
        },
        {
            category: 'Cloud Computing',
            courses: 67,
            enrollments: 18560,
            revenue: 456780
        },
        {
            category: 'Photography',
            courses: 54,
            enrollments: 12890,
            revenue: 234560
        },
        {
            category: 'Cybersecurity',
            courses: 43,
            enrollments: 9870,
            revenue: 178940
        }
    ]
};

// Monthly performance data for detailed analytics
export const monthlyPerformance = [
    { month: 'Jan', courses: 12, students: 2890, revenue: 45600, rating: 4.3 },
    { month: 'Feb', students: 3200, revenue: 52800, rating: 4.4 },
    { month: 'Mar', courses: 8, students: 3780, revenue: 61200, rating: 4.5 },
    { month: 'Apr', courses: 15, students: 4200, revenue: 68900, rating: 4.6 },
    { month: 'May', courses: 11, students: 4650, revenue: 74500, rating: 4.5 },
    { month: 'Jun', courses: 9, students: 5100, revenue: 82300, rating: 4.7 },
    { month: 'Jul', courses: 13, students: 5480, revenue: 89700, rating: 4.6 },
    { month: 'Aug', courses: 7, students: 5890, revenue: 96400, rating: 4.8 },
    { month: 'Sep', courses: 10, students: 6234, revenue: 103200, rating: 4.7 }
];

// Top performing instructors data
export const topInstructors = [
    {
        id: 'instructor-1',
        name: 'Dr. Michael Chen',
        totalStudents: 36705,
        totalRevenue: 394650,
        averageRating: 4.7,
        totalCourses: 8,
        specialization: 'Web Development'
    },
    {
        id: 'instructor-2',
        name: 'Emma Davis',
        totalStudents: 38462,
        totalRevenue: 343290,
        averageRating: 4.8,
        totalCourses: 6,
        specialization: 'Design & Marketing'
    },
    {
        id: 'instructor-3',
        name: 'David Wilson',
        totalStudents: 22340,
        totalRevenue: 623890,
        averageRating: 4.8,
        totalCourses: 5,
        specialization: 'Data Science'
    },
    {
        id: 'instructor-4',
        name: 'Lisa Rodriguez',
        totalStudents: 15656,
        totalRevenue: 287430,
        averageRating: 4.6,
        totalCourses: 4,
        specialization: 'Mobile Development'
    },
    {
        id: 'instructor-5',
        name: 'James Thompson',
        totalStudents: 25336,
        totalRevenue: 398520,
        averageRating: 4.5,
        totalCourses: 7,
        specialization: 'Cloud & Security'
    }
];

// Platform statistics for admin dashboard
export const platformStats = {
    dailyActiveUsers: 12450,
    weeklyActiveUsers: 34560,
    monthlyActiveUsers: 45683,
    courseCompletionRate: 73.2,
    averageRating: 4.6,
    totalVideoHours: 1456,
    totalQuizzes: 234,
    totalCertificates: 28945,
    supportTickets: 156,
    pendingCourseApprovals: 23,
    reportedContent: 8,
    refundRequests: 12
};