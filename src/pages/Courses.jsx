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
  ArrowRight,
  ChevronRight,
  Code,
  Sparkles,
  Layers
} from 'lucide-react';

export default function Courses({ setActivePage, setSelectedTopicId }) {
  const { user, openAuthModal } = useAuth();

  const [courses, setCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('PROGRAMMING'); // Default to PROGRAMMING so user can choose language right away!
  const [loading, setLoading] = useState(true);

  // Selected Language state
  const [selectedLangId, setSelectedLangId] = useState('python-programming');
  const [langTopics, setLangTopics] = useState([]);
  const [loadingTopics, setLoadingTopics] = useState(false);

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

  const loadLangTopics = async (courseId) => {
    try {
      setLoadingTopics(true);
      const res = await apiRequest(`/courses/${courseId}`);
      setLangTopics(res.topics || []);
    } catch (err) {
      console.error('Failed to load course topics:', err);
      setLangTopics([]);
    } finally {
      setLoadingTopics(false);
    }
  };

  useEffect(() => {
    loadCoursesData();
  }, [user]);

  useEffect(() => {
    if (selectedLangId) {
      loadLangTopics(selectedLangId);
    }
  }, [selectedLangId]);

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

  const handleLearnCourse = async (courseId, category) => {
    if (category === 'DSA') {
      setActivePage('dsapatterns');
      return;
    }
    if (category === 'APTITUDE') {
      setActivePage('aptitude');
      return;
    }

    try {
      const res = await apiRequest(`/courses/${courseId}`);
      const topics = res.topics || [];
      if (topics.length > 0) {
        setSelectedTopicId(topics[0].id);
        setActivePage('topic');
      }
    } catch (err) {
      setSelectedTopicId('python-basics');
      setActivePage('topic');
    }
  };

  const programmingLanguages = [
    { id: 'python-programming', name: 'Python', icon: '🐍', color: 'from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-400', badge: 'Popular' },
    { id: 'java-programming', name: 'Java', icon: '☕', color: 'from-orange-500/20 to-amber-500/10 border-orange-500/30 text-orange-400', badge: 'Core OOP' },
    { id: 'c-programming', name: 'C Language', icon: '⚡', color: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400', badge: 'Low-Level' },
    { id: 'html-css-web', name: 'HTML & CSS', icon: '🎨', color: 'from-pink-500/20 to-rose-500/10 border-pink-500/30 text-pink-400', badge: 'Web Dev' },
    { id: 'javascript-programming', name: 'JavaScript', icon: '💻', color: 'from-yellow-500/20 to-amber-500/10 border-yellow-500/30 text-yellow-400', badge: 'Modern ES6+' },
    { id: 'sql-database', name: 'SQL & DB', icon: '🗄️', color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400', badge: 'Database' }
  ];

  const selectedLangCourse = courses.find(c => c.id === selectedLangId) || courses.find(c => c.category === 'PROGRAMMING');
  const isSelectedLangEnrolled = selectedLangCourse ? enrolledCourseIds.has(selectedLangCourse.id) : false;

  const filteredCourses = courses.filter(c => {
    if (selectedCategory === 'ALL') return true;
    return c.category === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* PAGE HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Structured Curriculum</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Placement Courses & Languages</h1>
          <p className="text-slate-400 text-sm mt-1">
            Choose a programming language or course to explore structured line-by-line topic roadmaps.
          </p>
        </div>

        {/* CATEGORY FILTER BUTTONS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {[
            { id: 'PROGRAMMING', label: '💻 PROGRAMMING' },
            { id: 'APTITUDE', label: '🧮 APTITUDE' },
            { id: 'DSA', label: '⚡ DSA' },
            { id: 'ALL', label: '📚 ALL COURSES' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* PROGRAMMING LANGUAGE SELECTOR SECTION */}
      {selectedCategory === 'PROGRAMMING' && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-black text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span>Select Programming Language:</span>
            </h2>
            <p className="text-xs text-slate-400">
              Click any language below to view its line-by-line topic sequence, code examples, and practice quizzes.
            </p>
          </div>

          {/* LANGUAGE CARDS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
            {programmingLanguages.map((lang) => {
              const isSelected = selectedLangId === lang.id;
              return (
                <button
                  key={lang.id}
                  onClick={() => setSelectedLangId(lang.id)}
                  className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? `bg-gradient-to-br ${lang.color} border-cyan-400 ring-2 ring-cyan-500/50 shadow-xl scale-105`
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{lang.icon}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-950/80 text-cyan-400 border border-slate-800">
                      {lang.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-white">{lang.name}</h3>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-medium">
                      {isSelected ? '✓ Selected' : 'Click to view'}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* SELECTED LANGUAGE TOPIC ROADMAP (LINE-BY-LINE) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6 shadow-2xl">
            {selectedLangCourse && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                      {selectedLangCourse.title}
                    </span>
                    <span className="text-xs text-slate-400">• {langTopics.length} Topics Line-by-Line</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mt-1">{selectedLangCourse.title} Topic Roadmap</h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-2xl">{selectedLangCourse.description}</p>
                </div>

                <div className="flex items-center gap-3">
                  {isSelectedLangEnrolled ? (
                    <span className="px-4 py-2 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      Enrolled in {selectedLangCourse.title}
                    </span>
                  ) : (
                    <button
                      onClick={() => handleEnrollClick(selectedLangCourse)}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 text-xs font-extrabold hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2"
                    >
                      <span>Enroll in {selectedLangCourse.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* TOPICS LIST (LINE BY LINE) */}
            {loadingTopics ? (
              <div className="space-y-3">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="h-16 rounded-2xl bg-slate-950 animate-pulse"></div>
                ))}
              </div>
            ) : langTopics.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-xs">
                No topics found for this language.
              </div>
            ) : (
              <div className="space-y-3">
                {langTopics.map((topic, index) => (
                  <div
                    key={topic.id}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      {/* Topic Number Badge */}
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 font-black text-sm flex items-center justify-center shrink-0 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors">
                        {index + 1}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                            {topic.title}
                          </h4>
                          <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                            topic.difficulty === 'Easy' ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' :
                            topic.difficulty === 'Hard' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                            'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          }`}>
                            {topic.difficulty || 'Easy'}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-1">{topic.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                      <span className="text-[11px] text-slate-500 font-semibold flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {topic.estimated_minutes} mins
                      </span>

                      <button
                        onClick={() => {
                          setSelectedTopicId(topic.id);
                          setActivePage('topic');
                        }}
                        className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold hover:bg-cyan-500 hover:text-slate-950 transition-all flex items-center gap-1.5"
                      >
                        <span>Learn Topic</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ALL COURSES CATALOG GRID (FOR ALL / APTITUDE / DSA) */}
      {selectedCategory !== 'PROGRAMMING' && (
        <>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
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
                        <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center font-bold text-cyan-400 text-xl">
                          {course.category === 'APTITUDE' ? '🧮' : course.category === 'DSA' ? '⚡' : '💻'}
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
                          <span className="px-3 py-1 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Enrolled ({userEnv ? userEnv.daily_goal_minutes : 30}m/day)
                          </span>
                          
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleLearnCourse(course.id, course.category)}
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
        </>
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
