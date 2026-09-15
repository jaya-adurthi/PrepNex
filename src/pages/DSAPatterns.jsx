import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { dsaTopics } from '../data/dsaData';
import {
  Code2,
  ExternalLink,
  Zap,
  CheckCircle2,
  Clock,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  Search,
  ChevronRight,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  Layers,
  Terminal,
  Cpu,
  X
} from 'lucide-react';

export default function DSAPatterns() {
  const { user } = useAuth();

  // Navigation State parsed from URL hash
  const [currentView, setCurrentView] = useState('ROADMAP'); // 'ROADMAP' | 'TOPIC' | 'PATTERN' | 'QUESTION'
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedPattern, setSelectedPattern] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Code Tab state for Pattern & Question Views
  const [codeLang, setCodeLang] = useState('python'); // 'python' | 'java' | 'cpp'

  // Search & Copy State
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  // Completed Question IDs (persisted)
  const [completedQuestions, setCompletedQuestions] = useState(new Set());

  // Load user completed questions
  useEffect(() => {
    const saved = localStorage.getItem('prepnex_dsa_completed');
    if (saved) {
      try {
        setCompletedQuestions(new Set(JSON.parse(saved)));
      } catch (e) {}
    }
  }, []);

  // ROUTE PARSER HELPER
  const parseRouteFromHash = () => {
    const rawHash = window.location.hash.replace('#', '');
    const cleanHash = rawHash.startsWith('/') ? rawHash.slice(1) : rawHash;
    const parts = cleanHash.split('/').filter(Boolean);

    // Default to main DSA Roadmap if hash is just 'dsa' or empty
    if (parts.length <= 1) {
      setCurrentView('ROADMAP');
      setSelectedTopic(null);
      setSelectedPattern(null);
      setSelectedQuestion(null);
      return;
    }

    const topicSlug = parts[1]; // e.g. 'arrays' or 'topic-arrays'
    const foundTopic = dsaTopics.find(t =>
      t.id === topicSlug ||
      t.id === `topic-${topicSlug}` ||
      t.name.toLowerCase().replace(/[^a-z0-9]/g, '') === topicSlug.replace(/[^a-z0-9]/g, '')
    );

    if (!foundTopic) {
      setCurrentView('ROADMAP');
      setSelectedTopic(null);
      setSelectedPattern(null);
      setSelectedQuestion(null);
      return;
    }

    setSelectedTopic(foundTopic);

    if (parts.length === 2) {
      setCurrentView('TOPIC');
      setSelectedPattern(null);
      setSelectedQuestion(null);
      return;
    }

    const patternSlug = parts[2]; // e.g. 'two-pointers' or 'pattern-two-pointers'
    const foundPattern = foundTopic.patterns?.find(p =>
      p.id === patternSlug ||
      p.id === `pattern-${patternSlug}` ||
      p.name.toLowerCase().replace(/[^a-z0-9]/g, '') === patternSlug.replace(/[^a-z0-9]/g, '')
    );

    if (!foundPattern) {
      setCurrentView('TOPIC');
      setSelectedPattern(null);
      setSelectedQuestion(null);
      return;
    }

    setSelectedPattern(foundPattern);

    if (parts.length === 3) {
      setCurrentView('PATTERN');
      setSelectedQuestion(null);
      return;
    }

    const questionSlug = parts[3]; // e.g. 'two-sum-ii' or 'q-two-sum-ii'
    const foundQuestion = foundPattern.questions?.find(q =>
      q.id === questionSlug ||
      q.id === `q-${questionSlug}` ||
      q.title.toLowerCase().replace(/[^a-z0-9]/g, '') === questionSlug.replace(/[^a-z0-9]/g, '')
    );

    if (foundQuestion) {
      setSelectedQuestion(foundQuestion);
      setCurrentView('QUESTION');
    } else {
      setCurrentView('PATTERN');
      setSelectedQuestion(null);
    }
  };

  // Sync route on mount and hash changes
  useEffect(() => {
    parseRouteFromHash();

    const handleHashChange = () => {
      parseRouteFromHash();
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  // NAVIGATE TO ROUTE
  const navigateTo = (path) => {
    window.location.hash = path;
  };

  // BACK BUTTON HANDLERS
  const handleGoBack = () => {
    if (currentView === 'QUESTION') {
      if (selectedTopic && selectedPattern) {
        const topicSlug = selectedTopic.id.replace('topic-', '');
        const patternSlug = selectedPattern.id.replace('pattern-', '');
        navigateTo(`dsa/${topicSlug}/${patternSlug}`);
      } else {
        navigateTo('dsa');
      }
    } else if (currentView === 'PATTERN') {
      if (selectedTopic) {
        const topicSlug = selectedTopic.id.replace('topic-', '');
        navigateTo(`dsa/${topicSlug}`);
      } else {
        navigateTo('dsa');
      }
    } else if (currentView === 'TOPIC') {
      navigateTo('dsa');
    } else {
      window.history.back();
    }
  };

  const toggleQuestionComplete = (qId) => {
    setCompletedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);

      localStorage.setItem('prepnex_dsa_completed', JSON.stringify(Array.from(next)));
      return next;
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Compute Progress Percentages
  const getTopicProgress = (topic) => {
    if (!topic.patterns || topic.patterns.length === 0) return 15;
    let totalQs = 0;
    let completedQs = 0;
    topic.patterns.forEach(p => {
      if (p.questions) {
        totalQs += p.questions.length;
        p.questions.forEach(q => {
          if (completedQuestions.has(q.id)) completedQs++;
        });
      }
    });
    return totalQs > 0 ? Math.round((completedQs / totalQs) * 100) : 20;
  };

  const getPatternProgress = (pattern) => {
    if (!pattern.questions || pattern.questions.length === 0) return 0;
    const completed = pattern.questions.filter(q => completedQuestions.has(q.id)).length;
    return Math.round((completed / pattern.questions.length) * 100);
  };

  const overallDsaProgress = Math.round(
    dsaTopics.reduce((acc, t) => acc + getTopicProgress(t), 0) / dsaTopics.length
  );

  const filteredTopics = dsaTopics.filter(t =>
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* TOP BAR: BREADCRUMBS & BACK BUTTON */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800/80">
        
        {/* CLICKABLE BREADCRUMBS */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 overflow-x-auto">
          <button
            onClick={() => navigateTo('dsa')}
            className={`hover:text-cyan-400 transition-colors font-bold ${currentView === 'ROADMAP' ? 'text-cyan-400' : ''}`}
          >
            DSA
          </button>

          {selectedTopic && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <button
                onClick={() => {
                  const topicSlug = selectedTopic.id.replace('topic-', '');
                  navigateTo(`dsa/${topicSlug}`);
                }}
                className={`hover:text-cyan-400 transition-colors font-bold ${currentView === 'TOPIC' ? 'text-cyan-400' : ''}`}
              >
                {selectedTopic.name}
              </button>
            </>
          )}

          {selectedPattern && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <button
                onClick={() => {
                  const topicSlug = selectedTopic.id.replace('topic-', '');
                  const patternSlug = selectedPattern.id.replace('pattern-', '');
                  navigateTo(`dsa/${topicSlug}/${patternSlug}`);
                }}
                className={`hover:text-cyan-400 transition-colors font-bold ${currentView === 'PATTERN' ? 'text-cyan-400' : ''}`}
              >
                {selectedPattern.name}
              </button>
            </>
          )}

          {selectedQuestion && currentView === 'QUESTION' && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span className="text-cyan-400 font-bold">{selectedQuestion.title}</span>
            </>
          )}
        </div>

        {/* EXPLICIT BACK BUTTON */}
        {currentView !== 'ROADMAP' && (
          <button
            onClick={handleGoBack}
            className="self-start sm:self-auto flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              {currentView === 'TOPIC' && 'Back to DSA'}
              {currentView === 'PATTERN' && `Back to ${selectedTopic ? selectedTopic.name : 'Topic'}`}
              {currentView === 'QUESTION' && `Back to ${selectedPattern ? selectedPattern.name : 'Pattern'}`}
            </span>
          </button>
        )}
      </div>

      {/* ================================================== */}
      {/* VIEW 1: MAIN DSA ROADMAP PAGE (16 TOPICS) */}
      {/* ================================================== */}
      {currentView === 'ROADMAP' && (
        <div className="space-y-8">
          
          {/* HEADER & OVERALL PROGRESS */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-purple-950/30 to-slate-900 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 text-xs font-bold uppercase tracking-wider mb-2">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Comprehensive Curriculum</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">Data Structures & Algorithms</h1>
                <p className="text-slate-400 text-sm mt-1">
                  Select a topic to explore pattern explanations, multi-language solutions, and practice problems.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-right shrink-0">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Overall DSA Progress</span>
                <p className="text-2xl font-black text-purple-400 mt-0.5">{overallDsaProgress}%</p>
              </div>
            </div>

            {/* SEARCH BAR */}
            <div className="relative pt-2">
              <Search className="absolute left-4 top-5 w-4 h-4 text-slate-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search DSA topics (e.g. Arrays, Trees, Dynamic Programming)..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* 16 TOPICS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTopics.map((topic, idx) => {
              const progress = getTopicProgress(topic);
              const topicSlug = topic.id.replace('topic-', '');

              return (
                <div
                  key={topic.id}
                  onClick={() => navigateTo(`dsa/${topicSlug}`)}
                  className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 cursor-pointer space-y-4 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center font-bold text-xs">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        {topic.total_patterns} Patterns • {topic.total_problems} Problems
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-white group-hover:text-purple-400 transition-colors">
                      {topic.name}
                    </h3>
                    <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] font-bold">
                        <span className="text-slate-400">Progress</span>
                        <span className="text-purple-400">{progress}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <button className="w-full py-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold group-hover:bg-purple-500 group-hover:text-slate-950 transition-all flex items-center justify-center gap-2">
                      <span>Explore Topic</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* ================================================== */}
      {/* VIEW 2: DEDICATED TOPIC PAGE (e.g. ARRAYS, STRINGS, GRAPH, ETC.) */}
      {/* ================================================== */}
      {currentView === 'TOPIC' && selectedTopic && (
        <div className="space-y-8">
          
          {/* TOPIC HEADER */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-400 border border-purple-500/30 uppercase tracking-wider">
                DSA Topic Module
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{selectedTopic.name}</h1>
            <p className="text-slate-300 text-sm leading-relaxed">{selectedTopic.description}</p>
          </div>

          {/* PATTERNS SECTION HEADER */}
          <div>
            <h2 className="text-xl font-extrabold text-white mb-1">Problem-Solving Patterns inside {selectedTopic.name}</h2>
            <p className="text-xs text-slate-400">Master the core algorithmic patterns for this topic.</p>
          </div>

          {/* PATTERN CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedTopic.patterns.map((pattern) => {
              const patProgress = getPatternProgress(pattern);
              const topicSlug = selectedTopic.id.replace('topic-', '');
              const patternSlug = pattern.id.replace('pattern-', '');

              return (
                <div
                  key={pattern.id}
                  className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300">
                        {pattern.subtitle || selectedTopic.name}
                      </span>
                      <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-lg">
                        {pattern.difficulty}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-white">{pattern.name}</h3>
                    <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">{pattern.what}</p>

                    <div className="mt-3 text-xs font-semibold text-slate-400">
                      <span>📝 {pattern.questions ? pattern.questions.length : 0} Practice Problems</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-slate-800">
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] font-bold">
                        <span className="text-slate-400">Pattern Progress</span>
                        <span className="text-cyan-400">{patProgress}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 transition-all duration-300"
                          style={{ width: `${patProgress}%` }}
                        ></div>
                      </div>
                    </div>

                    <button
                      onClick={() => navigateTo(`dsa/${topicSlug}/${patternSlug}`)}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-extrabold text-xs hover:opacity-95 shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Open Pattern</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* ================================================== */}
      {/* VIEW 3: DEDICATED PATTERN PAGE (e.g. TWO POINTERS) */}
      {/* ================================================== */}
      {currentView === 'PATTERN' && selectedPattern && (
        <div className="space-y-8">
          
          {/* PATTERN HEADER */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                  Pattern in {selectedTopic ? selectedTopic.name : 'Arrays'}
                </span>
                <h1 className="text-3xl font-black text-white mt-1">{selectedPattern.name}</h1>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="px-3 py-1 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30">
                  Time: {selectedPattern.time_complexity}
                </span>
                <span className="px-3 py-1 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  Space: {selectedPattern.space_complexity}
                </span>
              </div>
            </div>

            {/* CONCEPT BREAKDOWN SECTIONS */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">1. What is {selectedPattern.name}?</h3>
                <p className="text-xs text-slate-200 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 leading-relaxed">
                  {selectedPattern.what}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-teal-400 uppercase tracking-wider">2. When to use it?</h3>
                  <p className="text-xs text-slate-300 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 leading-relaxed">
                    {selectedPattern.when_to_use}
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wider">3. How to identify?</h3>
                  <p className="text-xs text-slate-300 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 leading-relaxed">
                    {selectedPattern.how_to_identify}
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider">4. Pattern Intuition</h3>
                <p className="text-xs text-slate-200 bg-amber-950/20 p-3.5 rounded-2xl border border-amber-500/30 leading-relaxed">
                  💡 {selectedPattern.intuition}
                </p>
              </div>
            </div>

            {/* TABBED CODE EXAMPLES (PYTHON, JAVA, C++) */}
            {selectedPattern.code_snippets && (
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">5. Code Example</h3>
                  <div className="flex items-center gap-1.5">
                    {['python', 'java', 'cpp'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setCodeLang(lang)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-all ${
                          codeLang === lang
                            ? 'bg-cyan-500 text-slate-950'
                            : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {lang === 'cpp' ? 'C++' : lang}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden">
                  <pre className="p-4 text-xs font-mono text-cyan-300 overflow-x-auto">
                    <code>{selectedPattern.code_snippets[codeLang]}</code>
                  </pre>
                </div>
              </div>
            )}

          </div>

          {/* QUESTIONS LIST BY DIFFICULTY */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-white">Practice Problems ({selectedPattern.questions ? selectedPattern.questions.length : 0})</h2>
                <p className="text-xs text-slate-400">Solve real LeetCode problems categorized by difficulty.</p>
              </div>
            </div>

            {(!selectedPattern.questions || selectedPattern.questions.length === 0) ? (
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
                Practice problems for this pattern are available directly below in the core concept exercises.
              </div>
            ) : (
              <div className="space-y-3">
                {selectedPattern.questions.map((q) => {
                  const isDone = completedQuestions.has(q.id);
                  const topicSlug = selectedTopic ? selectedTopic.id.replace('topic-', '') : 'arrays';
                  const patternSlug = selectedPattern.id.replace('pattern-', '');
                  const questionSlug = q.id.replace('q-', '');

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-3xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                        isDone
                          ? 'bg-slate-950/60 border-teal-500/30 opacity-90'
                          : 'bg-slate-900/90 border-slate-800 hover:border-cyan-500/40'
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <button
                          onClick={() => toggleQuestionComplete(q.id)}
                          className="mt-1 text-slate-400 hover:text-teal-400 transition-colors"
                          title="Toggle completion status"
                        >
                          {isDone ? (
                            <CheckCircle2 className="w-5 h-5 text-teal-400 fill-teal-400/20" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-slate-700 hover:border-teal-400"></div>
                          )}
                        </button>

                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className={`text-base font-extrabold text-white ${isDone ? 'line-through text-slate-400' : ''}`}>
                              {q.title}
                            </h3>
                            <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                              q.difficulty === 'Easy' ? 'bg-teal-500/10 text-teal-400 border border-teal-500/30' :
                              q.difficulty === 'Hard' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30' :
                              'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                            }`}>
                              {q.difficulty}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1 line-clamp-1">{q.statement}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => navigateTo(`dsa/${topicSlug}/${patternSlug}/${questionSlug}`)}
                          className="px-3.5 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold hover:bg-cyan-500 hover:text-slate-950 transition-all"
                        >
                          View Explanation & Code
                        </button>

                        <a
                          href={q.leetcode_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold hover:bg-amber-500 hover:text-slate-950 transition-all flex items-center gap-1.5"
                        >
                          <span>Solve on LeetCode</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>

        </div>
      )}

      {/* ================================================== */}
      {/* VIEW 4: QUESTION DETAIL DEDICATED PAGE */}
      {/* ================================================== */}
      {currentView === 'QUESTION' && selectedQuestion && (
        <div className="p-6 sm:p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-6 text-slate-100">
          
          {/* HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                  selectedQuestion.difficulty === 'Easy' ? 'bg-teal-500/10 text-teal-400 border border-teal-500/30' :
                  selectedQuestion.difficulty === 'Hard' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30' :
                  'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                }`}>
                  {selectedQuestion.difficulty}
                </span>
                <span className="text-xs text-slate-400 font-semibold">{selectedQuestion.complexity}</span>
              </div>
              <h1 className="text-2xl font-black text-white mt-1">{selectedQuestion.title}</h1>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={selectedQuestion.leetcode_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold hover:bg-amber-500 hover:text-slate-950 transition-all flex items-center gap-1.5"
              >
                <span>Solve on LeetCode</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* STATEMENT & EXAMPLES */}
          <div className="space-y-6">
            
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Problem Statement</h4>
              <p className="text-xs text-slate-200 bg-slate-950 p-4 rounded-2xl border border-slate-800 leading-relaxed">
                {selectedQuestion.statement}
              </p>
            </div>

            {selectedQuestion.examples && selectedQuestion.examples.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider">Examples</h4>
                {selectedQuestion.examples.map((ex, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono space-y-1">
                    <p className="text-slate-300"><strong>Input:</strong> {ex.input}</p>
                    <p className="text-cyan-300"><strong>Output:</strong> {ex.output}</p>
                    {ex.explanation && <p className="text-slate-400 font-sans text-[11px] pt-1">💡 {ex.explanation}</p>}
                  </div>
                ))}
              </div>
            )}

            {selectedQuestion.constraints && selectedQuestion.constraints.length > 0 && (
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Constraints</h4>
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1 text-xs font-mono text-slate-300">
                  {selectedQuestion.constraints.map((c, i) => <p key={i}>• {c}</p>)}
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">Pattern & Approach</h4>
              <p className="text-xs text-slate-200 bg-amber-950/20 p-4 rounded-2xl border border-amber-500/30 leading-relaxed">
                💡 {selectedQuestion.approach}
              </p>
            </div>

            {/* CODE TABS */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Implementation Code</h4>
                
                <div className="flex items-center gap-1.5">
                  {['python', 'java', 'cpp'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setCodeLang(lang)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-all ${
                        codeLang === lang
                          ? 'bg-cyan-500 text-slate-950'
                          : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {lang === 'cpp' ? 'C++' : lang}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden">
                <button
                  onClick={() => copyToClipboard(selectedQuestion.code ? selectedQuestion.code[codeLang] : '')}
                  className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                </button>

                <pre className="p-4 text-xs font-mono text-cyan-300 overflow-x-auto">
                  <code>{selectedQuestion.code ? selectedQuestion.code[codeLang] : ''}</code>
                </pre>
              </div>
            </div>

          </div>

          {/* FOOTER ACTIONS */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => toggleQuestionComplete(selectedQuestion.id)}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                completedQuestions.has(selectedQuestion.id)
                  ? 'bg-teal-500/20 text-teal-400 border border-teal-500/40'
                  : 'bg-slate-950 border border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{completedQuestions.has(selectedQuestion.id) ? 'Completed' : 'Mark as Completed'}</span>
            </button>

            <a
              href={selectedQuestion.leetcode_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-teal-500 text-slate-950 font-extrabold text-xs hover:opacity-95 shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Solve on LeetCode</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      )}

    </div>
  );
}
