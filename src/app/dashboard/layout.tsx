'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Navbar } from '@/components/Navbar';
import {
    BookOpen,
    User,
    Award,
    BarChart3,
    Settings,
    Users,
    FileText,
    Shield
} from 'lucide-react';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const pathname = usePathname();
    const { user } = useAuth();

    if (!user) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Access Denied</h1>
                    <p className="text-gray-600 mb-8">Please log in to access the dashboard.</p>
                    <Link href="/auth/login" className="text-blue-600 hover:text-blue-800">
                        Go to Login
                    </Link>
                </div>
            </div>
        );
    }

    const getNavigationItems = () => {
        const baseItems = [
            { href: '/dashboard/profile', label: 'Profile', icon: User },
            { href: '/dashboard/settings', label: 'Settings', icon: Settings }
        ];

        switch (user.role) {
            case 'student':
                return [
                    { href: '/dashboard/student', label: 'My Learning', icon: BookOpen },
                    { href: '/dashboard/student/certificates', label: 'Certificates', icon: Award },
                    ...baseItems
                ];
            case 'instructor':
                return [
                    { href: '/dashboard/instructor', label: 'Overview', icon: BarChart3 },
                    { href: '/dashboard/instructor/courses', label: 'My Courses', icon: BookOpen },
                    { href: '/dashboard/instructor/students', label: 'Students', icon: Users },
                    { href: '/dashboard/instructor/analytics', label: 'Analytics', icon: BarChart3 },
                    ...baseItems
                ];
            case 'admin':
                return [
                    { href: '/dashboard/admin', label: 'Overview', icon: BarChart3 },
                    { href: '/dashboard/admin/users', label: 'Users', icon: Users },
                    { href: '/dashboard/admin/courses', label: 'Courses', icon: BookOpen },
                    { href: '/dashboard/admin/reports', label: 'Reports', icon: FileText },
                    { href: '/dashboard/admin/system', label: 'System', icon: Shield },
                    ...baseItems
                ];
            default:
                return baseItems;
        }
    };

    const navigationItems = getNavigationItems();

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="flex">
                {/* Sidebar */}
                <div className="w-64 bg-white shadow-sm min-h-screen">
                    <div className="p-6">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <BarChart3 className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-gray-900">Dashboard</h2>
                                <p className="text-sm text-gray-500 capitalize">{user.role}</p>
                            </div>
                        </div>

                        <nav className="space-y-2">
                            {navigationItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${isActive
                                                ? 'bg-blue-50 text-blue-700 font-medium'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                    >
                                        <item.icon className="w-4 h-4" />
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </div>
    );
}