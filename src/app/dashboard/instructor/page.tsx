'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { courses } from '@/data/courses';
import {
    BookOpen,
    Users,
    DollarSign,
    TrendingUp,
    Eye,
    Star,
    BarChart3,
    Plus,
    Edit,
    MessageSquare,
    Award
} from 'lucide-react';
import { formatPrice, formatNumber } from '@/lib/utils';

export default function InstructorDashboard() {
    // Mock instructor data (in a real app, this would come from an API)
    const instructorCourses = courses.slice(0, 4);
    const totalStudents = instructorCourses.reduce((sum, course) => sum + course.studentsCount, 0);
    const totalRevenue = instructorCourses.reduce((sum, course) => sum + (course.price * course.studentsCount), 0);
    const averageRating = instructorCourses.reduce((sum, course) => sum + course.rating, 0) / instructorCourses.length;

    const stats = [
        {
            label: 'Total Students',
            value: formatNumber(totalStudents),
            icon: Users,
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            change: '+12%'
        },
        {
            label: 'Total Revenue',
            value: formatPrice(totalRevenue),
            icon: DollarSign,
            color: 'text-green-600',
            bg: 'bg-green-50',
            change: '+8%'
        },
        {
            label: 'Avg. Rating',
            value: averageRating.toFixed(1),
            icon: Star,
            color: 'text-yellow-600',
            bg: 'bg-yellow-50',
            change: '+0.2'
        },
        {
            label: 'Active Courses',
            value: instructorCourses.length.toString(),
            icon: BookOpen,
            color: 'text-purple-600',
            bg: 'bg-purple-50',
            change: '+1'
        }
    ];

    const recentActivity = [
        { type: 'enrollment', message: 'New student enrolled in React Fundamentals', time: '2 hours ago' },
        { type: 'review', message: 'Sarah left a 5-star review on JavaScript Mastery', time: '4 hours ago' },
        { type: 'question', message: 'John asked a question in CSS Grid course', time: '6 hours ago' },
        { type: 'completion', message: 'Mike completed React Fundamentals', time: '1 day ago' }
    ];

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Instructor Dashboard 📚
                </h1>
                <p className="text-gray-600">Manage your courses and track your teaching progress</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <Card key={index}>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                    <p className="text-xs text-green-600 flex items-center mt-1">
                                        <TrendingUp className="w-3 h-3 mr-1" />
                                        {stat.change} from last month
                                    </p>
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
                    {/* My Courses */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold">My Courses</h2>
                                <Button>
                                    <Plus className="w-4 h-4 mr-2" />
                                    Create Course
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {instructorCourses.map((course) => (
                                    <div key={course.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
                                        <div className="relative w-20 h-16 flex-shrink-0">
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
                                                <div className="flex items-center gap-1">
                                                    <Users className="w-3 h-3" />
                                                    <span>{formatNumber(course.studentsCount)} students</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                                    <span>{course.rating}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <DollarSign className="w-3 h-3" />
                                                    <span>{formatPrice(course.price * course.studentsCount)}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="sm" variant="outline">
                                                <Eye className="w-4 h-4 mr-2" />
                                                View
                                            </Button>
                                            <Button size="sm" variant="outline">
                                                <Edit className="w-4 h-4 mr-2" />
                                                Edit
                                            </Button>
                                        </div>
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
                                    <div key={index} className="flex items-start gap-4">
                                        <div className={`p-2 rounded-full mt-1 ${activity.type === 'enrollment' ? 'bg-blue-100 text-blue-600' :
                                            activity.type === 'review' ? 'bg-yellow-100 text-yellow-600' :
                                                activity.type === 'question' ? 'bg-purple-100 text-purple-600' :
                                                    'bg-green-100 text-green-600'
                                            }`}>
                                            {activity.type === 'enrollment' && <Users className="w-4 h-4" />}
                                            {activity.type === 'review' && <Star className="w-4 h-4" />}
                                            {activity.type === 'question' && <MessageSquare className="w-4 h-4" />}
                                            {activity.type === 'completion' && <Award className="w-4 h-4" />}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-900">{activity.message}</p>
                                            <p className="text-sm text-gray-500">{activity.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Quick Actions */}
                    <Card>
                        <CardHeader>
                            <h3 className="text-lg font-semibold">Quick Actions</h3>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Button className="w-full justify-start">
                                <Plus className="w-4 h-4 mr-3" />
                                Create New Course
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                <BarChart3 className="w-4 h-4 mr-3" />
                                View Analytics
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                <MessageSquare className="w-4 h-4 mr-3" />
                                Answer Questions
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                <Users className="w-4 h-4 mr-3" />
                                Manage Students
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Performance This Month */}
                    <Card>
                        <CardHeader>
                            <h3 className="text-lg font-semibold">This Month</h3>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>New Enrollments</span>
                                        <span>245</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Course Completions</span>
                                        <span>89</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Revenue Goal</span>
                                        <span>$4,250</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Top Performing Courses */}
                    <Card>
                        <CardHeader>
                            <h3 className="text-lg font-semibold">Top Performing</h3>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {instructorCourses.slice(0, 3).map((course, index) => (
                                    <div key={course.id} className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-sm font-semibold">
                                            {index + 1}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium line-clamp-1">{course.title}</p>
                                            <p className="text-xs text-gray-500">{formatNumber(course.studentsCount)} students</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                                <span className="text-sm">{course.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}