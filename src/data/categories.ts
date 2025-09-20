import { Category } from '@/types';

export const categories: Category[] = [
    {
        id: 'web-development',
        name: 'Web Development',
        description: 'Learn to build modern websites and web applications',
        icon: 'Code',
        color: '#3B82F6',
        courseCount: 152,
        isPopular: true,
        subcategories: [
            { id: 'frontend', name: 'Frontend Development', courseCount: 68 },
            { id: 'backend', name: 'Backend Development', courseCount: 45 },
            { id: 'fullstack', name: 'Full Stack Development', courseCount: 39 }
        ]
    },
    {
        id: 'mobile-development',
        name: 'Mobile Development',
        description: 'Create mobile apps for iOS and Android',
        icon: 'Smartphone',
        color: '#10B981',
        courseCount: 89,
        isPopular: true,
        subcategories: [
            { id: 'ios', name: 'iOS Development', courseCount: 34 },
            { id: 'android', name: 'Android Development', courseCount: 31 },
            { id: 'react-native', name: 'React Native', courseCount: 24 }
        ]
    },
    {
        id: 'data-science',
        name: 'Data Science',
        description: 'Analytics, machine learning, and AI',
        icon: 'BarChart3',
        color: '#8B5CF6',
        courseCount: 76,
        isPopular: true,
        subcategories: [
            { id: 'machine-learning', name: 'Machine Learning', courseCount: 28 },
            { id: 'data-analysis', name: 'Data Analysis', courseCount: 25 },
            { id: 'deep-learning', name: 'Deep Learning', courseCount: 23 }
        ]
    },
    {
        id: 'design',
        name: 'Design',
        description: 'UI/UX design, graphic design, and digital art',
        icon: 'Palette',
        color: '#F59E0B',
        courseCount: 124,
        isPopular: true,
        subcategories: [
            { id: 'ui-ux', name: 'UI/UX Design', courseCount: 52 },
            { id: 'graphic-design', name: 'Graphic Design', courseCount: 41 },
            { id: 'web-design', name: 'Web Design', courseCount: 31 }
        ]
    },
    {
        id: 'business',
        name: 'Business',
        description: 'Entrepreneurship, marketing, and management',
        icon: 'Briefcase',
        color: '#EF4444',
        courseCount: 98,
        isPopular: false,
        subcategories: [
            { id: 'marketing', name: 'Digital Marketing', courseCount: 38 },
            { id: 'management', name: 'Management', courseCount: 32 },
            { id: 'entrepreneurship', name: 'Entrepreneurship', courseCount: 28 }
        ]
    },
    {
        id: 'cybersecurity',
        name: 'Cybersecurity',
        description: 'Information security and ethical hacking',
        icon: 'Shield',
        color: '#DC2626',
        courseCount: 43,
        isPopular: false,
        subcategories: [
            { id: 'ethical-hacking', name: 'Ethical Hacking', courseCount: 18 },
            { id: 'network-security', name: 'Network Security', courseCount: 15 },
            { id: 'security-analysis', name: 'Security Analysis', courseCount: 10 }
        ]
    },
    {
        id: 'cloud-computing',
        name: 'Cloud Computing',
        description: 'AWS, Azure, Google Cloud, and DevOps',
        icon: 'Cloud',
        color: '#0EA5E9',
        courseCount: 67,
        isPopular: true,
        subcategories: [
            { id: 'aws', name: 'Amazon Web Services', courseCount: 25 },
            { id: 'azure', name: 'Microsoft Azure', courseCount: 22 },
            { id: 'devops', name: 'DevOps', courseCount: 20 }
        ]
    },
    {
        id: 'photography',
        name: 'Photography',
        description: 'Digital photography and photo editing',
        icon: 'Camera',
        color: '#84CC16',
        courseCount: 54,
        isPopular: false,
        subcategories: [
            { id: 'portrait', name: 'Portrait Photography', courseCount: 20 },
            { id: 'landscape', name: 'Landscape Photography', courseCount: 18 },
            { id: 'photo-editing', name: 'Photo Editing', courseCount: 16 }
        ]
    }
];