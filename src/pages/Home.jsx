import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiRequest } from '../utils/api';
import {
  Flame,
  Clock,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Calculator,
  Code2,
  Terminal,
  Sparkles,
  Play,
  CheckSquare,
  Square,
  Zap,
  BookOpen,
  Award
} from 'lucide-react';

export default function Home({ setActivePage, setSelectedTopicId }) {
  const { user, openAuthModal } = useAuth();

  const [todos, setTodos] = useState([]);
  const [todoSummary, setTodoSummary] = useState({ total_tasks: 0, completed_tasks: 0, total_minutes: 0, completed_minutes: 0, progress_percentage: 0 });
  const [enrollments, setEnrollments] = useState([]);
  const [progressData, setProgressData] = useState(null);
  const [streaksData, setStreaksData] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadDashboardData = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const [todosRes, envRes, progRes, streakRes] = await Promise.all([
        apiRequest('/todos'),
        apiRequest('/enrollments'),
        apiRequest('/progress'),
        apiRequest('/streaks')
      ]);

      setTodos(todosRes.todos || []);
      setTodoSummary(todosRes.summary || {});
      setEnrollments(envRes.enrollments || []);
      setProgressData(progRes || {});
      setStreaksData(streakRes || {});
    } catch (err) {
      console.error('Failed to load dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, [user]);

  const handleToggleTodo = async (todoId) => {
    try {
      await apiRequest(`/todos/${todoId}/complete`, 'POST');
      loadDashboardData();
    } catch (err) {
      console.error('Failed to complete todo:', err);
    }
  };

  const currentStreak = streaksData ? streaksData.global_current_streak || 0 : 0;
  const overallProgress = progressData ? progressData.overall_percentage || 0 : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* WELCOME BANNER */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-slate-800 p-6 sm:p-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Placement Preparation Hub</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {user ? `Welcome back, ${user.name} 👋` : 'Welcome to PrepNex 👋'}
            </h1>
            <p className="text-slate-400 text-sm sm:text-base mt-1.5 max-w-xl">
              “Prepare Today. Step Into Your Future.” Practice Aptitude, DSA, Programming Languages and Mock Interviews in one seamless platform.
            </p>
          </div>

          {!user && (
            <div className="flex items-center gap-3">
              <button
                onClick={() => openAuthModal('register')}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold text-sm hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all"
              >
                Get Started Free
              </button>
            </div>
          )}
        </div>
      </div>

      {/* DASHBOARD STATS ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* CURRENT STREAK CARD */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Current Streak</p>
            <p className="text-2xl font-black text-white mt-1">🔥 {currentStreak} Days</p>
            <p className="text-xs text-amber-400 font-semibold mt-1">Active daily learning</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <Flame className="w-6 h-6" />
          </div>
        </div>

        {/* TODAY'S LEARNING GOAL */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Today's Goal</p>
            <p className="text-2xl font-black text-white mt-1">
              ⏱️ {todoSummary.completed_minutes || 0} / {todoSummary.total_minutes || 30} min
            </p>
            <p className="text-xs text-cyan-400 font-semibold mt-1">Minutes completed</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Clock className="w-6 h-6" />
          </div>
        </div>

        {/* TODAY'S TODO TASKS */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Today's Todo</p>
            <p className="text-2xl font-black text-white mt-1">
              ✅ {todoSummary.completed_tasks || 0} / {todoSummary.total_tasks || 0} completed
            </p>
            <p className="text-xs text-teal-400 font-semibold mt-1">Personalized tasks</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
            <CheckCircle className="w-6 h-6" />
          </div>
        </div>

        {/* OVERALL PROGRESS */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Overall Progress</p>
            <p className="text-2xl font-black text-white mt-1">📈 {overallProgress}%</p>
            <p className="text-xs text-purple-400 font-semibold mt-1">Syllabus completion</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* PERSONALIZED DAILY TODO PLAN SECTION */}
      {user && (
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>Today's Personalized Learning Plan</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Auto-generated based on your enrolled courses, target time, and weak areas.
              </p>
            </div>
            <div className="text-xs font-bold px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              {todoSummary.progress_percentage}% Done
            </div>
          </div>

          {/* PROGRESS BAR */}
          <div className="w-full h-2.5 rounded-full bg-slate-950 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 transition-all duration-300"
              style={{ width: `${todoSummary.progress_percentage}%` }}
            ></div>
          </div>

          {/* TODO ITEMS LIST */}
          {todos.length === 0 ? (
            <div className="p-6 text-center rounded-2xl bg-slate-950/60 border border-slate-800 text-slate-400 space-y-3">
              <BookOpen className="w-8 h-8 text-cyan-400 mx-auto" />
              <p className="text-sm font-semibold text-slate-300">No active todos for today yet!</p>
              <p className="text-xs text-slate-400">Enroll in a course from the Courses page to generate your custom daily plan.</p>
              <button
                onClick={() => setActivePage('courses')}
                className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold hover:bg-cyan-500/20 transition-colors"
              >
                Browse Courses & Enroll
              </button>
            </div>
          ) : (
            <div className="space-y-2.5 pt-2">
              {todos.map((t) => (
                <div
                  key={t.id}
                  onClick={() => handleToggleTodo(t.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    t.completed === 1
                      ? 'bg-slate-950/40 border-slate-800/60 text-slate-500 line-through'
                      : t.task_type === 'revision'
                      ? 'bg-amber-950/20 border-amber-500/40 text-slate-100 hover:border-amber-500'
                      : 'bg-slate-950 border-slate-800 text-slate-100 hover:border-cyan-500/50'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {t.completed === 1 ? (
                      <CheckSquare className="w-5 h-5 text-teal-400 shrink-0" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-500 shrink-0" />
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm">{t.title}</span>
                        {t.task_type === 'revision' && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                            REVISION REQUIRED
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-400">
                          {t.course_title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{t.description}</p>
                    </div>
                  </div>

                  <div className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    ⏳ {t.estimated_minutes} min
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* FOUR MAJOR FEATURE CARDS */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-extrabold text-white">Placement Learning Modules</h2>
            <p className="text-xs text-slate-400">Explore comprehensive learning paths designed for top tech interviews.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* CARD 1: APTITUDE */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-4 group">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                <Calculator className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-300">
                29 Topics
              </span>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                APTITUDE & REASONING
              </h3>
              <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                Master quantitative aptitude, logical reasoning and verbal ability. Formulas, rules, solved examples & timed tests.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-semibold">Quant • Logical • Verbal</span>
              <button
                onClick={() => {
                  window.location.hash = 'aptitude';
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold hover:bg-cyan-500 hover:text-slate-950 transition-all"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* CARD 2: PROGRAMMING */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-teal-500/40 transition-all duration-300 space-y-4 group">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center">
                <Terminal className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-300">
                4 Languages
              </span>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-white group-hover:text-teal-400 transition-colors">
                PROGRAMMING LANGUAGES
              </h3>
              <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                Learn Python, Java, C and HTML/CSS from basics to advanced. Code snippets, interactive runner & assessments.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-semibold">Python • Java • C • HTML/CSS</span>
              <button
                onClick={() => {
                  window.location.hash = 'programming-languages';
                  setActivePage('courses');
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold hover:bg-teal-500 hover:text-slate-950 transition-all"
              >
                <span>Explore Languages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* CARD 3: DSA PATTERNS */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 space-y-4 group">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30">
                Pattern-Based
              </span>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-white group-hover:text-purple-400 transition-colors">
                DATA STRUCTURES & ALGORITHMS
              </h3>
              <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                Master data structures and algorithm patterns (Two Pointers, Sliding Window, Prefix Sum, Kadane's, DP) with LeetCode practice integration.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-semibold">Two Pointers • Sliding Window • DP</span>
              <button
                onClick={() => setActivePage('dsapatterns')}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold hover:bg-purple-500 hover:text-slate-950 transition-all"
              >
                <span>DSA Patterns</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* CARD 4: MOCK INTERVIEW */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 space-y-4 group">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                25 Min Real Simulation
              </span>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-white group-hover:text-amber-400 transition-colors">
                MOCK INTERVIEW ENGINE
              </h3>
              <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                Practice Technical, DSA/Coding, and HR interview rounds tailored to your role & target tech stack. Complete report analysis.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-semibold">Technical • Coding • HR Rounds</span>
              <button
                onClick={() => setActivePage('mockinterview')}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold hover:bg-amber-500 hover:text-slate-950 transition-all"
              >
                <span>Start Interview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
