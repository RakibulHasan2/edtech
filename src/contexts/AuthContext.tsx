'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { AuthUser, LoginCredentials, RegisterData, User } from '@/types';
import { getUserByEmail, users } from '@/data/users';
import { getStorageItem, setStorageItem, removeStorageItem } from '@/lib/utils';

interface AuthContextType {
    user: AuthUser | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    login: (credentials: LoginCredentials) => Promise<{ success: boolean; error?: string }>;
    register: (data: RegisterData) => Promise<{ success: boolean; error?: string }>;
    logout: () => void;
    updateProfile: (updates: Partial<User>) => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

// Demo passwords for different roles
const DEMO_PASSWORDS: Record<string, string> = {
    'admin@edtech.demo': 'admin123',
    'instructor@edtech.demo': 'instructor123',
    'student@edtech.demo': 'student123'
};

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const isAuthenticated = !!user;

    // Check for existing session on mount
    useEffect(() => {
        const initAuth = async () => {
            try {
                const savedUser = getStorageItem<AuthUser | null>('edtech_user', null);
                if (savedUser && savedUser.token) {
                    // Validate token (in a real app, you'd verify with backend)
                    const userExists = getUserByEmail(savedUser.email);
                    if (userExists) {
                        setUser(savedUser);
                    } else {
                        // Invalid user, clear storage
                        removeStorageItem('edtech_user');
                    }
                }
            } catch (error) {
                console.error('Error initializing auth:', error);
                removeStorageItem('edtech_user');
            } finally {
                setIsLoading(false);
            }
        };

        initAuth();
    }, []);

    const login = async (credentials: LoginCredentials): Promise<{ success: boolean; error?: string }> => {
        try {
            const { email, password } = credentials;

            // Find user in our demo data
            const foundUser = getUserByEmail(email);
            if (!foundUser) {
                return { success: false, error: 'Invalid email or password' };
            }

            // Check password (demo implementation)
            const expectedPassword = DEMO_PASSWORDS[email] || 'demo123';
            if (password !== expectedPassword) {
                return { success: false, error: 'Invalid email or password' };
            }

            // Create auth user object
            const authUser: AuthUser = {
                id: foundUser.id,
                email: foundUser.email,
                name: foundUser.name,
                role: foundUser.role,
                avatar: foundUser.avatar,
                token: generateMockToken()
            };

            // Save to state and localStorage
            setUser(authUser);
            setStorageItem('edtech_user', authUser);

            return { success: true };
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error: 'An error occurred during login' };
        }
    };

    const register = async (data: RegisterData): Promise<{ success: boolean; error?: string }> => {
        try {
            const { name, email, password, role } = data;

            // Check if user already exists
            const existingUser = getUserByEmail(email);
            if (existingUser) {
                return { success: false, error: 'User with this email already exists' };
            }

            // Validate password
            if (password.length < 8) {
                return { success: false, error: 'Password must be at least 8 characters long' };
            }

            // Create new user (in a real app, this would be sent to backend)
            const newUser: User = {
                id: `user-${Date.now()}`,
                email,
                name,
                avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=3B82F6&color=fff`,
                role,
                bio: '',
                joinDate: new Date().toISOString(),
                enrolledCourses: [],
                completedCourses: [],
                certificates: []
            };

            // Add to demo data (in memory only)
            users.push(newUser);

            // Create auth user object
            const authUser: AuthUser = {
                id: newUser.id,
                email: newUser.email,
                name: newUser.name,
                role: newUser.role,
                avatar: newUser.avatar,
                token: generateMockToken()
            };

            // Save to state and localStorage
            setUser(authUser);
            setStorageItem('edtech_user', authUser);

            return { success: true };
        } catch (error) {
            console.error('Registration error:', error);
            return { success: false, error: 'An error occurred during registration' };
        }
    };

    const logout = () => {
        setUser(null);
        removeStorageItem('edtech_user');
    };

    const updateProfile = async (updates: Partial<User>): Promise<{ success: boolean; error?: string }> => {
        if (!user) {
            return { success: false, error: 'User not authenticated' };
        }

        try {
            // Find user in demo data
            const userIndex = users.findIndex(u => u.id === user.id);
            if (userIndex === -1) {
                return { success: false, error: 'User not found' };
            }

            // Update user data
            users[userIndex] = { ...users[userIndex], ...updates };

            // Update auth user
            const updatedAuthUser: AuthUser = {
                ...user,
                name: updates.name || user.name,
                avatar: updates.avatar || user.avatar
            };

            setUser(updatedAuthUser);
            setStorageItem('edtech_user', updatedAuthUser);

            return { success: true };
        } catch (error) {
            console.error('Profile update error:', error);
            return { success: false, error: 'An error occurred while updating profile' };
        }
    };

    const value: AuthContextType = {
        user,
        isLoading,
        isAuthenticated,
        login,
        register,
        logout,
        updateProfile
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

// Helper function to generate mock JWT token
function generateMockToken(): string {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({
        sub: 'user',
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
    }));
    const signature = btoa('mock-signature');

    return `${header}.${payload}.${signature}`;
}

// Demo accounts helper
export const getDemoAccounts = () => {
    return [
        {
            email: 'admin@edtech.demo',
            password: 'admin123',
            role: 'admin',
            description: 'Administrator account with full platform access'
        },
        {
            email: 'instructor@edtech.demo',
            password: 'instructor123',
            role: 'instructor',
            description: 'Instructor account for course creation and management'
        },
        {
            email: 'student@edtech.demo',
            password: 'student123',
            role: 'student',
            description: 'Student account for course enrollment and learning'
        }
    ];
};