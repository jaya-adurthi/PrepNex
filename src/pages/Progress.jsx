import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiRequest } from '../utils/api';
import {
  BarChart2,
  TrendingUp,
  Flame,
  CheckCircle,
  AlertTriangle,
  Award,
  Sparkles,
  BookOpen,
  ArrowRight
} from 'lucide-react';

export default function Progress({ setActivePage, setSelectedTopicId }) {
  const { user } = useAuth();
  const [progressData, setProgressData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProgress() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const res = await apiRequest('/progress');
        setProgressData(res);
      } catch (err) {
        console.error('Failed to load progress:', err);
      } finally {
        setLoading(false);
      }
    }

    loadProgress();
  }, [user]);

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-4">
        <BarChart2 className="w-12 h-12 text-cyan-400 mx-auto" />
        <h2 className="text-2xl font-extrabold text-white">Sign In to View Progress Analytics</h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Detailed analytics, course progress, weak areas, and quiz history require an active account.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-6 animate-pulse">
        <div className="h-32 rounded-3xl bg-slate-900"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64 rounded-3xl bg-slate-900"></div>
          <div className="h-64 rounded-3xl bg-slate-900"></div>
        </div>
      </div>
    );
  }

  const overallPercentage = progressData ? progressData.overall_percentage || 0 : 0;
  const coursesList = progressData ? progressData.courses || [] : [];
  const weakAreas = progressData ? progressData.weak_areas || [] : [];
  const strengths = progressData ? progressData.strengths || [] : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* PAGE HEADER */}
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider mb-2">
          <BarChart2 className="w-3.5 h-3.5" />
          <span>Performance & Analytics</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">Learning Progress Dashboard</h1>
        <p className="text-slate-400 text-sm mt-1">
          Detailed analytics on your course completion, quiz performance, strengths, and weak areas.
        </p>
      </div>

      {/* TOP SUMMARY METRICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Overall Progress</p>
          <p className="text-3xl font-black text-white">{overallPercentage}%</p>
          <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 transition-all duration-300"
              style={{ width: `${overallPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Completed Topics</p>
          <p className="text-3xl font-black text-teal-400">
            {progressData ? progressData.total_completed_topics : 0}
          </p>
          <p className="text-xs text-slate-400">Across enrolled courses</p>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Current Streak</p>
          <p className="text-3xl font-black text-amber-400">
            🔥 {progressData ? progressData.current_streak : 0} Days
          </p>
          <p className="text-xs text-slate-400">Longest: {progressData ? progressData.longest_streak : 0} days</p>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Enrolled Courses</p>
          <p className="text-3xl font-black text-purple-400">
            {progressData ? progressData.total_enrolled_courses : 0}
          </p>
          <p className="text-xs text-slate-400">Active learning paths</p>
        </div>

      </div>

      {/* COURSE-WISE PROGRESS BREAKDOWN */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
        <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-cyan-400" />
          <span>Course-Wise Completion</span>
        </h2>

        {coursesList.length === 0 ? (
          <p className="text-xs text-slate-400">No active course enrollments. Enroll in courses to track progress here.</p>
        ) : (
          <div className="space-y-4">
            {coursesList.map((course) => (
              <div key={course.course_id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-100">{course.course_title}</span>
                  <span className="text-cyan-400">{course.percentage}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-900 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 transition-all duration-300"
                    style={{ width: `${course.percentage}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Completed: {course.completed_topics} / {course.total_topics} topics</span>
                  <span>Category: {course.category}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* STRENGTHS & WEAK AREAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* STRENGTHS */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
          <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-teal-400" />
            <span>Mastered Topics & Strengths</span>
          </h2>

          {strengths.length === 0 ? (
            <p className="text-xs text-slate-400">Complete topic quizzes with 80%+ score to highlight your strengths here.</p>
          ) : (
            <div className="space-y-2">
              {strengths.map((st, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">{st.topic_title}</p>
                    <p className="text-[10px] text-slate-400">{st.course_title}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/30 text-xs font-bold">
                    {st.score}%
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* WEAK AREAS */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
          <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <span>Weak Areas Needing Revision</span>
          </h2>

          {weakAreas.length === 0 ? (
            <p className="text-xs text-slate-400">No weak areas identified! All completed quizzes are above passing threshold.</p>
          ) : (
            <div className="space-y-2">
              {weakAreas.map((wa, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">{wa.topic_title}</p>
                    <p className="text-[10px] text-slate-400">{wa.course_title}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold">
                      {wa.score}%
                    </span>
                    <button
                      onClick={() => {
                        setSelectedTopicId(wa.topic_id);
                        setActivePage('topic');
                      }}
                      className="px-3 py-1 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold hover:opacity-90 transition-all"
                    >
                      Revise
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
