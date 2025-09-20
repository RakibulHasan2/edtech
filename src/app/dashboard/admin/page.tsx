'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { courses } from '@/data/courses';
import { users } from '@/data/users';
import {
    Users,
    BookOpen,
    DollarSign,
    TrendingUp,
    UserCheck,
    UserX,
    AlertTriangle,
    CheckCircle,
    Clock,
    Star,
    Eye,
    Edit,
    Trash2,
    Shield,
    Activity
} from 'lucide-react';
import { formatPrice, formatNumber } from '@/lib/utils';

export default function AdminDashboard() {
    const totalUsers = users.length;
    const totalCourses = courses.length;
    const totalRevenue = courses.reduce((sum, course) => sum + (course.price * course.studentsCount), 0);
    const avgRating = courses.reduce((sum, course) => sum + course.rating, 0) / courses.length;

    const stats = [
        {
            label: 'Total Users',
            value: formatNumber(totalUsers),
            icon: Users,
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            change: '+12%'
        },
        {
            label: 'Total Courses',
            value: totalCourses.toString(),
            icon: BookOpen,
            color: 'text-green-600',
            bg: 'bg-green-50',
            change: '+8%'
        },
        {
            label: 'Platform Revenue',
            value: formatPrice(totalRevenue),
            icon: DollarSign,
            color: 'text-yellow-600',
            bg: 'bg-yellow-50',
            change: '+15%'
        },
        {
            label: 'Avg Rating',
            value: avgRating.toFixed(1),
            icon: Star,
            color: 'text-purple-600',
            bg: 'bg-purple-50',
            change: '+0.3'
        }
    ];

    const recentUsers = users.slice(-5).reverse();
    const pendingCourses = courses.filter(course => !course.isPublished).slice(0, 3);
    const recentActivity = [
        { type: 'user', message: 'New instructor registration: Sarah Wilson', time: '2 hours ago' },
        { type: 'course', message: 'Course "Advanced React" approved for publishing', time: '4 hours ago' },
        { type: 'payment', message: 'Payment dispute resolved for course enrollment', time: '6 hours ago' },
        { type: 'system', message: 'Platform maintenance scheduled for tonight', time: '8 hours ago' }
    ];

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Admin Dashboard 🛡️
                </h1>
                <p className="text-gray-600">Monitor and manage the EduTech Pro platform</p>
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
                    {/* Recent Users */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold">Recent Users</h2>
                                <Button variant="outline" size="sm">View All</Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recentUsers.map((user) => (
                                    <div key={user.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                                        <Image
                                            src={user.avatar}
                                            alt={user.name}
                                            width={48}
                                            height={48}
                                            className="rounded-full"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-medium text-gray-900">{user.name}</h3>
                                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                                <span>{user.email}</span>
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.role === 'admin' ? 'bg-red-100 text-red-800' :
                                                        user.role === 'instructor' ? 'bg-blue-100 text-blue-800' :
                                                            'bg-green-100 text-green-800'
                                                    }`}>
                                                    {user.role}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="sm" variant="outline">
                                                <Eye className="w-4 h-4" />
                                            </Button>
                                            <Button size="sm" variant="outline">
                                                <Edit className="w-4 h-4" />
                                            </Button>
                                            <Button size="sm" variant="outline">
                                                <UserX className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Pending Course Approvals */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold">Pending Approvals</h2>
                                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm font-medium">
                                    {pendingCourses.length} pending
                                </span>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {pendingCourses.map((course) => (
                                    <div key={course.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                                        <div className="relative w-16 h-12 flex-shrink-0">
                                            <Image
                                                src={course.thumbnail}
                                                alt={course.title}
                                                fill
                                                className="object-cover rounded"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium text-gray-900">{course.title}</h3>
                                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                                <span>by {course.instructorName}</span>
                                                <span>{formatPrice(course.price)}</span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {course.duration}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                                <CheckCircle className="w-4 h-4 mr-2" />
                                                Approve
                                            </Button>
                                            <Button size="sm" variant="outline">
                                                <Eye className="w-4 h-4 mr-2" />
                                                Review
                                            </Button>
                                            <Button size="sm" variant="outline">
                                                <Trash2 className="w-4 h-4 mr-2" />
                                                Reject
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* System Activity */}
                    <Card>
                        <CardHeader>
                            <h2 className="text-xl font-semibold">Recent Activity</h2>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recentActivity.map((activity, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className={`p-2 rounded-full mt-1 ${activity.type === 'user' ? 'bg-blue-100 text-blue-600' :
                                                activity.type === 'course' ? 'bg-green-100 text-green-600' :
                                                    activity.type === 'payment' ? 'bg-yellow-100 text-yellow-600' :
                                                        'bg-purple-100 text-purple-600'
                                            }`}>
                                            {activity.type === 'user' && <Users className="w-4 h-4" />}
                                            {activity.type === 'course' && <BookOpen className="w-4 h-4" />}
                                            {activity.type === 'payment' && <DollarSign className="w-4 h-4" />}
                                            {activity.type === 'system' && <Shield className="w-4 h-4" />}
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
                            <Button className="w-full justify-start" variant="outline">
                                <UserCheck className="w-4 h-4 mr-3" />
                                Approve Users
                            </Button>
                            <Button className="w-full justify-start" variant="outline">
                                <BookOpen className="w-4 h-4 mr-3" />
                                Review Courses
                            </Button>
                            <Button className="w-full justify-start" variant="outline">
                                <Activity className="w-4 h-4 mr-3" />
                                System Health
                            </Button>
                            <Button className="w-full justify-start" variant="outline">
                                <Shield className="w-4 h-4 mr-3" />
                                Security Settings
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Platform Health */}
                    <Card>
                        <CardHeader>
                            <h3 className="text-lg font-semibold">Platform Health</h3>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Server Status</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-sm font-medium text-green-600">Healthy</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Database</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-sm font-medium text-green-600">Online</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">CDN</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                        <span className="text-sm font-medium text-yellow-600">Slow</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">API Response</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-sm font-medium text-green-600">250ms</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Alerts */}
                    <Card>
                        <CardHeader>
                            <h3 className="text-lg font-semibold">System Alerts</h3>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                                    <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-medium text-yellow-800">High Server Load</p>
                                        <p className="text-xs text-yellow-600">CPU usage at 85%</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-medium text-blue-800">Backup Completed</p>
                                        <p className="text-xs text-blue-600">Daily backup successful</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-medium text-red-800">Failed Login Attempts</p>
                                        <p className="text-xs text-red-600">12 attempts in last hour</p>
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