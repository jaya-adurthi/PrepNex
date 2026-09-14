import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { aptitudeTopics } from '../../server/aptitudeData';
import {
  Calculator,
  Percent,
  TrendingUp,
  Scale,
  BarChart2,
  Clock,
  Layers,
  Zap,
  HelpCircle,
  Code,
  Compass,
  Box,
  PieChart,
  Filter,
  UserCheck,
  Brain,
  BookOpen,
  Hash,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  Search,
  CheckCircle2,
  Sparkles,
  Check,
  X,
  Lightbulb,
  Award,
  FilterX,
  Repeat
} from 'lucide-react';

const ICON_MAP = {
  Hash: Hash,
  Percent: Percent,
  TrendingUp: TrendingUp,
  Scale: Scale,
  BarChart2: BarChart2,
  Clock: Clock,
  Layers: Layers,
  Zap: Zap,
  HelpCircle: HelpCircle,
  Code: Code,
  Compass: Compass,
  Box: Box,
  PieChart: PieChart,
  Filter: Filter,
  UserCheck: UserCheck,
  Brain: Brain,
  BookOpen: BookOpen,
  Calculator: Calculator
};

export default function AptitudeView() {
  const { user } = useAuth();

  // Navigation state parsed from URL hash
  const [currentView, setCurrentView] = useState('ROADMAP'); // 'ROADMAP' | 'TOPIC' | 'CONCEPT' | 'QUESTION'
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Topic Tab state: 'CONCEPTS' | 'FORMULAS' | 'QUESTIONS'
  const [activeTab, setActiveTab] = useState('CONCEPTS');

  // Filters inside Topic View
  const [difficultyFilter, setDifficultyFilter] = useState('ALL'); // 'ALL' | 'Easy' | 'Medium' | 'Hard'
  const [statusFilter, setStatusFilter] = useState('ALL'); // 'ALL' | 'UNSOLVED' | 'SOLVED'
  const [studyMode, setStudyMode] = useState('PRACTICE'); // 'PRACTICE' | 'REVISION'
  const [selectedFormulaFilter, setSelectedFormulaFilter] = useState(null); // formulaId or null

  // Formula Search inside Formulas Tab
  const [formulaSearchTerm, setFormulaSearchTerm] = useState('');

  // Question solving state
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  // Roadmap Search & Filter
  const [searchTerm, setSearchTerm] = useState('');

  // Persisted completed question IDs
  const [completedQuestions, setCompletedQuestions] = useState(new Set());

  // Load completed questions from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('prepnex_aptitude_completed');
    if (saved) {
      try {
        setCompletedQuestions(new Set(JSON.parse(saved)));
      } catch (e) {}
    }
  }, []);

  // Save completed questions
  const markQuestionCompleted = (qId) => {
    const updated = new Set(completedQuestions);
    updated.add(qId);
    setCompletedQuestions(updated);
    localStorage.setItem('prepnex_aptitude_completed', JSON.stringify(Array.from(updated)));
  };

  // Route Parser from URL Hash
  const parseRouteFromHash = () => {
    const rawHash = window.location.hash.replace('#', '');
    const cleanHash = rawHash.startsWith('/') ? rawHash.slice(1) : rawHash;
    const parts = cleanHash.split('/').filter(Boolean);

    if (parts.length === 0 || (parts.length === 1 && parts[0] === 'aptitude')) {
      setCurrentView('ROADMAP');
      setSelectedTopic(null);
      setSelectedConcept(null);
      setSelectedQuestion(null);
      return;
    }

    if (parts[0] === 'aptitude' || parts[0] === 'topic') {
      const topicSlug = parts[1];
      const foundTopic = aptitudeTopics.find(t => t.id === topicSlug || t.id.replace('topic-', '') === topicSlug);

      if (!foundTopic) {
        setCurrentView('ROADMAP');
        setSelectedTopic(null);
        setSelectedConcept(null);
        setSelectedQuestion(null);
        return;
      }

      setSelectedTopic(foundTopic);

      if (parts.length === 2) {
        setCurrentView('TOPIC');
        setSelectedConcept(null);
        setSelectedQuestion(null);
        return;
      }

      const subSlug = parts[2];
      const subtype = parts.length > 3 ? parts[2] : null;

      if (subtype === 'question' || parts.length >= 4) {
        const qId = parts.length > 3 ? parts[3] : subSlug;
        const foundQ = foundTopic.questions?.find(q => q.id === qId);
        if (foundQ) {
          setSelectedQuestion(foundQ);
          setCurrentView('QUESTION');
          setIsAnswerSubmitted(false);
          setSelectedOption(null);
          return;
        }
      }

      const foundConcept = foundTopic.concepts?.find(c => c.id === subSlug);
      if (foundConcept) {
        setSelectedConcept(foundConcept);
        setCurrentView('CONCEPT');
        setSelectedQuestion(null);
        return;
      }

      const foundQ = foundTopic.questions?.find(q => q.id === subSlug);
      if (foundQ) {
        setSelectedQuestion(foundQ);
        setCurrentView('QUESTION');
        setIsAnswerSubmitted(false);
        setSelectedOption(null);
        return;
      }

      // Default back to TOPIC view
      setCurrentView('TOPIC');
      setSelectedConcept(null);
      setSelectedQuestion(null);
    }
  };

  useEffect(() => {
    parseRouteFromHash();
    window.addEventListener('hashchange', parseRouteFromHash);
    window.addEventListener('popstate', parseRouteFromHash);
    return () => {
      window.removeEventListener('hashchange', parseRouteFromHash);
      window.removeEventListener('popstate', parseRouteFromHash);
    };
  }, []);

  const navigateTo = (path) => {
    window.location.hash = path;
  };

  // Back Button Navigation Logic
  const handleGoBack = () => {
    if (currentView === 'QUESTION' || currentView === 'CONCEPT') {
      if (selectedTopic) {
        navigateTo(`aptitude/${selectedTopic.id}`);
      } else {
        navigateTo('aptitude');
      }
    } else if (currentView === 'TOPIC') {
      navigateTo('aptitude');
    } else {
      window.history.back();
    }
  };

  // Progress Calculations
  const totalQuestionsInApp = aptitudeTopics.reduce((acc, t) => acc + t.questions.length, 0);
  const overallCompletedCount = Array.from(completedQuestions).length;
  const overallAptitudeProgress = totalQuestionsInApp > 0 ? Math.round((overallCompletedCount / totalQuestionsInApp) * 100) : 0;

  const getTopicProgress = (topic) => {
    if (!topic || !topic.questions || topic.questions.length === 0) return 0;
    const completedInTopic = topic.questions.filter(q => completedQuestions.has(q.id)).length;
    return Math.round((completedInTopic / topic.questions.length) * 100);
  };

  const filteredTopics = aptitudeTopics.filter(t =>
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter questions for the selected topic
  const filteredQuestions = useMemo(() => {
    if (!selectedTopic || !selectedTopic.questions) return [];
    let list = selectedTopic.questions;

    if (selectedFormulaFilter) {
      list = list.filter(q => q.formulaId === selectedFormulaFilter);
    }

    if (difficultyFilter !== 'ALL') {
      list = list.filter(q => q.difficulty === difficultyFilter);
    }

    if (statusFilter === 'SOLVED') {
      list = list.filter(q => completedQuestions.has(q.id));
    } else if (statusFilter === 'UNSOLVED') {
      list = list.filter(q => !completedQuestions.has(q.id));
    }

    if (studyMode === 'REVISION') {
      // In revision mode, prioritize solved questions or questions with shortcuts
      list = list.filter(q => completedQuestions.has(q.id) || q.shortcut);
    }

    return list;
  }, [selectedTopic, selectedFormulaFilter, difficultyFilter, statusFilter, studyMode, completedQuestions]);

  // Filter formulas for the selected topic
  const filteredFormulas = useMemo(() => {
    if (!selectedTopic || !selectedTopic.formulas) return [];
    if (!formulaSearchTerm.trim()) return selectedTopic.formulas;
    const term = formulaSearchTerm.toLowerCase();
    return selectedTopic.formulas.filter(f =>
      f.title.toLowerCase().includes(term) ||
      f.formula.toLowerCase().includes(term) ||
      f.description.toLowerCase().includes(term)
    );
  }, [selectedTopic, formulaSearchTerm]);

  // Navigation helpers for Previous / Next question in Question solver view
  const currentQuestionIndex = useMemo(() => {
    if (!selectedTopic || !selectedQuestion) return -1;
    return selectedTopic.questions.findIndex(q => q.id === selectedQuestion.id);
  }, [selectedTopic, selectedQuestion]);

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0 && selectedTopic) {
      const prevQ = selectedTopic.questions[currentQuestionIndex - 1];
      navigateTo(`aptitude/${selectedTopic.id}/question/${prevQ.id}`);
    }
  };

  const handleNextQuestion = () => {
    if (selectedTopic && currentQuestionIndex >= 0 && currentQuestionIndex < selectedTopic.questions.length - 1) {
      const nextQ = selectedTopic.questions[currentQuestionIndex + 1];
      navigateTo(`aptitude/${selectedTopic.id}/question/${nextQ.id}`);
    }
  };

  // Find formula object linked to selected question
  const linkedFormula = useMemo(() => {
    if (!selectedTopic || !selectedQuestion || !selectedQuestion.formulaId) return null;
    return selectedTopic.formulas.find(f => f.id === selectedQuestion.formulaId);
  }, [selectedTopic, selectedQuestion]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* HEADER BAR & BREADCRUMBS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        
        {/* CLICKABLE BREADCRUMBS */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 overflow-x-auto">
          <button
            onClick={() => navigateTo('aptitude')}
            className={`hover:text-cyan-400 transition-colors font-bold ${currentView === 'ROADMAP' ? 'text-cyan-400' : ''}`}
          >
            Aptitude
          </button>

          {selectedTopic && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <button
                onClick={() => navigateTo(`aptitude/${selectedTopic.id}`)}
                className={`hover:text-cyan-400 transition-colors font-bold ${currentView === 'TOPIC' ? 'text-cyan-400' : ''}`}
              >
                {selectedTopic.name}
              </button>
            </>
          )}

          {selectedConcept && currentView === 'CONCEPT' && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span className="text-cyan-400 font-bold">{selectedConcept.name}</span>
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
              {currentView === 'TOPIC' && 'Back to Aptitude'}
              {currentView === 'CONCEPT' && `Back to ${selectedTopic ? selectedTopic.name : 'Topic'}`}
              {currentView === 'QUESTION' && `Back to ${selectedTopic ? selectedTopic.name : 'Topic'}`}
            </span>
          </button>
        )}
      </div>

      {/* ================================================== */}
      {/* VIEW 1: MAIN APTITUDE ROADMAP (21 TOPICS) */}
      {/* ================================================== */}
      {currentView === 'ROADMAP' && (
        <div className="space-y-8">
          
          {/* BANNER & SEARCH */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider mb-2">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Aptitude & Reasoning Hub</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">Quantitative & Logical Aptitude</h1>
                <p className="text-slate-400 text-sm mt-1">
                  Master 21 essential aptitude topics, formulas, shortcuts, and practice questions for campus placements.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-right shrink-0">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Aptitude Progress</span>
                <p className="text-2xl font-black text-cyan-400 mt-0.5">{overallAptitudeProgress}%</p>
              </div>
            </div>

            {/* SEARCH INPUT */}
            <div className="relative pt-2">
              <Search className="absolute left-4 top-5 w-4 h-4 text-slate-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Aptitude topics (e.g. Number System, Percentages, Time & Work)..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* 21 TOPIC CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTopics.map((topic, idx) => {
              const IconComponent = ICON_MAP[topic.icon] || Calculator;
              const progress = getTopicProgress(topic);

              return (
                <div
                  key={topic.id}
                  onClick={() => navigateTo(`aptitude/${topic.id}`)}
                  className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer space-y-4 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">
                        {topic.difficulty}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                      {topic.name}
                    </h3>
                    <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-800/80">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                      <span>{topic.concepts.length} Concepts • {topic.formulas.length} Formulas</span>
                      <span className="text-cyan-400">{topic.questions.length} Questions</span>
                    </div>

                    {/* TOPIC PROGRESS BAR */}
                    <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] font-bold text-slate-400">{progress}% Completed</span>
                      <button className="flex items-center gap-1 text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                        <span>Explore Topic</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ================================================== */}
      {/* VIEW 2: SELECTED TOPIC PAGE */}
      {/* ================================================== */}
      {currentView === 'TOPIC' && selectedTopic && (
        <div className="space-y-6">
          
          {/* TOPIC HEADER */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider">
                  {selectedTopic.difficulty}
                </span>
                <h1 className="text-3xl font-black text-white tracking-tight mt-2">{selectedTopic.name}</h1>
                <p className="text-slate-400 text-sm mt-1 max-w-2xl">{selectedTopic.description}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-right shrink-0">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Topic Progress</span>
                <p className="text-2xl font-black text-cyan-400 mt-0.5">{getTopicProgress(selectedTopic)}%</p>
                <p className="text-[11px] text-slate-400 font-semibold mt-1">
                  {selectedTopic.questions.filter(q => completedQuestions.has(q.id)).length} / {selectedTopic.questions.length} Solved
                </p>
              </div>
            </div>

            {/* TAB NAVIGATION & MODE TOGGLE */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                <button
                  onClick={() => setActiveTab('CONCEPTS')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    activeTab === 'CONCEPTS'
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Core Concepts ({selectedTopic.concepts.length})
                </button>
                <button
                  onClick={() => setActiveTab('FORMULAS')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    activeTab === 'FORMULAS'
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Formulas & Rules ({selectedTopic.formulas.length})
                </button>
                <button
                  onClick={() => setActiveTab('QUESTIONS')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    activeTab === 'QUESTIONS'
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Practice Questions ({selectedTopic.questions.length})
                </button>
              </div>

              {/* PRACTICE VS REVISION MODE */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 shrink-0 self-start sm:self-auto">
                <button
                  onClick={() => setStudyMode('PRACTICE')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    studyMode === 'PRACTICE'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Practice Mode
                </button>
                <button
                  onClick={() => setStudyMode('REVISION')}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    studyMode === 'REVISION'
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Repeat className="w-3.5 h-3.5" />
                  <span>Revision Mode</span>
                </button>
              </div>
            </div>
          </div>

          {/* TAB 1: CONCEPTS LIST */}
          {activeTab === 'CONCEPTS' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedTopic.concepts.map((concept) => (
                <div
                  key={concept.id}
                  onClick={() => navigateTo(`aptitude/${selectedTopic.id}/${concept.id}`)}
                  className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer space-y-4 group"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                      {concept.name}
                    </h3>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                    {concept.explanation}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs text-cyan-400 font-bold">
                    <span>{concept.key_rules.length} Key Rules</span>
                    <span>Read Explanation & Examples →</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: FORMULAS LIST & SEARCH */}
          {activeTab === 'FORMULAS' && (
            <div className="space-y-6">
              {/* FORMULA SEARCH INPUT */}
              <div className="relative">
                <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  value={formulaSearchTerm}
                  onChange={(e) => setFormulaSearchTerm(e.target.value)}
                  placeholder="Search formulas by title, equation, or keyword..."
                  className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredFormulas.map((formula) => {
                  const linkedCount = selectedTopic.questions.filter(q => q.formulaId === formula.id).length;

                  return (
                    <div key={formula.id} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-cyan-400">
                            <Lightbulb className="w-4 h-4" />
                            <h3 className="font-extrabold text-white text-base">{formula.title}</h3>
                          </div>

                          {linkedCount > 0 && (
                            <button
                              onClick={() => {
                                setSelectedFormulaFilter(formula.id);
                                setActiveTab('QUESTIONS');
                              }}
                              className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[11px] font-bold hover:bg-cyan-500/20 transition-colors"
                            >
                              {linkedCount} Questions linked →
                            </button>
                          )}
                        </div>

                        <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-cyan-300 font-mono text-xs font-bold">
                          {formula.formula}
                        </div>

                        <p className="text-slate-400 text-xs leading-relaxed">{formula.description}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
                        <span className="font-bold text-amber-400">Example: </span>
                        <span>{formula.example}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: PRACTICE QUESTIONS LIST & FILTERS */}
          {activeTab === 'QUESTIONS' && (
            <div className="space-y-4">
              
              {/* INTERACTIVE FILTERS BAR */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
                
                {/* DIFFICULTY FILTER */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Difficulty:</span>
                  <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
                    {['ALL', 'Easy', 'Medium', 'Hard'].map((diff) => (
                      <button
                        key={diff}
                        onClick={() => setDifficultyFilter(diff)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                          difficultyFilter === diff
                            ? 'bg-cyan-500 text-slate-950 shadow-sm'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {diff}
                      </button>
                    ))}
                  </div>
                </div>

                {/* STATUS FILTER */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status:</span>
                  <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
                    {[
                      { id: 'ALL', label: 'All' },
                      { id: 'UNSOLVED', label: 'Unsolved' },
                      { id: 'SOLVED', label: 'Solved' }
                    ].map((st) => (
                      <button
                        key={st.id}
                        onClick={() => setStatusFilter(st.id)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                          statusFilter === st.id
                            ? 'bg-cyan-500 text-slate-950 shadow-sm'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ACTIVE FORMULA FILTER BADGE */}
                {selectedFormulaFilter && (
                  <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold">
                    <span>Filtered by Formula</span>
                    <button
                      onClick={() => setSelectedFormulaFilter(null)}
                      className="hover:text-cyan-200"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* QUESTIONS LIST */}
              {filteredQuestions.length === 0 ? (
                <div className="p-8 text-center rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 space-y-2">
                  <FilterX className="w-8 h-8 text-slate-500 mx-auto" />
                  <p className="text-sm font-semibold">No questions match your current filter selection.</p>
                  <button
                    onClick={() => {
                      setDifficultyFilter('ALL');
                      setStatusFilter('ALL');
                      setSelectedFormulaFilter(null);
                    }}
                    className="text-xs font-bold text-cyan-400 hover:underline"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredQuestions.map((question, idx) => {
                    const isCompleted = completedQuestions.has(question.id);

                    return (
                      <div
                        key={question.id}
                        onClick={() => navigateTo(`aptitude/${selectedTopic.id}/question/${question.id}`)}
                        className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                          isCompleted
                            ? 'bg-slate-900/60 border-teal-500/30 hover:border-teal-500/60'
                            : 'bg-slate-900 border-slate-800 hover:border-cyan-500/50'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                            isCompleted ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30' : 'bg-slate-800 text-slate-400'
                          }`}>
                            {isCompleted ? <Check className="w-4 h-4" /> : idx + 1}
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-extrabold text-white text-sm hover:text-cyan-400 transition-colors">
                                {question.title}
                              </h4>
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                question.difficulty === 'Easy'
                                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                  : question.difficulty === 'Medium'
                                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                  : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                              }`}>
                                {question.difficulty}
                              </span>
                            </div>
                            <p className="text-slate-400 text-xs mt-0.5 line-clamp-1">{question.question}</p>
                          </div>
                        </div>

                        <button className="px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold hover:bg-cyan-500 hover:text-slate-950 transition-all shrink-0">
                          Solve Question →
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ================================================== */}
      {/* VIEW 3: CONCEPT DETAIL PAGE */}
      {/* ================================================== */}
      {currentView === 'CONCEPT' && selectedConcept && (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <h1 className="text-2xl font-black text-white">{selectedConcept.name}</h1>
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300 text-sm leading-relaxed whitespace-pre-line">
              {selectedConcept.explanation}
            </div>
          </div>

          {/* KEY RULES */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span>Key Rules & Properties</span>
            </h2>
            <ul className="space-y-2.5">
              {selectedConcept.key_rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-200">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 font-bold flex items-center justify-center shrink-0 text-[10px]">
                    {i + 1}
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SOLVED EXAMPLES */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Solved Examples</span>
            </h2>
            <div className="space-y-4">
              {selectedConcept.examples.map((ex, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <p className="font-bold text-xs text-slate-200">Example {i + 1}: {ex.problem}</p>
                  <p className="text-xs text-cyan-400 bg-cyan-500/5 p-3 rounded-xl border border-cyan-500/20">
                    <span className="font-bold">Solution: </span>{ex.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================================================== */}
      {/* VIEW 4: QUESTION INTERACTIVE SOLVER PAGE */}
      {/* ================================================== */}
      {currentView === 'QUESTION' && selectedQuestion && (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
            
            {/* QUESTION HEADER & PREV/NEXT BUTTONS */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  selectedQuestion.difficulty === 'Easy'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : selectedQuestion.difficulty === 'Medium'
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                }`}>
                  {selectedQuestion.difficulty} Question
                </span>

                {selectedTopic && (
                  <span className="text-xs font-bold text-slate-400">
                    Question {currentQuestionIndex + 1} of {selectedTopic.questions.length}
                  </span>
                )}
              </div>

              {/* PREVIOUS / NEXT NAVIGATION BUTTONS */}
              <div className="flex items-center gap-2">
                <button
                  disabled={currentQuestionIndex <= 0}
                  onClick={handlePrevQuestion}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    currentQuestionIndex > 0
                      ? 'bg-slate-800 text-slate-200 hover:text-cyan-400 hover:bg-slate-700'
                      : 'bg-slate-950 text-slate-600 cursor-not-allowed border border-slate-800/50'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  disabled={!selectedTopic || currentQuestionIndex >= selectedTopic.questions.length - 1}
                  onClick={handleNextQuestion}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedTopic && currentQuestionIndex < selectedTopic.questions.length - 1
                      ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950'
                      : 'bg-slate-950 text-slate-600 cursor-not-allowed border border-slate-800/50'
                  }`}
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* LINKED FORMULA BADGE IF AVAILABLE */}
            {linkedFormula && (
              <div className="p-3.5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-between text-xs text-cyan-300">
                <div className="flex items-center gap-2 font-semibold">
                  <Lightbulb className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Formula: <strong>{linkedFormula.title}</strong> — <code className="font-mono text-cyan-200">{linkedFormula.formula}</code></span>
                </div>
              </div>
            )}

            {/* QUESTION STATEMENT */}
            <div>
              <h2 className="text-xl font-extrabold text-white">{selectedQuestion.title}</h2>
              <p className="text-slate-200 text-sm sm:text-base mt-2 leading-relaxed font-medium">
                {selectedQuestion.question}
              </p>
            </div>

            {/* 4 OPTIONS */}
            <div className="space-y-3 pt-2">
              {selectedQuestion.options.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                const isCorrect = opt === selectedQuestion.correctAnswer;

                let optionStyle = 'bg-slate-950 border-slate-800 text-slate-200 hover:border-cyan-500/50';

                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-200 font-bold';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'bg-rose-950/40 border-rose-500 text-rose-200';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-cyan-950/40 border-cyan-500 text-cyan-300 font-bold';
                }

                return (
                  <div
                    key={idx}
                    onClick={() => !isAnswerSubmitted && setSelectedOption(opt)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${optionStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center font-bold text-xs">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-sm">{opt}</span>
                    </div>

                    {isAnswerSubmitted && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <X className="w-5 h-5 text-rose-400" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* SUBMIT BUTTON */}
            {!isAnswerSubmitted ? (
              <button
                disabled={!selectedOption}
                onClick={() => {
                  if (!selectedOption) return;
                  setIsAnswerSubmitted(true);
                  if (selectedOption === selectedQuestion.correctAnswer) {
                    markQuestionCompleted(selectedQuestion.id);
                  }
                }}
                className={`w-full py-3.5 rounded-2xl font-extrabold text-sm transition-all ${
                  selectedOption
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-lg shadow-cyan-500/20 hover:opacity-95'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                Submit Answer
              </button>
            ) : (
              <div className="space-y-4 pt-4 border-t border-slate-800">
                {selectedOption === selectedQuestion.correctAnswer ? (
                  <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-sm font-bold flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span>Correct Answer! Great job 🎉</span>
                    </div>
                    {selectedTopic && currentQuestionIndex < selectedTopic.questions.length - 1 && (
                      <button
                        onClick={handleNextQuestion}
                        className="px-3.5 py-1 rounded-xl bg-emerald-500 text-slate-950 text-xs font-extrabold hover:bg-emerald-400 transition-colors"
                      >
                        Next Question →
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-sm font-bold flex items-center gap-2">
                    <X className="w-5 h-5 text-rose-400" />
                    <span>Incorrect answer. Review explanation below!</span>
                  </div>
                )}

                {/* DETAILED EXPLANATION */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <h3 className="font-extrabold text-white text-sm flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <span>Step-by-Step Explanation</span>
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed whitespace-pre-line">
                    {selectedQuestion.explanation}
                  </p>

                  {/* SHORTCUT TRICK */}
                  {selectedQuestion.shortcut && (
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
                      <span className="font-bold">⚡ Shortcut / Trick: </span>
                      <span>{selectedQuestion.shortcut}</span>
                    </div>
                  )}

                  {/* FORMULA USED */}
                  {selectedQuestion.formula && (
                    <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                      <span className="font-bold font-sans">📐 Formula Used: </span>
                      <span>{selectedQuestion.formula}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
