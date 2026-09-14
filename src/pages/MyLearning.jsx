import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiRequest } from '../utils/api';
import {
  GraduationCap,
  Flame,
  Clock,
  Play,
  CheckCircle2,
  BookOpen,
  ArrowRight
} from 'lucide-react';

export default function MyLearning({ setActivePage, setSelectedTopicId }) {
  const { user, openAuthModal } = useAuth();
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMyLearning = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const res = await apiRequest('/enrollments');
      setEnrollments(res.enrollments || []);
    } catch (err) {
      console.error('Failed to fetch enrolled courses:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMyLearning();
  }, [user]);

  const handleContinueLearning = async (courseId, category) => {
    if (category === 'DSA') {
      setActivePage('dsapatterns');
      return;
    }

    try {
      // Find next incomplete topic for this course
      const courseRes = await apiRequest(`/courses/${courseId}`);
      const topics = courseRes.topics || [];
      const progRes = await apiRequest('/progress');
      const coursesProg = progRes.courses || [];
      const courseStat = coursesProg.find(c => c.course_id === courseId);

      if (topics.length > 0) {
        setSelectedTopicId(topics[0].id);
        setActivePage('topic');
      }
    } catch (e) {
      setActivePage('topic');
    }
  };

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-4">
        <GraduationCap className="w-12 h-12 text-cyan-400 mx-auto" />
        <h2 className="text-2xl font-extrabold text-white">Sign In to View My Learning</h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Sign in to access your enrolled courses, daily goal progress, and per-course streak tracking.
        </p>
        <button
          onClick={() => openAuthModal('login')}
          className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:opacity-90 transition-all"
        >
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* PAGE HEADER */}
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider mb-2">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Active Learning Journey</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">My Enrolled Courses</h1>
        <p className="text-slate-400 text-sm mt-1">
          Continue where you left off, track per-course streaks, and achieve daily targets.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((n) => (
            <div key={n} className="h-48 rounded-3xl bg-slate-900/60 border border-slate-800 animate-pulse"></div>
          ))}
        </div>
      ) : enrollments.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4 max-w-lg mx-auto">
          <BookOpen className="w-12 h-12 text-cyan-400 mx-auto" />
          <h3 className="text-xl font-bold text-white">No Enrolled Courses Yet</h3>
          <p className="text-xs text-slate-400">
            Browse our placement curriculum and enroll in Aptitude, DSA, or Programming courses to start tracking your streak.
          </p>
          <button
            onClick={() => setActivePage('courses')}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold text-sm hover:opacity-90 shadow-md shadow-cyan-500/20 transition-all"
          >
            Explore Courses
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {enrollments.map((env) => (
            <div
              key={env.id}
              className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-400 uppercase tracking-wider">
                    {env.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-white mt-1.5">{env.course_title}</h3>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>🔥 {env.current_streak || 0} Day Streak</span>
                </div>
              </div>

              {/* PROGRESS METER */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-400">Course Progress</span>
                  <span className="text-cyan-400 font-bold">{env.progress_percentage}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-950 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 transition-all duration-300"
                    style={{ width: `${env.progress_percentage}%` }}
                  ></div>
                </div>
              </div>

              {/* DAILY GOAL & TIME COMPLETED */}
              <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-950 p-3 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Daily Goal: <strong className="text-white">{env.daily_goal_minutes} min/day</strong></span>
                </div>
                <span className="text-slate-400">
                  Completed: <strong className="text-teal-400">{env.completed_topics_count} topics</strong>
                </span>
              </div>

              {/* CONTINUE LEARNING BUTTON */}
              <button
                onClick={() => handleContinueLearning(env.course_id, env.category)}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-extrabold text-sm hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Continue Learning</span>
              </button>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
