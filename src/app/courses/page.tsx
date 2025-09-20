'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';
import { courses } from '@/data/courses';
import { categories } from '@/data/categories';
import { Course } from '@/types';
import {
    Search,
    Star,
    Users,
    Clock,
    Grid,
    List,
    SlidersHorizontal
} from 'lucide-react';
import { formatPrice, formatNumber } from '@/lib/utils';

export default function CoursesPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [sortBy, setSortBy] = useState('popularity');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [showFilters, setShowFilters] = useState(false);

    const allCourses = courses;

    const filteredAndSortedCourses = useMemo(() => {
        const filtered = allCourses.filter((course: Course) => {
            // Search filter
            if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
                !course.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
                !course.instructorName.toLowerCase().includes(searchQuery.toLowerCase())) {
                return false;
            }

            // Category filter
            if (selectedCategory && course.category !== selectedCategory) {
                return false;
            }

            // Level filter
            if (selectedLevel && course.level !== selectedLevel) {
                return false;
            }

            // Price range filter
            if (priceRange) {
                const price = course.price;
                switch (priceRange) {
                    case 'free':
                        if (price > 0) return false;
                        break;
                    case 'under-50':
                        if (price >= 50) return false;
                        break;
                    case '50-100':
                        if (price < 50 || price >= 100) return false;
                        break;
                    case 'over-100':
                        if (price < 100) return false;
                        break;
                }
            }

            return true;
        });

        // Sort courses
        filtered.sort((a: Course, b: Course) => {
            switch (sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'rating':
                    return b.rating - a.rating;
                case 'newest':
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                case 'popularity':
                default:
                    return b.studentsCount - a.studentsCount;
            }
        });

        return filtered;
    }, [allCourses, searchQuery, selectedCategory, selectedLevel, priceRange, sortBy]);

    const clearFilters = () => {
        setSearchQuery('');
        setSelectedCategory('');
        setSelectedLevel('');
        setPriceRange('');
        setSortBy('popularity');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Header */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Explore Courses</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover thousands of courses from expert instructors and advance your career
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="mt-8 max-w-2xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                type="text"
                                placeholder="Search for courses, instructors, or topics..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 py-3 text-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:w-64 space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold">Filters</h3>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="lg:hidden"
                                >
                                    <SlidersHorizontal className="w-4 h-4" />
                                </Button>
                            </div>

                            <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                                {/* Category Filter */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Category
                                    </label>
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none 
                                        text-black
                                        focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">All Categories</option>
                                        {categories.map(category => (
                                            <option key={category.id} value={category.id}>
                                                {category.name} ({category.courseCount})
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Level Filter */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Level
                                    </label>
                                    <select
                                        value={selectedLevel}
                                        onChange={(e) => setSelectedLevel(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">All Levels</option>
                                        <option value="beginner">Beginner</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advanced">Advanced</option>
                                    </select>
                                </div>

                                {/* Price Filter */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Price Range
                                    </label>
                                    <select
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">All Prices</option>
                                        <option value="free">Free</option>
                                        <option value="under-50">Under $50</option>
                                        <option value="50-100">$50 - $100</option>
                                        <option value="over-100">Over $100</option>
                                    </select>
                                </div>

                                {/* Clear Filters */}
                                <Button
                                    variant="outline"
                                    onClick={clearFilters}
                                    className="w-full"
                                >
                                    Clear Filters
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Results Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                            <div>
                                <p className="text-gray-600">
                                    Showing {filteredAndSortedCourses.length} of {allCourses.length} courses
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-4 sm:mt-0">
                                {/* View Mode Toggle */}
                                <div className="flex items-center border rounded-lg p-1">
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
                                    >
                                        <Grid className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode('list')}
                                        className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
                                    >
                                        <List className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Sort Dropdown */}
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="popularity">Most Popular</option>
                                    <option value="rating">Highest Rated</option>
                                    <option value="newest">Newest</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                </select>
                            </div>
                        </div>

                        {/* Course Grid/List */}
                        {filteredAndSortedCourses.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                                    <Search className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
                                <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                                <Button onClick={clearFilters}>Clear all filters</Button>
                            </div>
                        ) : (
                            <div className={
                                viewMode === 'grid'
                                    ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-6'
                                    : 'space-y-6'
                            }>
                                {filteredAndSortedCourses.map((course: Course) => (
                                    <Link key={course.id} href={`/courses/${course.id}`}>
                                        <Card className={`hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer overflow-hidden ${viewMode === 'list' ? 'flex' : ''}`}>
                                            <div className={`relative ${viewMode === 'list' ? 'w-64 flex-shrink-0' : 'h-48'}`}>
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
                                            <CardContent className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-sm text-blue-600 font-medium capitalize">
                                                        {course.level}
                                                    </span>
                                                    <span className="text-gray-300">•</span>
                                                    <span className="text-sm text-gray-600">{course.duration}</span>
                                                </div>
                                                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{course.title}</h3>
                                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.shortDescription}</p>

                                                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                        <span className="font-medium">{course.rating}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Users className="w-4 h-4" />
                                                        <span>{formatNumber(course.studentsCount)}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{course.duration}</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        {course.originalPrice && course.originalPrice > course.price ? (
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-xl font-bold text-gray-900">
                                                                    {formatPrice(course.price)}
                                                                </span>
                                                                <span className="text-sm text-black line-through">
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
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}