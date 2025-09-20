import { Course } from '@/types';

export const courses: Course[] = [
    {
        id: 'course-1',
        title: 'Complete React Developer Course',
        description: 'Master React.js from fundamentals to advanced concepts. Build real-world applications with hooks, context, and modern React patterns. Learn testing, performance optimization, and deployment strategies.',
        shortDescription: 'Master React.js from fundamentals to advanced concepts with real-world projects.',
        instructor: 'instructor-1',
        instructorName: 'Dr. Michael Chen',
        instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        category: 'web-development',
        level: 'intermediate',
        price: 89.99,
        originalPrice: 149.99,
        discount: 40,
        duration: '42h 30m',
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
        previewVideo: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        rating: 4.8,
        reviewsCount: 1245,
        studentsCount: 15420,
        modules: [
            {
                id: 'module-1-1',
                title: 'React Fundamentals',
                description: 'Learn the core concepts of React including components, JSX, and props.',
                duration: '8h 15m',
                order: 1,
                isLocked: false,
                lessons: [
                    {
                        id: 'lesson-1-1-1',
                        title: 'Introduction to React',
                        type: 'video',
                        duration: '12:30',
                        content: 'Welcome to the React course! In this lesson, we\'ll explore what React is and why it\'s so popular.',
                        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                        thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=150&fit=crop',
                        isCompleted: false,
                        isLocked: false,
                        order: 1,
                        resources: [
                            {
                                id: 'resource-1',
                                title: 'React Official Documentation',
                                type: 'link',
                                url: 'https://reactjs.org/docs',
                                description: 'Official React documentation'
                            }
                        ]
                    },
                    {
                        id: 'lesson-1-1-2',
                        title: 'Setting up Development Environment',
                        type: 'video',
                        duration: '15:45',
                        content: 'Learn how to set up your development environment for React development.',
                        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                        isCompleted: false,
                        isLocked: false,
                        order: 2
                    }
                ]
            }
        ],
        requirements: [
            'Basic knowledge of HTML, CSS, and JavaScript',
            'Understanding of ES6+ features',
            'Familiarity with npm and Node.js'
        ],
        whatYouWillLearn: [
            'Build production-ready React applications',
            'Master React hooks and context API',
            'Implement state management with Redux',
            'Write tests for React components',
            'Deploy React applications to production'
        ],
        tags: ['React', 'JavaScript', 'Frontend', 'Web Development'],
        language: 'English',
        lastUpdated: '2023-09-15',
        createdAt: '2023-01-15',
        updatedAt: '2023-09-15',
        isPublished: true,
        isFeatured: true,
        difficulty: 3,
        totalLessons: 65,
        totalQuizzes: 8,
        hasSubtitles: true,
        hasCertificate: true
    },
    {
        id: 'course-2',
        title: 'Advanced JavaScript Concepts',
        description: 'Deep dive into advanced JavaScript concepts including closures, prototypes, async programming, and modern ES6+ features. Perfect for developers looking to master JavaScript.',
        shortDescription: 'Master advanced JavaScript concepts and modern ES6+ features.',
        instructor: 'instructor-1',
        instructorName: 'Dr. Michael Chen',
        instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        category: 'web-development',
        level: 'advanced',
        price: 79.99,
        originalPrice: 129.99,
        discount: 38,
        duration: '28h 45m',
        thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop',
        rating: 4.7,
        reviewsCount: 892,
        studentsCount: 8945,
        modules: [],
        requirements: [
            'Solid understanding of JavaScript fundamentals',
            'Experience with DOM manipulation',
            'Basic understanding of asynchronous programming'
        ],
        whatYouWillLearn: [
            'Master closures and scope',
            'Understand prototypal inheritance',
            'Work with async/await and Promises',
            'Implement design patterns in JavaScript',
            'Optimize JavaScript performance'
        ],
        tags: ['JavaScript', 'Advanced', 'ES6+', 'Programming'],
        language: 'English',
        lastUpdated: '2023-08-22',
        createdAt: '2023-02-10',
        updatedAt: '2023-08-22',
        isPublished: true,
        isFeatured: true,
        difficulty: 4,
        totalLessons: 48,
        totalQuizzes: 6,
        hasSubtitles: true,
        hasCertificate: true
    },
    {
        id: 'course-3',
        title: 'Node.js Backend Development',
        description: 'Learn to build scalable backend applications with Node.js, Express, and MongoDB. Cover authentication, APIs, security, and deployment.',
        shortDescription: 'Build scalable backend applications with Node.js and Express.',
        instructor: 'instructor-1',
        instructorName: 'Dr. Michael Chen',
        instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        category: 'web-development',
        level: 'intermediate',
        price: 94.99,
        originalPrice: 159.99,
        discount: 41,
        duration: '38h 20m',
        thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
        rating: 4.6,
        reviewsCount: 1156,
        studentsCount: 12340,
        modules: [],
        requirements: [
            'Basic JavaScript knowledge',
            'Understanding of web fundamentals',
            'Familiarity with command line'
        ],
        whatYouWillLearn: [
            'Build RESTful APIs with Express.js',
            'Work with MongoDB and Mongoose',
            'Implement authentication and authorization',
            'Handle file uploads and processing',
            'Deploy Node.js applications'
        ],
        tags: ['Node.js', 'Backend', 'Express', 'MongoDB', 'API'],
        language: 'English',
        lastUpdated: '2023-09-10',
        createdAt: '2023-03-05',
        updatedAt: '2023-09-10',
        isPublished: true,
        isFeatured: false,
        difficulty: 3,
        totalLessons: 72,
        totalQuizzes: 10,
        hasSubtitles: true,
        hasCertificate: true
    },
    {
        id: 'course-4',
        title: 'UI/UX Design Masterclass',
        description: 'Complete guide to UI/UX design from wireframing to prototyping. Learn design thinking, user research, and how to create beautiful, functional interfaces.',
        shortDescription: 'Complete guide to UI/UX design from wireframing to prototyping.',
        instructor: 'instructor-2',
        instructorName: 'Emma Davis',
        instructorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        category: 'design',
        level: 'beginner',
        price: 69.99,
        originalPrice: 119.99,
        discount: 42,
        duration: '32h 15m',
        thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
        rating: 4.9,
        reviewsCount: 2156,
        studentsCount: 18520,
        modules: [],
        requirements: [
            'No prior design experience required',
            'Basic computer skills',
            'Creative mindset'
        ],
        whatYouWillLearn: [
            'Understand design thinking principles',
            'Conduct user research and testing',
            'Create wireframes and prototypes',
            'Master design tools like Figma',
            'Build a professional design portfolio'
        ],
        tags: ['UI/UX', 'Design', 'Figma', 'User Research', 'Prototyping'],
        language: 'English',
        lastUpdated: '2023-09-05',
        createdAt: '2023-02-20',
        updatedAt: '2023-09-05',
        isPublished: true,
        isFeatured: true,
        difficulty: 2,
        totalLessons: 58,
        totalQuizzes: 7,
        hasSubtitles: true,
        hasCertificate: true
    },
    {
        id: 'course-5',
        title: 'Machine Learning with Python',
        description: 'Comprehensive introduction to machine learning using Python. Cover supervised and unsupervised learning, neural networks, and real-world applications.',
        shortDescription: 'Learn machine learning with Python from basics to advanced applications.',
        instructor: 'instructor-3',
        instructorName: 'David Wilson',
        instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        category: 'data-science',
        level: 'intermediate',
        price: 109.99,
        originalPrice: 179.99,
        discount: 39,
        duration: '45h 30m',
        thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
        rating: 4.8,
        reviewsCount: 1876,
        studentsCount: 14230,
        modules: [],
        requirements: [
            'Basic Python programming knowledge',
            'Understanding of mathematics and statistics',
            'Familiarity with Jupyter notebooks'
        ],
        whatYouWillLearn: [
            'Implement machine learning algorithms',
            'Work with popular ML libraries (scikit-learn, pandas)',
            'Build and evaluate predictive models',
            'Handle real-world datasets',
            'Deploy ML models to production'
        ],
        tags: ['Machine Learning', 'Python', 'Data Science', 'AI', 'scikit-learn'],
        language: 'English',
        lastUpdated: '2023-09-12',
        createdAt: '2023-01-30',
        updatedAt: '2023-09-12',
        isPublished: true,
        isFeatured: true,
        difficulty: 4,
        totalLessons: 89,
        totalQuizzes: 12,
        hasSubtitles: true,
        hasCertificate: true
    },
    {
        id: 'course-6',
        title: 'iOS App Development with Swift',
        description: 'Learn to build native iOS applications using Swift and Xcode. Cover UI design, data persistence, networking, and App Store deployment.',
        shortDescription: 'Build native iOS apps with Swift and Xcode from scratch.',
        instructor: 'instructor-4',
        instructorName: 'Lisa Rodriguez',
        instructorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
        category: 'mobile-development',
        level: 'beginner',
        price: 84.99,
        originalPrice: 139.99,
        discount: 39,
        duration: '36h 45m',
        thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
        rating: 4.7,
        reviewsCount: 1324,
        studentsCount: 9876,
        modules: [],
        requirements: [
            'Mac computer with Xcode',
            'Basic programming concepts',
            'No prior iOS development experience required'
        ],
        whatYouWillLearn: [
            'Master Swift programming language',
            'Build iOS apps with UIKit and SwiftUI',
            'Implement Core Data for data persistence',
            'Integrate APIs and web services',
            'Publish apps to the App Store'
        ],
        tags: ['iOS', 'Swift', 'Mobile Development', 'Xcode', 'SwiftUI'],
        language: 'English',
        lastUpdated: '2023-08-28',
        createdAt: '2023-03-15',
        updatedAt: '2023-08-28',
        isPublished: true,
        isFeatured: false,
        difficulty: 2,
        totalLessons: 67,
        totalQuizzes: 9,
        hasSubtitles: true,
        hasCertificate: true
    },
    {
        id: 'course-7',
        title: 'AWS Cloud Practitioner Complete Course',
        description: 'Comprehensive AWS training covering core services, security, pricing, and architecture. Prepare for the AWS Certified Cloud Practitioner exam.',
        shortDescription: 'Master AWS fundamentals and prepare for Cloud Practitioner certification.',
        instructor: 'instructor-5',
        instructorName: 'James Thompson',
        instructorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
        category: 'cloud-computing',
        level: 'beginner',
        price: 74.99,
        originalPrice: 124.99,
        discount: 40,
        duration: '29h 20m',
        thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
        rating: 4.6,
        reviewsCount: 2234,
        studentsCount: 16780,
        modules: [],
        requirements: [
            'Basic understanding of IT concepts',
            'No prior cloud experience required',
            'Willingness to create AWS free tier account'
        ],
        whatYouWillLearn: [
            'Understand core AWS services',
            'Learn AWS pricing and billing',
            'Implement basic security practices',
            'Design resilient architectures',
            'Prepare for certification exam'
        ],
        tags: ['AWS', 'Cloud Computing', 'Certification', 'DevOps', 'Infrastructure'],
        language: 'English',
        lastUpdated: '2023-09-18',
        createdAt: '2023-04-10',
        updatedAt: '2023-09-18',
        isPublished: true,
        isFeatured: true,
        difficulty: 2,
        totalLessons: 52,
        totalQuizzes: 8,
        hasSubtitles: true,
        hasCertificate: true
    },
    {
        id: 'course-8',
        title: 'Digital Marketing Mastery',
        description: 'Complete digital marketing course covering SEO, social media marketing, paid advertising, email marketing, and analytics.',
        shortDescription: 'Master all aspects of digital marketing from SEO to social media.',
        instructor: 'instructor-2',
        instructorName: 'Emma Davis',
        instructorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        category: 'business',
        level: 'beginner',
        price: 59.99,
        originalPrice: 99.99,
        discount: 40,
        duration: '24h 30m',
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        rating: 4.5,
        reviewsCount: 1567,
        studentsCount: 11240,
        modules: [],
        requirements: [
            'Basic computer skills',
            'Access to social media platforms',
            'No prior marketing experience required'
        ],
        whatYouWillLearn: [
            'Develop comprehensive marketing strategies',
            'Master SEO and content marketing',
            'Run effective social media campaigns',
            'Set up and optimize paid advertising',
            'Analyze marketing performance with tools'
        ],
        tags: ['Digital Marketing', 'SEO', 'Social Media', 'Advertising', 'Analytics'],
        language: 'English',
        lastUpdated: '2023-09-08',
        createdAt: '2023-05-20',
        updatedAt: '2023-09-08',
        isPublished: true,
        isFeatured: false,
        difficulty: 2,
        totalLessons: 43,
        totalQuizzes: 6,
        hasSubtitles: true,
        hasCertificate: true
    },
    {
        id: 'course-9',
        title: 'Cybersecurity Fundamentals',
        description: 'Learn the basics of cybersecurity including threat analysis, risk management, network security, and incident response.',
        shortDescription: 'Learn cybersecurity fundamentals and protection strategies.',
        instructor: 'instructor-5',
        instructorName: 'James Thompson',
        instructorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
        category: 'cybersecurity',
        level: 'beginner',
        price: 0,
        duration: '18h 15m',
        thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
        rating: 4.4,
        reviewsCount: 987,
        studentsCount: 8456,
        modules: [],
        requirements: [
            'Basic understanding of computers and networks',
            'No prior security experience required'
        ],
        whatYouWillLearn: [
            'Understand common cyber threats',
            'Implement basic security measures',
            'Conduct risk assessments',
            'Respond to security incidents',
            'Develop security awareness'
        ],
        tags: ['Cybersecurity', 'Network Security', 'Risk Management', 'Threats'],
        language: 'English',
        lastUpdated: '2023-08-15',
        createdAt: '2023-06-01',
        updatedAt: '2023-08-15',
        isPublished: true,
        isFeatured: false,
        difficulty: 2,
        totalLessons: 34,
        totalQuizzes: 5,
        hasSubtitles: true,
        hasCertificate: true
    },
    {
        id: 'course-10',
        title: 'Photography Masterclass',
        description: 'Complete photography course covering composition, lighting, editing, and different photography styles from portrait to landscape.',
        shortDescription: 'Master photography from basics to advanced techniques.',
        instructor: 'instructor-2',
        instructorName: 'Emma Davis',
        instructorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        category: 'photography',
        level: 'beginner',
        price: 49.99,
        originalPrice: 79.99,
        discount: 38,
        duration: '22h 45m',
        thumbnail: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop',
        rating: 4.7,
        reviewsCount: 1432,
        studentsCount: 7890,
        modules: [],
        requirements: [
            'Any camera (DSLR, mirrorless, or smartphone)',
            'Basic computer skills for editing',
            'Passion for photography'
        ],
        whatYouWillLearn: [
            'Master camera settings and controls',
            'Understand composition and lighting',
            'Learn different photography styles',
            'Edit photos professionally',
            'Build a photography portfolio'
        ],
        tags: ['Photography', 'Composition', 'Lighting', 'Photo Editing', 'Portfolio'],
        language: 'English',
        lastUpdated: '2023-09-02',
        createdAt: '2023-07-10',
        updatedAt: '2023-09-02',
        isPublished: true,
        isFeatured: false,
        difficulty: 2,
        totalLessons: 41,
        totalQuizzes: 4,
        hasSubtitles: true,
        hasCertificate: true
    }
];

// Helper functions
export const getFeaturedCourses = (): Course[] => {
    return courses.filter(course => course.isFeatured);
};

export const getCoursesByCategory = (categoryId: string): Course[] => {
    return courses.filter(course => course.category === categoryId);
};

export const getCoursesByInstructor = (instructorId: string): Course[] => {
    return courses.filter(course => course.instructor === instructorId);
};

export const getFreeCourses = (): Course[] => {
    return courses.filter(course => course.price === 0);
};

export const getPopularCourses = (): Course[] => {
    return courses
        .sort((a, b) => b.studentsCount - a.studentsCount)
        .slice(0, 8);
};

export const getTopRatedCourses = (): Course[] => {
    return courses
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 8);
};

export const getCourseById = (id: string): Course | undefined => {
    return courses.find(course => course.id === id);
};