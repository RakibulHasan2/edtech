'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function DashboardRedirect() {
    const { user, isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading) {
            if (!isAuthenticated || !user) {
                router.push('/auth/login');
                return;
            }

            // Redirect based on user role
            const redirectMap = {
                admin: '/dashboard/admin',
                instructor: '/dashboard/instructor',
                student: '/dashboard/student'
            };

            const targetRoute = redirectMap[user.role];
            if (targetRoute) {
                router.push(targetRoute);
            } else {
                // Fallback for unknown roles
                router.push('/dashboard/student');
            }
        }
    }, [user, isAuthenticated, isLoading, router]);

    // Loading state
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Redirecting to your dashboard...</p>
            </div>
        </div>
    );
}