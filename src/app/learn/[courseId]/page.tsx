'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { getCourseById } from '@/data/courses';
import { useAuth } from '@/contexts/AuthContext';
import {
    Play,
    Pause,
    SkipBack,
    SkipForward,
    Volume2,
    Settings,
    Maximize,
    CheckCircle,
    FileText,
    Download,
    MessageSquare,
    Clock,
    Star,
    ChevronLeft,
    ChevronRight,
    Menu
} from 'lucide-react';

export default function LearnPage() {
    const params = useParams();
    const courseId = params.courseId as string;
    const { user } = useAuth();
    const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
    const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);

    const course = getCourseById(courseId);

    if (!course) {
        return (
            <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
                    <p className="text-gray-400 mb-8">The course you&apos;re looking for doesn&apos;t exist.</p>
                    <Link href="/dashboard">
                        <Button>Back to Dashboard</Button>
                    </Link>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
                    <p className="text-gray-400 mb-8">Please log in to access this course.</p>
                    <Link href="/auth/login">
                        <Button>Login</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const currentModule = course.modules[currentModuleIndex];
    const currentLesson = currentModule?.lessons[currentLessonIndex];
    const totalLessons = course.modules.reduce((sum, module) => sum + module.lessons.length, 0);
    const currentLessonNumber = course.modules
        .slice(0, currentModuleIndex)
        .reduce((sum, module) => sum + module.lessons.length, 0) + currentLessonIndex + 1;

    const progress = (completedLessons.length / totalLessons) * 100;

    const markLessonComplete = () => {
        if (currentLesson && !completedLessons.includes(currentLesson.id)) {
            setCompletedLessons([...completedLessons, currentLesson.id]);
        }
    };

    const goToNextLesson = () => {
        if (currentLessonIndex < currentModule.lessons.length - 1) {
            setCurrentLessonIndex(currentLessonIndex + 1);
        } else if (currentModuleIndex < course.modules.length - 1) {
            setCurrentModuleIndex(currentModuleIndex + 1);
            setCurrentLessonIndex(0);
        }
    };

    const goToPreviousLesson = () => {
        if (currentLessonIndex > 0) {
            setCurrentLessonIndex(currentLessonIndex - 1);
        } else if (currentModuleIndex > 0) {
            setCurrentModuleIndex(currentModuleIndex - 1);
            setCurrentLessonIndex(course.modules[currentModuleIndex - 1].lessons.length - 1);
        }
    };

    const selectLesson = (moduleIndex: number, lessonIndex: number) => {
        setCurrentModuleIndex(moduleIndex);
        setCurrentLessonIndex(lessonIndex);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex">
            {/* Sidebar */}
            <div className={`bg-gray-800 transition-all duration-300 ${showSidebar ? 'w-80' : 'w-0'} overflow-hidden`}>
                <div className="p-4 border-b border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold truncate">{course.title}</h2>
                        <button
                            onClick={() => setShowSidebar(false)}
                            className="p-1 hover:bg-gray-700 rounded"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Progress */}
                    <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{Math.round(progress)}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                            {completedLessons.length} of {totalLessons} lessons completed
                        </p>
                    </div>
                </div>

                {/* Course Navigation */}
                <div className="flex-1 overflow-y-auto">
                    {course.modules.map((module, moduleIndex) => (
                        <div key={module.id} className="border-b border-gray-700">
                            <div className="p-4 bg-gray-750">
                                <h3 className="font-semibold text-sm">{module.title}</h3>
                                <p className="text-xs text-gray-400">{module.lessons.length} lessons • {module.duration}</p>
                            </div>
                            <div className="space-y-1">
                                {module.lessons.map((lesson, lessonIndex) => {
                                    const isActive = moduleIndex === currentModuleIndex && lessonIndex === currentLessonIndex;
                                    const isCompleted = completedLessons.includes(lesson.id);

                                    return (
                                        <button
                                            key={lesson.id}
                                            onClick={() => selectLesson(moduleIndex, lessonIndex)}
                                            className={`w-full text-left p-3 hover:bg-gray-700 transition-colors ${isActive ? 'bg-blue-600 hover:bg-blue-700' : ''
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="flex-shrink-0">
                                                    {isCompleted ? (
                                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                                    ) : lesson.type === 'quiz' ? (
                                                        <FileText className="w-4 h-4 text-gray-400" />
                                                    ) : (
                                                        <Play className="w-4 h-4 text-gray-400" />
                                                    )}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium truncate">{lesson.title}</p>
                                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                                        <Clock className="w-3 h-3" />
                                                        <span>{lesson.duration}</span>
                                                        {lesson.type === 'quiz' && (
                                                            <span className="bg-yellow-600 px-2 py-0.5 rounded text-xs">Quiz</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="bg-gray-800 border-b border-gray-700 p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            {!showSidebar && (
                                <button
                                    onClick={() => setShowSidebar(true)}
                                    className="p-2 hover:bg-gray-700 rounded"
                                >
                                    <Menu className="w-5 h-5" />
                                </button>
                            )}
                            <div>
                                <h1 className="text-lg font-semibold">{currentLesson?.title}</h1>
                                <p className="text-sm text-gray-400">
                                    Lesson {currentLessonNumber} of {totalLessons} • {currentModule?.title}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={markLessonComplete}
                                disabled={completedLessons.includes(currentLesson?.id || '')}
                            >
                                {completedLessons.includes(currentLesson?.id || '') ? (
                                    <>
                                        <CheckCircle className="w-4 h-4 mr-2" />
                                        Completed
                                    </>
                                ) : (
                                    'Mark Complete'
                                )}
                            </Button>
                            <Link href={`/courses/${courseId}`}>
                                <Button variant="outline" size="sm">
                                    Course Info
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Video Player */}
                <div className="flex-1 bg-black relative">
                    <div className="aspect-video bg-gray-900 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <Play className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{currentLesson?.title}</h3>
                            <p className="text-gray-400 mb-4">Video content would be loaded here</p>
                            <Button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="bg-blue-600 hover:bg-blue-700"
                            >
                                {isPlaying ? (
                                    <>
                                        <Pause className="w-4 h-4 mr-2" />
                                        Pause
                                    </>
                                ) : (
                                    <>
                                        <Play className="w-4 h-4 mr-2" />
                                        Play
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>

                    {/* Video Controls */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={goToPreviousLesson}
                                className="p-2 hover:bg-gray-700 rounded"
                                disabled={currentModuleIndex === 0 && currentLessonIndex === 0}
                            >
                                <SkipBack className="w-5 h-5" />
                            </button>

                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full"
                            >
                                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                            </button>

                            <button
                                onClick={goToNextLesson}
                                className="p-2 hover:bg-gray-700 rounded"
                                disabled={currentModuleIndex === course.modules.length - 1 && currentLessonIndex === currentModule.lessons.length - 1}
                            >
                                <SkipForward className="w-5 h-5" />
                            </button>

                            <div className="flex-1">
                                <div className="w-full bg-gray-700 rounded-full h-1">
                                    <div className="bg-blue-600 h-1 rounded-full" style={{ width: '25%' }}></div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Volume2 className="w-5 h-5" />
                                <Settings className="w-5 h-5" />
                                <Maximize className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lesson Content */}
                <div className="bg-gray-800 p-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="md:col-span-2">
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-xl font-semibold mb-4">About this lesson</h2>
                                        <p className="text-gray-300">
                                            This lesson covers important concepts that will help you understand the fundamentals.
                                            Make sure to take notes and practice the examples shown in the video.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Resources</h3>
                                        <div className="space-y-2">
                                            <button className="flex items-center gap-3 p-3 bg-gray-700 hover:bg-gray-600 rounded-lg w-full text-left">
                                                <Download className="w-4 h-4" />
                                                <span>Download lesson slides (PDF)</span>
                                            </button>
                                            <button className="flex items-center gap-3 p-3 bg-gray-700 hover:bg-gray-600 rounded-lg w-full text-left">
                                                <FileText className="w-4 h-4" />
                                                <span>Exercise files</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Card className="bg-gray-700 border-gray-600">
                                    <CardContent className="p-4">
                                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Actions</h3>
                                        <div className="space-y-3">
                                            <Button
                                                onClick={markLessonComplete}
                                                className="w-full"
                                                disabled={completedLessons.includes(currentLesson?.id || '')}
                                            >
                                                {completedLessons.includes(currentLesson?.id || '') ? 'Completed' : 'Mark Complete'}
                                            </Button>
                                            <Button variant="outline" className="w-full">
                                                <MessageSquare className="w-4 h-4 mr-2" />
                                                Ask Question
                                            </Button>
                                            <Button variant="outline" className="w-full">
                                                <Star className="w-4 h-4 mr-2" />
                                                Rate Lesson
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="mt-6">
                                    <h4 className="font-semibold mb-3">Navigation</h4>
                                    <div className="flex gap-2">
                                        <Button
                                            onClick={goToPreviousLesson}
                                            variant="outline"
                                            size="sm"
                                            disabled={currentModuleIndex === 0 && currentLessonIndex === 0}
                                        >
                                            <ChevronLeft className="w-4 h-4 mr-1" />
                                            Previous
                                        </Button>
                                        <Button
                                            onClick={goToNextLesson}
                                            variant="outline"
                                            size="sm"
                                            disabled={currentModuleIndex === course.modules.length - 1 && currentLessonIndex === currentModule.lessons.length - 1}
                                        >
                                            Next
                                            <ChevronRight className="w-4 h-4 ml-1" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}