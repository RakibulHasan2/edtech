'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { useAuth } from '@/contexts/AuthContext';
import { courses } from '@/data/courses';
import {
    BookOpen,
    Clock,
    Award,
    Target,
    TrendingUp,
    Play,
    CheckCircle,
    Star,
    Calendar
} from 'lucide-react';

export default function StudentDashboard() {
    const { user } = useAuth();

    // Mock enrolled courses (in a real app, this would come from an API)
    const enrolledCourses = courses.slice(0, 3);
    const continueLearning = courses[0];
    const recentActivity = [
        { type: 'completed', course: 'React Fundamentals', lesson: 'State Management', time: '2 hours ago' },
        { type: 'started', course: 'JavaScript Mastery', lesson: 'Async Programming', time: '1 day ago' },
        { type: 'completed', course: 'CSS Grid', lesson: 'Grid Layout', time: '2 days ago' }
    ];

    const stats = [
        { label: 'Courses Enrolled', value: '12', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Hours Learned', value: '84', icon: Clock, color: 'text-green-600', bg: 'bg-green-50' },
        { label: 'Certificates', value: '3', icon: Award, color: 'text-yellow-600', bg: 'bg-yellow-50' },
        { label: 'Streak Days', value: '15', icon: Target, color: 'text-purple-600', bg: 'bg-purple-50' }
    ];

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Welcome back, {user?.name}! 👋
                </h1>
                <p className="text-black">Ready to continue your learning journey?</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <Card key={index}>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                                </div>
                                <div className={`p-3 rounded-lg ${stat.bg}`}>
                                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Continue Learning */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-xl font-semibold">Continue Learning</h2>
                        </CardHeader>
                        <CardContent>
                            <div className="flex gap-4">
                                <div className="relative w-32 h-24 flex-shrink-0">
                                    <Image
                                        src={continueLearning.thumbnail}
                                        alt={continueLearning.title}
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
                                        <Play className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 mb-1">{continueLearning.title}</h3>
                                    <p className="text-sm text-gray-600 mb-3">Module 2: Advanced Concepts</p>
                                    <div className="mb-3">
                                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                                            <span>Progress</span>
                                            <span>65%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                                        </div>
                                    </div>
                                    <Button size="sm">Continue Learning</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* My Courses */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold">My Courses</h2>
                                <Link href="/courses">
                                    <Button variant="outline" size="sm">Browse More</Button>
                                </Link>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {enrolledCourses.map((course) => (
                                    <div key={course.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
                                        <div className="relative w-16 h-12 flex-shrink-0">
                                            <Image
                                                src={course.thumbnail}
                                                alt={course.title}
                                                fill
                                                className="object-cover rounded"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium text-gray-900 mb-1">{course.title}</h3>
                                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                                <span>{course.instructorName}</span>
                                                <span>•</span>
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                                    <span>{course.rating}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-gray-600 mb-1">Progress</div>
                                            <div className="text-sm font-medium">
                                                {Math.floor(Math.random() * 40 + 30)}%
                                            </div>
                                        </div>
                                        <Link href={`/learn/${course.id}`}>
                                            <Button size="sm" variant="outline">Continue</Button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recent Activity */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-xl font-semibold">Recent Activity</h2>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recentActivity.map((activity, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className={`p-2 rounded-full ${activity.type === 'completed'
                                            ? 'bg-green-100 text-green-600'
                                            : 'bg-blue-100 text-blue-600'
                                            }`}>
                                            {activity.type === 'completed' ? (
                                                <CheckCircle className="w-4 h-4" />
                                            ) : (
                                                <Play className="w-4 h-4" />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-900">
                                                {activity.type === 'completed' ? 'Completed' : 'Started'} {activity.lesson}
                                            </p>
                                            <p className="text-sm text-gray-600">in {activity.course}</p>
                                        </div>
                                        <span className="text-sm text-gray-500">{activity.time}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Learning Goals */}
                    <Card>
                        <CardHeader>
                            <h3 className="text-lg font-semibold">This Week&apos;s Goals</h3>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Study Hours</span>
                                        <span>8/12</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Lessons Completed</span>
                                        <span>5/7</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '71%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Quiz Score</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Achievements */}
                    <Card>
                        <CardHeader>
                            <h3 className="text-lg font-semibold">Recent Achievements</h3>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                        <Award className="w-5 h-5 text-yellow-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">React Expert</p>
                                        <p className="text-xs text-gray-500">Completed React course</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <Target className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Streak Master</p>
                                        <p className="text-xs text-gray-500">15 days learning streak</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Quick Learner</p>
                                        <p className="text-xs text-gray-500">Completed 5 lessons this week</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Upcoming Deadlines */}
                    <Card>
                        <CardHeader>
                            <h3 className="text-lg font-semibold">Upcoming Deadlines</h3>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-4 h-4 text-red-500" />
                                    <div>
                                        <p className="text-sm font-medium">JavaScript Quiz</p>
                                        <p className="text-xs text-gray-500">Due in 2 days</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-4 h-4 text-orange-500" />
                                    <div>
                                        <p className="text-sm font-medium">Project Submission</p>
                                        <p className="text-xs text-gray-500">Due in 5 days</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}