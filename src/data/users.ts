import { User } from '@/types';

export const users: User[] = [
    // Admin Users
    {
        id: 'admin-1',
        email: 'admin@edtech.demo',
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332e234?w=150&h=150&fit=crop&crop=face',
        role: 'admin',
        bio: 'Platform Administrator with 10+ years experience in educational technology.',
        joinDate: '2023-01-15',
        enrolledCourses: [],
        completedCourses: [],
        certificates: [],
        socialLinks: {
            linkedin: 'https://linkedin.com/in/sarahjohnson',
            twitter: 'https://twitter.com/sarahjohnson'
        }
    },

    // Instructor Users
    {
        id: 'instructor-1',
        email: 'instructor@edtech.demo',
        name: 'Dr. Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        role: 'instructor',
        bio: 'Full-stack developer and educator with 15+ years of experience. Former Google engineer.',
        joinDate: '2023-02-20',
        enrolledCourses: [],
        completedCourses: [],
        certificates: [],
        socialLinks: {
            linkedin: 'https://linkedin.com/in/michaelchen',
            twitter: 'https://twitter.com/michaelchen',
            website: 'https://michaelchen.dev',
            github: 'https://github.com/michaelchen'
        },
        expertise: ['JavaScript', 'React', 'Node.js', 'Python', 'System Design'],
        totalStudents: 15420,
        totalCourses: 8
    },
    {
        id: 'instructor-2',
        email: 'emma.davis@edtech.demo',
        name: 'Emma Davis',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        role: 'instructor',
        bio: 'UX/UI Designer and design thinking expert. 12+ years at top design agencies.',
        joinDate: '2023-03-10',
        enrolledCourses: [],
        completedCourses: [],
        certificates: [],
        socialLinks: {
            linkedin: 'https://linkedin.com/in/emmadavis',
            website: 'https://emmadavis.design'
        },
        expertise: ['UI/UX Design', 'Figma', 'Design Systems', 'User Research'],
        totalStudents: 8950,
        totalCourses: 5
    },
    {
        id: 'instructor-3',
        email: 'david.wilson@edtech.demo',
        name: 'David Wilson',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        role: 'instructor',
        bio: 'Data Scientist and ML Engineer. PhD in Computer Science from Stanford.',
        joinDate: '2023-01-30',
        enrolledCourses: [],
        completedCourses: [],
        certificates: [],
        socialLinks: {
            linkedin: 'https://linkedin.com/in/davidwilson',
            github: 'https://github.com/davidwilson'
        },
        expertise: ['Machine Learning', 'Python', 'TensorFlow', 'Data Analysis'],
        totalStudents: 12300,
        totalCourses: 6
    },
    {
        id: 'instructor-4',
        email: 'lisa.rodriguez@edtech.demo',
        name: 'Lisa Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
        role: 'instructor',
        bio: 'Mobile App Developer specializing in iOS and React Native development.',
        joinDate: '2023-02-15',
        enrolledCourses: [],
        completedCourses: [],
        certificates: [],
        socialLinks: {
            linkedin: 'https://linkedin.com/in/lisarodriguez',
            github: 'https://github.com/lisarodriguez'
        },
        expertise: ['iOS Development', 'Swift', 'React Native', 'Mobile UX'],
        totalStudents: 6780,
        totalCourses: 4
    },
    {
        id: 'instructor-5',
        email: 'james.thompson@edtech.demo',
        name: 'James Thompson',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
        role: 'instructor',
        bio: 'Cloud Architect and DevOps expert. AWS Certified Solutions Architect.',
        joinDate: '2023-03-05',
        enrolledCourses: [],
        completedCourses: [],
        certificates: [],
        socialLinks: {
            linkedin: 'https://linkedin.com/in/jamesthompson',
            website: 'https://cloudarchitect.dev'
        },
        expertise: ['AWS', 'Docker', 'Kubernetes', 'DevOps', 'Terraform'],
        totalStudents: 9850,
        totalCourses: 7
    },

    // Student Users
    {
        id: 'student-1',
        email: 'student@edtech.demo',
        name: 'Alex Johnson',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face',
        role: 'student',
        bio: 'Computer Science student passionate about web development.',
        joinDate: '2023-04-10',
        enrolledCourses: ['course-1', 'course-3', 'course-5'],
        completedCourses: ['course-2'],
        certificates: [
            {
                id: 'cert-1',
                courseId: 'course-2',
                courseName: 'Advanced JavaScript Concepts',
                studentId: 'student-1',
                studentName: 'Alex Johnson',
                issueDate: '2023-09-15',
                certificateUrl: '/certificates/cert-1.pdf',
                verificationCode: 'EDU-2023-AJ-001'
            }
        ]
    },
    {
        id: 'student-2',
        email: 'maria.garcia@example.com',
        name: 'Maria Garcia',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332e234?w=150&h=150&fit=crop&crop=face',
        role: 'student',
        bio: 'Marketing professional transitioning to UX design.',
        joinDate: '2023-05-20',
        enrolledCourses: ['course-4', 'course-6'],
        completedCourses: [],
        certificates: []
    },
    {
        id: 'student-3',
        email: 'robert.brown@example.com',
        name: 'Robert Brown',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        role: 'student',
        bio: 'Data analyst looking to advance into machine learning.',
        joinDate: '2023-06-05',
        enrolledCourses: ['course-7', 'course-8'],
        completedCourses: ['course-9'],
        certificates: []
    },
    {
        id: 'student-4',
        email: 'jennifer.lee@example.com',
        name: 'Jennifer Lee',
        avatar: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop&crop=face',
        role: 'student',
        bio: 'Graphic designer exploring mobile app development.',
        joinDate: '2023-07-12',
        enrolledCourses: ['course-10', 'course-11'],
        completedCourses: [],
        certificates: []
    },
    {
        id: 'student-5',
        email: 'thomas.anderson@example.com',
        name: 'Thomas Anderson',
        avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
        role: 'student',
        bio: 'Recent graduate starting career in cybersecurity.',
        joinDate: '2023-08-18',
        enrolledCourses: ['course-12', 'course-13'],
        completedCourses: [],
        certificates: []
    },
    {
        id: 'student-6',
        email: 'sarah.kim@example.com',
        name: 'Sarah Kim',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
        role: 'student',
        bio: 'Business owner learning digital marketing strategies.',
        joinDate: '2023-09-01',
        enrolledCourses: ['course-14', 'course-15'],
        completedCourses: [],
        certificates: []
    }
];

// Helper function to get user by email
export const getUserByEmail = (email: string): User | undefined => {
    return users.find(user => user.email === email);
};

// Helper function to get user by id
export const getUserById = (id: string): User | undefined => {
    return users.find(user => user.id === id);
};

// Helper function to get instructors
export const getInstructors = (): User[] => {
    return users.filter(user => user.role === 'instructor');
};

// Helper function to get students
export const getStudents = (): User[] => {
    return users.filter(user => user.role === 'student');
};