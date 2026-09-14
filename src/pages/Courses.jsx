import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiRequest } from '../utils/api';
import {
  BookOpen,
  Calculator,
  Code2,
  Terminal,
  CheckCircle2,
  Clock,
  Zap,
  Trash2,
  X,
  ArrowRight
} from 'lucide-react';

export default function Courses({ setActivePage, setSelectedTopicId }) {
  const { user, openAuthModal } = useAuth();

  const [courses, setCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [loading, setLoading] = useState(true);

  // Goal Modal State
  const [enrollingCourse, setEnrollingCourse] = useState(null);
  const [selectedMinutes, setSelectedMinutes] = useState(30);

  const loadCoursesData = async () => {
    try {
      setLoading(true);
      const coursesRes = await apiRequest('/courses');
      setCourses(coursesRes.courses || []);

      if (user) {
        const envRes = await apiRequest('/enrollments');
        setEnrollments(envRes.enrollments || []);
      }
    } catch (err) {
      console.error('Failed to load courses:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCoursesData();
  }, [user]);

  const enrolledCourseIds = new Set(enrollments.map(e => e.course_id));

  const handleEnrollClick = (course) => {
    if (!user) {
      openAuthModal('register');
      return;
    }
    setEnrollingCourse(course);
    setSelectedMinutes(30);
  };

  const confirmEnrollment = async () => {
    if (!enrollingCourse) return;
    try {
      await apiRequest('/enrollments/enroll', 'POST', {
        courseId: enrollingCourse.id,
        dailyGoalMinutes: selectedMinutes
      });
      setEnrollingCourse(null);
      await loadCoursesData();
    } catch (err) {
      alert(err.message || 'Failed to enroll');
    }
  };

  const handleUnenroll = async (courseId) => {
    if (!window.confirm('Are you sure you want to unenroll from this course?')) return;
    try {
      await apiRequest(`/enrollments/${courseId}`, 'DELETE');
      await loadCoursesData();
    } catch (err) {
      console.error('Unenroll error:', err);
    }
  };

  const filteredCourses = courses.filter(c => {
    if (selectedCategory === 'ALL') return true;
    return c.category === selectedCategory;
  });

  const getCourseIcon = (iconName) => {
    switch (iconName) {
      case 'Calculator': return <Calculator className="w-6 h-6 text-cyan-400" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-purple-400" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-teal-400" />;
      default: return <BookOpen className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* PAGE HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Structured Curriculum</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Placement Courses</h1>
          <p className="text-slate-400 text-sm mt-1">
            Enroll in structured learning paths for Aptitude, DSA, and Programming Languages.
          </p>
        </div>

        {/* CATEGORY FILTER BUTTONS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {['ALL', 'APTITUDE', 'DSA', 'PROGRAMMING'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* COURSES CATALOG GRID */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="h-64 rounded-3xl bg-slate-900/60 border border-slate-800 animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const isEnrolled = enrolledCourseIds.has(course.id);
            const userEnv = enrollments.find(e => e.course_id === course.id);

            return (
              <div
                key={course.id}
                className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                      {getCourseIcon(course.icon)}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700">
                      {course.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-2">{course.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">{course.description}</p>
                  
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                    <span>📚 {course.total_topics} Topics</span>
                    <span>•</span>
                    <span>⚡ {course.level}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  {isEnrolled ? (
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Enrolled ({userEnv ? userEnv.daily_goal_minutes : 30}m/day)
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            if (course.category === 'DSA') {
                              setActivePage('dsapatterns');
                            } else {
                              setSelectedTopicId(course.id === 'python-programming' ? 'python-basics' : 'quant-number-system');
                              setActivePage('topic');
                            }
                          }}
                          className="px-3 py-1.5 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold hover:opacity-90 transition-all"
                        >
                          Learn Now
                        </button>
                        <button
                          onClick={() => handleUnenroll(course.id)}
                          className="p-1.5 rounded-xl text-rose-400 hover:bg-rose-500/10 transition-colors"
                          title="Unenroll"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleEnrollClick(course)}
                      className="w-full py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-xs hover:bg-cyan-500 hover:text-slate-950 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Enroll In Course</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* DAILY GOAL MODAL */}
      {enrollingCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-2xl text-slate-100">
            <button
              onClick={() => setEnrollingCourse(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-white">Set Daily Learning Goal</h3>
              <p className="text-xs text-slate-400 mt-1">
                How much time can you spend learning <span className="text-cyan-400 font-bold">{enrollingCourse.title}</span> every day?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[10, 20, 30, 60].map((min) => (
                <button
                  key={min}
                  onClick={() => setSelectedMinutes(min)}
                  className={`p-4 rounded-2xl border text-center transition-all ${
                    selectedMinutes === min
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400 font-extrabold'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <p className="text-lg font-black">{min} Mins</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Per day target</p>
                </button>
              ))}
            </div>

            <button
              onClick={confirmEnrollment}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold text-sm hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all"
            >
              Confirm Enrollment & Generate Plan
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
