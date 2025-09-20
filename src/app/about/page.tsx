import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/Card';
import {
    BookOpen,
    Users,
    Award,
    Globe,
    Target,
    Heart,
    Lightbulb,
    Shield,
    Check
} from 'lucide-react';

export default function AboutPage() {
    const stats = [
        { label: 'Active Students', value: '45,000+', icon: Users },
        { label: 'Expert Instructors', value: '1,200+', icon: Award },
        { label: 'Course Hours', value: '10,000+', icon: BookOpen },
        { label: 'Countries Served', value: '150+', icon: Globe }
    ];

    const values = [
        {
            icon: Target,
            title: 'Quality Education',
            description: 'We believe everyone deserves access to high-quality education that transforms lives and opens new opportunities.'
        },
        {
            icon: Heart,
            title: 'Student Success',
            description: 'Our students\' success is our success. We\'re committed to providing the support and resources needed to achieve their goals.'
        },
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'We continuously innovate our platform and teaching methods to provide the best possible learning experience.'
        },
        {
            icon: Shield,
            title: 'Trust & Security',
            description: 'We maintain the highest standards of security and privacy to protect our students\' data and learning experience.'
        }
    ];

    const features = [
        'Interactive video courses',
        'Expert instructor guidance',
        'Practical hands-on projects',
        'Industry-recognized certificates',
        'Lifetime access to content',
        'Mobile and desktop learning',
        '24/7 community support',
        'Career guidance and mentorship'
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                            About EduTech Pro
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            We&apos;re on a mission to democratize quality education and empower millions of learners
                            worldwide to achieve their career goals and unlock their potential.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Founded in 2020, EduTech Pro was born from a simple yet powerful vision:
                                    to make high-quality education accessible to everyone, everywhere. Our founders,
                                    experienced educators and technologists, recognized the growing need for flexible,
                                    practical learning solutions in our rapidly evolving digital world.
                                </p>
                                <p>
                                    What started as a small team of passionate educators has grown into a global
                                    platform serving thousands of students across 150+ countries. We&apos;ve helped
                                    professionals transition careers, students master new skills, and entrepreneurs
                                    build successful businesses.
                                </p>
                                <p>
                                    Today, we continue to innovate and expand our offerings, always keeping our
                                    core mission at heart: empowering learners to achieve their goals through
                                    accessible, engaging, and effective education.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                                alt="Team collaboration"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            These core values guide everything we do and shape the learning experience we create
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <Card key={index} className="border-0 shadow-lg">
                                <CardContent className="p-8">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                        <value.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Image
                                src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop"
                                alt="Online learning"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Sets Us Apart</h2>
                            <p className="text-gray-700 mb-6">
                                EduTech Pro isn&apos;t just another online learning platform. We&apos;ve carefully crafted
                                an experience that combines the best of technology with proven educational methods.
                            </p>

                            <div className="grid grid-cols-1 gap-3">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of students who are already advancing their careers with EduTech Pro
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/courses" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Browse Courses
                        </Link>
                        <Link href="/auth/register" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                            Sign Up Free
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}