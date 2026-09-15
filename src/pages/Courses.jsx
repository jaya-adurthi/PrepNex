import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { programmingLanguagesData } from '../data/programmingLanguagesData';
import { getTopicDetail } from '../data/programmingTopicDetails';
import {
  BookOpen,
  ArrowLeft,
  ChevronRight,
  Code,
  Zap,
  CheckCircle2,
  Clock,
  Sparkles,
  HelpCircle,
  XCircle,
  AlertTriangle,
  Lightbulb,
  Terminal,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function Courses({ setActivePage, setSelectedTopicId }) {
  const { user } = useAuth();

  // Navigation State: 'grid' (Language Selection) | 'topics' (Topic List) | 'detail' (Topic Explanation)
  const [viewMode, setViewMode] = useState('grid');
  const [selectedLangKey, setSelectedLangKey] = useState('python');
  const [selectedTopicKey, setSelectedTopicKey] = useState('python-operators-all');

  // Quiz State
  const [userAnswers, setUserAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [scorePercentage, setScorePercentage] = useState(0);

  // Hash Router Integration
  useEffect(() => {
    const parseHash = () => {
      const rawHash = window.location.hash ? window.location.hash.replace('#', '') : window.location.pathname;
      const cleanHash = rawHash.replace(/^\//, '').trim();

      if (!cleanHash || cleanHash === 'courses' || cleanHash === 'programming' || cleanHash === 'programming-languages') {
        setViewMode('grid');
        return;
      }

      const parts = cleanHash.split('/');
      const rootSegment = parts[0];
      if (rootSegment === 'programming-languages' || rootSegment === 'programming' || rootSegment === 'courses') {
        const langKey = parts[1];
        if (langKey && programmingLanguagesData[langKey]) {
          setSelectedLangKey(langKey);
          if (parts[2]) {
            setSelectedTopicKey(parts[2]);
            setViewMode('detail');
          } else {
            setViewMode('topics');
          }
        } else {
          setViewMode('grid');
        }
      } else {
        setViewMode('grid');
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    window.addEventListener('popstate', parseHash);
    return () => {
      window.removeEventListener('hashchange', parseHash);
      window.removeEventListener('popstate', parseHash);
    };
  }, []);

  const navigateToGrid = () => {
    setViewMode('grid');
    window.location.hash = 'programming-languages';
  };

  const navigateToTopics = (langKey) => {
    setSelectedLangKey(langKey);
    setViewMode('topics');
    window.location.hash = `programming-languages/${langKey}`;
  };

  const navigateToDetail = (langKey, topicKey) => {
    setSelectedLangKey(langKey);
    setSelectedTopicKey(topicKey);
    setUserAnswers({});
    setQuizSubmitted(false);
    setViewMode('detail');
    window.location.hash = `programming-languages/${langKey}/${topicKey}`;
  };

  const currentLang = programmingLanguagesData[selectedLangKey] || programmingLanguagesData.python;
  const currentTopic = getTopicDetail(selectedTopicKey);

  const handleOptionSelect = (qIdx, optIdx) => {
    if (quizSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const submitQuiz = () => {
    if (!currentTopic.quiz || currentTopic.quiz.length === 0) return;
    let correctCount = 0;
    currentTopic.quiz.forEach((q, idx) => {
      if (userAnswers[idx] === q.correct) {
        correctCount++;
      }
    });
    const pct = Math.round((correctCount / currentTopic.quiz.length) * 100);
    setScorePercentage(pct);
    setQuizSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-slate-100">

      {/* ========================================================================= */}
      {/* PAGE 1: LANGUAGE SELECTION GRID */}
      {/* ========================================================================= */}
      {viewMode === 'grid' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          
          {/* HEADER BANNER */}
          <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider mb-2">
                <Code className="w-3.5 h-3.5" />
                <span>Programming Languages</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Select a Language</h1>
              <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                Choose a programming language to explore complete beginner-to-advanced topic lists, syntax rules, code examples, and practice quizzes.
              </p>
            </div>
          </div>

          {/* 4 CORE LANGUAGE CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.keys(programmingLanguagesData).map((key) => {
              const lang = programmingLanguagesData[key];
              return (
                <div
                  key={lang.id}
                  className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                        {lang.icon}
                      </div>
                      <span className={`px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-slate-950 border border-slate-800 text-cyan-400`}>
                        {lang.badge}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors">
                        {lang.name}
                      </h2>
                      <p className="text-slate-400 text-xs leading-relaxed mt-2">{lang.description}</p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 pt-2 border-t border-slate-800/80">
                      <span>📚 {lang.totalTopics} Complete Topics</span>
                      <span>•</span>
                      <span>⚡ Beginner to Advanced</span>
                    </div>
                  </div>

                  <button
                    onClick={() => navigateToTopics(lang.id)}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-extrabold text-sm hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Explore {lang.name} Topics</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* PAGE 2: TOPICS LIST PAGE FOR SELECTED LANGUAGE */}
      {/* ========================================================================= */}
      {viewMode === 'topics' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          
          {/* BREADCRUMB / BACK BUTTON */}
          <button
            onClick={navigateToGrid}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400" />
            <span>Back to Language Selection</span>
          </button>

          {/* SELECTED LANGUAGE HEADER BANNER */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 text-4xl flex items-center justify-center shrink-0 shadow-inner">
                {currentLang.icon}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase tracking-wider">
                    {currentLang.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">• {currentLang.totalTopics} Topics</span>
                </div>
                <h1 className="text-3xl font-black text-white">{currentLang.title} Topics</h1>
                <p className="text-xs text-slate-400 max-w-2xl">{currentLang.description}</p>
              </div>
            </div>
          </div>

          {/* TOPICS CATEGORIES AND ROADMAP (LINE BY LINE) */}
          <div className="space-y-8">
            {currentLang.categories.map((cat, catIdx) => (
              <div key={cat.id} className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
                <div className="border-b border-slate-800 pb-3">
                  <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-black flex items-center justify-center">
                      {catIdx + 1}
                    </span>
                    <span>{cat.title}</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-1 pl-9">{cat.description}</p>
                </div>

                {/* TOPIC ITEMS LIST */}
                <div className="space-y-3 pt-2">
                  {cat.topics.map((topic, topicIdx) => (
                    <div
                      key={topic.id}
                      className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                    >
                      <div className="flex items-start sm:items-center gap-4">
                        <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 font-bold text-xs flex items-center justify-center shrink-0 transition-colors">
                          {topicIdx + 1}
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-base font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                            {topic.title}
                          </h3>
                          <p className="text-xs text-slate-400 line-clamp-1">{topic.description}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => navigateToDetail(currentLang.id, topic.id)}
                        className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold hover:bg-cyan-500 hover:text-slate-950 transition-all flex items-center justify-center gap-1.5 shrink-0"
                      >
                        <span>View Explanation & Examples</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* PAGE 3: TOPIC DETAILS & EXPLANATION PAGE */}
      {/* ========================================================================= */}
      {viewMode === 'detail' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          
          {/* BREADCRUMB / BACK BUTTON */}
          <button
            onClick={() => navigateToTopics(currentLang.id)}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400" />
            <span>Back to {currentLang.name} Topics</span>
          </button>

          {/* TOPIC HEADER */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 border border-slate-800 space-y-3 shadow-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase tracking-wider">
                {currentTopic.language} • {currentTopic.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-400 border border-teal-500/30">
                {currentTopic.difficulty || 'Easy'}
              </span>
              <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {currentTopic.estimatedMinutes || 20} min read
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">{currentTopic.title}</h1>
          </div>

          {/* WHAT IS IT & WHY USED */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-2 shadow-lg">
              <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span>What is it?</span>
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{currentTopic.whatIsIt}</p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-2 shadow-lg">
              <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Why is it used?</span>
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{currentTopic.whyUsed}</p>
            </div>
          </div>

          {/* SUBTOPICS / TYPES BREAKDOWN */}
          {currentTopic.subtopics && currentTopic.subtopics.length > 0 && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
              <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-400" />
                <span>Types & Subtopics Breakdown</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {currentTopic.subtopics.map((sub, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <h3 className="text-sm font-extrabold text-cyan-400">{sub.name}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{sub.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SYNTAX BOX */}
          {currentTopic.syntax && (
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-xl">
              <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <span>Syntax</span>
              </h2>
              <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-amber-300 overflow-x-auto whitespace-pre-wrap">
                {currentTopic.syntax}
              </div>
            </div>
          )}

          {/* CODE EXAMPLES AND EXPECTED OUTPUT */}
          {currentTopic.codeExample && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6 shadow-xl">
              <div className="space-y-3">
                <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                  <Code className="w-5 h-5 text-teal-400" />
                  <span>Code Example</span>
                </h2>
                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-cyan-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                  {currentTopic.codeExample}
                </div>
              </div>

              {currentTopic.expectedOutput && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-slate-300 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-emerald-400" />
                    <span>Expected Output</span>
                  </h3>
                  <div className="rounded-2xl bg-slate-950 border border-emerald-500/30 p-4 font-mono text-xs text-emerald-400 overflow-x-auto whitespace-pre-wrap">
                    {currentTopic.expectedOutput}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* IMPORTANT POINTS & COMMON MISTAKES */}
          {((currentTopic.keyPoints && currentTopic.keyPoints.length > 0) || (currentTopic.commonMistakes && currentTopic.commonMistakes.length > 0)) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentTopic.keyPoints && currentTopic.keyPoints.length > 0 && (
                <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-lg">
                  <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-400" />
                    <span>Important Points & Tips</span>
                  </h2>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {currentTopic.keyPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
                        <span className="text-teal-400 font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {currentTopic.commonMistakes && currentTopic.commonMistakes.length > 0 && (
                <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-lg">
                  <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-rose-400" />
                    <span>Common Mistakes to Avoid</span>
                  </h2>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {currentTopic.commonMistakes.map((m, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
                        <span className="text-rose-400 font-bold">•</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* INTERACTIVE TOPIC QUIZ */}
          {currentTopic.quiz && currentTopic.quiz.length > 0 && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-cyan-500/30 space-y-6 shadow-2xl">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-cyan-400" />
                    <span>Topic Mastery Quiz</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">Test your understanding of {currentTopic.title}.</p>
                </div>
              </div>

              {quizSubmitted ? (
                <div className="space-y-4">
                  <div className={`p-6 rounded-2xl text-center space-y-1 border ${
                    scorePercentage >= 60 ? 'bg-teal-500/10 border-teal-500/40 text-teal-300' : 'bg-rose-500/10 border-rose-500/40 text-rose-300'
                  }`}>
                    <p className="text-3xl font-black">{scorePercentage}% Score</p>
                    <p className="text-xs font-bold">
                      {scorePercentage >= 60 ? '🎉 Excellent! Topic Mastered.' : '⚠️ Review the explanation and try again.'}
                    </p>
                  </div>

                  {currentTopic.quiz.map((q, idx) => {
                    const isCorrect = userAnswers[idx] === q.correct;
                    return (
                      <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1.5">
                        <div className="flex items-start gap-2 font-bold text-slate-100">
                          {isCorrect ? <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" /> : <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />}
                          <span>Q{idx + 1}: {q.question}</span>
                        </div>
                        <p className="text-slate-400 pl-6">
                          Explanation: <span className="italic">{q.explanation}</span>
                        </p>
                      </div>
                    );
                  })}

                  <button
                    onClick={() => {
                      setUserAnswers({});
                      setQuizSubmitted(false);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-bold hover:bg-slate-700 transition-colors"
                  >
                    Retake Quiz
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {currentTopic.quiz.map((q, qIdx) => (
                    <div key={qIdx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                      <p className="text-sm font-bold text-white">Q{qIdx + 1}: {q.question}</p>
                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = userAnswers[qIdx] === optIdx;
                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleOptionSelect(qIdx, optIdx)}
                              className={`w-full p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                                isSelected
                                  ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 font-bold'
                                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                              }`}
                            >
                              <span className="mr-2 opacity-60">{String.fromCharCode(65 + optIdx)}.</span>
                              <span>{opt}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={submitQuiz}
                    disabled={Object.keys(userAnswers).length < currentTopic.quiz.length}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-extrabold text-sm hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all disabled:opacity-50"
                  >
                    Submit Quiz
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      )}

    </div>
  );
}
