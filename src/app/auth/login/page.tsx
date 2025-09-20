'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { BookOpen, Eye, EyeOff, AlertCircle } from 'lucide-react';

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const result = await login({ email: formData.email, password: formData.password });
            if (result.success) {
                // Redirect based on user role - will be handled by auth state change
                router.push('/dashboard');
            } else {
                setError(result.error || 'Login failed');
            }
        } catch {
            setError('An unexpected error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    // Demo credentials helper
    const demoCredentials = [
        { role: 'Admin', email: 'admin@edutech.com', password: 'admin123' },
        { role: 'Instructor', email: 'sarah@edutech.com', password: 'instructor123' },
        { role: 'Student', email: 'john@student.com', password: 'student123' }
    ];

    const fillDemoCredentials = (email: string, password: string) => {
        setFormData({ email, password });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                {/* Header */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center space-x-2 text-2xl font-bold text-gray-900">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <span>EduTech Pro</span>
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900 mt-6 mb-2">Welcome Back</h1>
                    <p className="text-gray-600">Sign in to your account to continue learning</p>
                </div>

                {/* Demo Credentials */}
                <Card className="mb-6 bg-yellow-50 border-yellow-200">
                    <CardHeader className="pb-2">
                        <h3 className="text-sm font-semibold text-yellow-800">Demo Credentials</h3>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <div className="space-y-2">
                            {demoCredentials.map((cred, index) => (
                                <div key={index} className="flex items-center justify-between text-xs">
                                    <span className="text-yellow-700 font-medium">{cred.role}:</span>
                                    <button
                                        type="button"
                                        onClick={() => fillDemoCredentials(cred.email, cred.password)}
                                        className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                        {cred.email}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Login Form */}
                <Card>
                    <CardContent className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {error && (
                                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
                                    <AlertCircle className="w-4 h-4" />
                                    <span className="text-sm">{error}</span>
                                </div>
                            )}

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        required
                                        disabled={isLoading}
                                        className="pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 mr-2" />
                                    <span className="text-sm text-gray-600">Remember me</span>
                                </label>
                                <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
                                    Forgot password?
                                </Link>
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Signing in...' : 'Sign In'}
                            </Button>
                        </form>

                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-center text-sm text-gray-600">
                                Don&apos;t have an account?{' '}
                                <Link href="/auth/register" className="text-blue-600 hover:text-blue-800 font-medium">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <div className="mt-8 text-center">
                    <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                        ← Back to homepage
                    </Link>
                </div>
            </div>
        </div>
    );
}