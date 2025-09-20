'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { getCourseById } from '@/data/courses';
import { useAuth } from '@/contexts/AuthContext';
import {
    Star,
    Users,
    Clock,
    Globe,
    Award,
    Play,
    Download,
    CheckCircle,
    Smartphone,
    Trophy,
    Heart,
    Share2
} from 'lucide-react';
import { formatPrice, formatNumber } from '@/lib/utils';

export default function CourseDetailPage() {
    const params = useParams();
    const courseId = params.id as string;
    const { isAuthenticated } = useAuth();
    const [activeTab, setActiveTab] = useState('overview');
    const [isWishlisted, setIsWishlisted] = useState(false);

    const course = getCourseById(courseId);

    if (!course) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h1>
                    <p className="text-gray-600 mb-8">The course you&apos;re looking for doesn&apos;t exist.</p>
                    <Link href="/courses">
                        <Button>Browse All Courses</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const isEnrolled = false; // In a real app, this would check enrollment status
    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'curriculum', label: 'Curriculum' },
        { id: 'instructor', label: 'Instructor' },
        { id: 'reviews', label: 'Reviews' }
    ];

    const handleEnroll = () => {
        // In a real app, this would call an API
        console.log('Enrolling in course:', courseId);
    };

    const handleAddToWishlist = () => {
        setIsWishlisted(!isWishlisted);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <div className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Course Info */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-sm bg-blue-600 px-3 py-1 rounded-full font-medium capitalize">
                                    {course.level}
                                </span>
                                <span className="text-blue-200">•</span>
                                <span className="text-sm text-blue-200">{course.category}</span>
                            </div>

                            <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                            <p className="text-xl text-gray-300 mb-6">{course.shortDescription}</p>

                            <div className="flex flex-wrap items-center gap-6 mb-8">
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    <span className="font-semibold">{course.rating}</span>
                                    <span className="text-gray-300">({formatNumber(course.reviewsCount)} reviews)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5" />
                                    <span>{formatNumber(course.studentsCount)} students</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe className="w-5 h-5" />
                                    <span>English</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Image
                                    src={course.instructorAvatar}
                                    alt={course.instructorName}
                                    width={48}
                                    height={48}
                                    className="rounded-full"
                                />
                                <div>
                                    <p className="text-sm text-gray-300">Created by</p>
                                    <p className="font-semibold">{course.instructorName}</p>
                                </div>
                            </div>
                        </div>

                        {/* Course Preview Card */}
                        <div className="lg:col-span-1">
                            <Card className="sticky top-4">
                                <div className="relative h-48">
                                    <Image
                                        src={course.thumbnail}
                                        alt={course.title}
                                        fill
                                        className="object-cover rounded-t-lg"
                                    />
                                    <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-60 transition-colors rounded-t-lg">
                                        <Play className="w-12 h-12 text-white" />
                                    </button>
                                </div>
                                <CardContent className="p-6">
                                    <div className="mb-4">
                                        {course.originalPrice && course.originalPrice > course.price ? (
                                            <div className="flex items-center gap-2">
                                                <span className="text-3xl font-bold">
                                                    {formatPrice(course.price)}
                                                </span>
                                                <span className="text-lg text-gray-500 line-through">
                                                    {formatPrice(course.originalPrice)}
                                                </span>
                                                {course.discount && (
                                                    <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">
                                                        {course.discount}% OFF
                                                    </span>
                                                )}
                                            </div>
                                        ) : (
                                            <span className="text-3xl font-bold">
                                                {formatPrice(course.price)}
                                            </span>
                                        )}
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        {isEnrolled ? (
                                            <Link href={`/learn/${courseId}`}>
                                                <Button className="w-full">
                                                    Continue Learning
                                                </Button>
                                            </Link>
                                        ) : (
                                            <Button
                                                onClick={handleEnroll}
                                                className="w-full"
                                                disabled={!isAuthenticated}
                                            >
                                                {isAuthenticated ? 'Enroll Now' : 'Login to Enroll'}
                                            </Button>
                                        )}

                                        <div className="flex gap-2">
                                            <Button
                                                variant="outline"
                                                onClick={handleAddToWishlist}
                                                className="flex-1"
                                            >
                                                <Heart className={`w-4 h-4 mr-2 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                                                Wishlist
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                <Share2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center gap-3">
                                            <Award className="w-4 h-4 text-blue-600" />
                                            <span>Certificate of completion</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Download className="w-4 h-4 text-blue-600" />
                                            <span>Downloadable resources</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Smartphone className="w-4 h-4 text-blue-600" />
                                            <span>Access on mobile and desktop</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Trophy className="w-4 h-4 text-blue-600" />
                                            <span>30-day money-back guarantee</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        {/* Tabs */}
                        <div className="border-b border-gray-200 mb-8">
                            <nav className="flex space-x-8">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id
                                            ? 'border-blue-500 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Tab Content */}
                        {activeTab === 'overview' && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">About this course</h2>
                                    <div className="prose max-w-none text-gray-700">
                                        <p>{course.description}</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4">What you&apos;ll learn</h3>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        {course.whatYouWillLearn.map((outcome: string, index: number) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{outcome}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                                    <ul className="space-y-2">
                                        {course.requirements.map((requirement, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                                                <span className="text-gray-700">{requirement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'curriculum' && (
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Course curriculum</h2>
                                <div className="space-y-4">
                                    {course.modules.map((module, moduleIndex) => (
                                        <Card key={module.id}>
                                            <CardHeader className="pb-3">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-lg font-semibold">{module.title}</h3>
                                                    <span className="text-sm text-gray-500">
                                                        {module.lessons.length} lessons
                                                    </span>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="pt-0">
                                                <div className="space-y-2">
                                                    {module.lessons.map((lesson, lessonIndex) => (
                                                        <div key={lesson.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                                                            <div className="flex items-center gap-3">
                                                                <span className="text-sm text-gray-500 font-mono">
                                                                    {String(moduleIndex + 1).padStart(2, '0')}.{String(lessonIndex + 1).padStart(2, '0')}
                                                                </span>
                                                                <Play className="w-4 h-4 text-gray-400" />
                                                                <span className="text-gray-700">{lesson.title}</span>
                                                            </div>
                                                            <span className="text-sm text-gray-500">{lesson.duration}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'instructor' && (
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Your instructor</h2>
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-6">
                                            <Image
                                                src={course.instructorAvatar}
                                                alt={course.instructorName}
                                                width={120}
                                                height={120}
                                                className="rounded-full"
                                            />
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold mb-2">{course.instructorName}</h3>
                                                <p className="text-gray-600 mb-4">Expert {course.category} Instructor</p>

                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                                    <div className="text-center">
                                                        <div className="text-2xl font-bold text-blue-600">4.8</div>
                                                        <div className="text-sm text-gray-500">Instructor Rating</div>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="text-2xl font-bold text-blue-600">2,458</div>
                                                        <div className="text-sm text-gray-500">Reviews</div>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="text-2xl font-bold text-blue-600">45,231</div>
                                                        <div className="text-sm text-gray-500">Students</div>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="text-2xl font-bold text-blue-600">12</div>
                                                        <div className="text-sm text-gray-500">Courses</div>
                                                    </div>
                                                </div>

                                                <p className="text-gray-700">
                                                    Professional instructor with over 10 years of experience in {course.category.toLowerCase()}.
                                                    Passionate about teaching and helping students achieve their goals.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Student reviews</h2>
                                <div className="space-y-6">
                                    <div className="bg-white p-6 rounded-lg border">
                                        <div className="flex items-center gap-4 mb-4">
                                            <Image
                                                src="https://ui-avatars.com/api/?name=John+Doe&background=3B82F6&color=fff"
                                                alt="Student"
                                                width={48}
                                                height={48}
                                                className="rounded-full"
                                            />
                                            <div>
                                                <h4 className="font-semibold">John Doe</h4>
                                                <div className="flex items-center gap-2">
                                                    <div className="flex">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                        ))}
                                                    </div>
                                                    <span className="text-sm text-gray-500">2 weeks ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-700">
                                            Excellent course! The instructor explains complex concepts in a very clear and understandable way.
                                            The hands-on projects really helped me apply what I learned.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg border">
                                        <div className="flex items-center gap-4 mb-4">
                                            <Image
                                                src="https://ui-avatars.com/api/?name=Sarah+Smith&background=10B981&color=fff"
                                                alt="Student"
                                                width={48}
                                                height={48}
                                                className="rounded-full"
                                            />
                                            <div>
                                                <h4 className="font-semibold">Sarah Smith</h4>
                                                <div className="flex items-center gap-2">
                                                    <div className="flex">
                                                        {[...Array(4)].map((_, i) => (
                                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                        ))}
                                                        <Star className="w-4 h-4 text-gray-300" />
                                                    </div>
                                                    <span className="text-sm text-gray-500">1 month ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-700">
                                            Great course content and well-structured lessons. Would recommend to anyone looking to learn this topic.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="space-y-6">
                            {/* Related Courses */}
                            <Card>
                                <CardHeader>
                                    <h3 className="text-lg font-semibold">Related Courses</h3>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {[1, 2, 3].map((_, index) => (
                                        <div key={index} className="flex gap-3">
                                            <Image
                                                src={`https://images.unsplash.com/photo-${1600000000000 + index}?w=80&h=60&fit=crop`}
                                                alt="Related course"
                                                width={80}
                                                height={60}
                                                className="rounded object-cover"
                                            />
                                            <div className="flex-1">
                                                <h4 className="text-sm font-medium line-clamp-2">
                                                    Advanced {course.category} Techniques
                                                </h4>
                                                <p className="text-xs text-gray-500">$49.99</p>
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}