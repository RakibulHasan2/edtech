'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { getFeaturedCourses } from '@/data/courses';
import { categories } from '@/data/categories';
import { getInstructors } from '@/data/users';
import {
  Star,
  Users,
  Clock,
  Play,
  CheckCircle,
  TrendingUp,
  Award,
  BookOpen,
  Target,
  Zap
} from 'lucide-react';
import { formatPrice, formatNumber } from '@/lib/utils';

export default function HomePage() {
  const featuredCourses = getFeaturedCourses().slice(0, 6);
  const topCategories = categories.filter(cat => cat.isPopular).slice(0, 6);
  const topInstructors = getInstructors().slice(0, 4);

  const stats = [
    { label: 'Active Students', value: '45,000+', icon: Users },
    { label: 'Expert Instructors', value: '1,200+', icon: Award },
    { label: 'Course Hours', value: '10,000+', icon: Clock },
    { label: 'Success Rate', value: '95%', icon: Target }
  ];

  const features = [
    {
      icon: Play,
      title: 'Interactive Learning',
      description: 'Engage with high-quality video content and hands-on exercises'
    },
    {
      icon: CheckCircle,
      title: 'Verified Certificates',
      description: 'Earn industry-recognized certificates upon course completion'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals and subject matter experts'
    },
    {
      icon: Zap,
      title: 'Lifetime Access',
      description: 'Access your courses anytime, anywhere, for as long as you need'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
                Master New Skills with
                <span className="text-yellow-400"> Expert-Led</span> Courses
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join thousands of learners advancing their careers with our comprehensive online courses.
                Learn at your own pace from industry experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses">
                  <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold px-8">
                    Explore Courses
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-blue-600">
                    Start Free Trial
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-blue-500">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                  alt="Students learning online"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-white text-gray-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="font-semibold">95% Success Rate</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-gray-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold">45K+ Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose EduTech Pro?</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              We provide everything you need to advance your skills and achieve your career goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg text-black font-semibold mb-2">{feature.title}</h3>
                  <p className="text-black">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Categories</h2>
            <p className="text-xl text-black">Explore our most sought-after course categories</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCategories.map((category) => (
              <Link key={category.id} href={`/courses?category=${category.id}`}>
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${category.color}20` }}
                      >
                        <BookOpen className="w-6 h-6" style={{ color: category.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
                        <p className="text-black text-sm">{category.courseCount} courses</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Courses</h2>
              <p className="text-xl text-black">Hand-picked courses from our expert instructors</p>
            </div>
            <Link href="/courses">
              <Button variant="outline">View All Courses</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    {course.discount && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                        {course.discount}% OFF
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-blue-600 font-medium capitalize">
                        {course.level}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-black">{course.duration}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-black text-sm mb-4 line-clamp-2">{course.shortDescription}</p>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-black">
                        {formatNumber(course.studentsCount)} students
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        {course.originalPrice && course.originalPrice > course.price ? (
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-gray-900">
                              {formatPrice(course.price)}
                            </span>
                            <span className="text-sm text-gray-500 line-through">
                              {formatPrice(course.originalPrice)}
                            </span>
                          </div>
                        ) : (
                          <span className="text-xl font-bold text-gray-900">
                            {formatPrice(course.price)}
                          </span>
                        )}
                      </div>
                      <Button size="sm">Enroll Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Instructors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn from the Best</h2>
            <p className="text-xl text-black">Meet our expert instructors who are industry leaders</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topInstructors.map((instructor) => (
              <Card key={instructor.id} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <Image
                      src={instructor.avatar}
                      alt={instructor.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{instructor.name}</h3>
                  <p className="text-blue-600 text-sm mb-2">{instructor.expertise?.[0]}</p>
                  <div className="flex justify-center gap-4 text-sm text-black">
                    <span>{formatNumber(instructor.totalStudents || 0)} students</span>
                    <span>{instructor.totalCourses} courses</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">EduTech Pro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering learners worldwide with quality education and expert instruction.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                <li><Link href="/categories" className="hover:text-white transition-colors">Categories</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 EduTech Pro. All rights reserved. This is a demo platform.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
