import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiRequest } from '../utils/api';
import {
  Sparkles,
  Clock,
  Code2,
  CheckCircle2,
  AlertCircle,
  Play,
  ArrowRight,
  RotateCcw,
  BarChart3,
  Award,
  BookOpen
} from 'lucide-react';

export default function MockInterview({ setActivePage }) {
  const { user, openAuthModal } = useAuth();

  // Setup Form State
  const [targetRole, setTargetRole] = useState('Software Engineer');
  const [selectedLangs, setSelectedLangs] = useState(['Python', 'Java']);
  const [selectedDsa, setSelectedDsa] = useState(['Arrays', 'Two Pointers']);
  const [experience, setExperience] = useState('Entry Level (0-2 yrs)');

  // Session State
  const [interviewState, setInterviewState] = useState('SETUP'); // 'SETUP' | 'ACTIVE' | 'REPORT'
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes timer in seconds
  const [submitting, setSubmitting] = useState(false);
  const [report, setReport] = useState(null);

  // Timer countdown effect
  useEffect(() => {
    let timer = null;
    if (interviewState === 'ACTIVE' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitInterview(); // Auto submit when time expires
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [interviewState, timeLeft]);

  const toggleSelection = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleStartInterview = async () => {
    if (!user) {
      openAuthModal('login');
      return;
    }

    try {
      const res = await apiRequest('/interviews/generate', 'POST', {
        targetRole,
        languages: selectedLangs,
        dsaSkills: selectedDsa,
        experience
      });

      setQuestions(res.questions || []);
      setCurrentIdx(0);
      setAnswers({});
      setTimeLeft(25 * 60);
      setInterviewState('ACTIVE');
    } catch (err) {
      alert(err.message || 'Failed to start interview');
    }
  };

  const handleAnswerChange = (text) => {
    const qId = questions[currentIdx].id;
    setAnswers(prev => ({ ...prev, [qId]: text }));
  };

  const handleSubmitInterview = async () => {
    setSubmitting(true);
    try {
      const res = await apiRequest('/interviews/evaluate', 'POST', {
        targetRole,
        answers,
        questions
      });

      setReport(res.report);
      setInterviewState('REPORT');
    } catch (err) {
      alert(err.message || 'Failed to evaluate interview');
    } finally {
      setSubmitting(false);
    }
  };

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      {/* HEADER */}
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Real-time Placement Simulator</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">25-Minute Mock Interview</h1>
        <p className="text-slate-400 text-sm mt-1">
          Simulate a real 3-round interview (Technical, Coding/DSA, and HR) customized to your tech stack.
        </p>
      </div>

      {/* SETUP STAGE */}
      {interviewState === 'SETUP' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6 max-w-3xl mx-auto">
          
          <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
            <Code2 className="w-5 h-5 text-cyan-400" />
            <span>Configure Candidate Profile</span>
          </h2>

          {/* TARGET ROLE */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Target Job Role</label>
            <select
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-slate-100 font-semibold text-sm focus:outline-none focus:border-cyan-500"
            >
              <option value="Software Engineer">Software Engineer (Generalist)</option>
              <option value="Backend Developer">Backend Engineer (Python / Java / Node)</option>
              <option value="Frontend Developer">Frontend Engineer (React / HTML / CSS)</option>
              <option value="Fullstack Engineer">Fullstack Web Engineer</option>
              <option value="Data Structures Specialist">Data Structures & Algorithms Specialist</option>
            </select>
          </div>

          {/* PROGRAMMING LANGUAGES */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Programming Languages</label>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Java', 'C', 'C++', 'JavaScript', 'SQL'].map((lang) => {
                const isSelected = selectedLangs.includes(lang);
                return (
                  <button
                    key={lang}
                    onClick={() => toggleSelection(lang, selectedLangs, setSelectedLangs)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                        : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {lang}
                  </button>
                );
              })}
            </div>
          </div>

          {/* DSA TOPICS */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">DSA Skills</label>
            <div className="flex flex-wrap gap-2">
              {['Arrays', 'Two Pointers', 'Sliding Window', 'Stack & Queue', 'Trees', 'Graphs', 'Dynamic Programming'].map((dsa) => {
                const isSelected = selectedDsa.includes(dsa);
                return (
                  <button
                    key={dsa}
                    onClick={() => toggleSelection(dsa, selectedDsa, setSelectedDsa)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-purple-500 text-white shadow-md shadow-purple-500/20'
                        : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {dsa}
                  </button>
                );
              })}
            </div>
          </div>

          {/* START BUTTON */}
          <button
            onClick={handleStartInterview}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-teal-500 to-cyan-500 text-slate-950 font-black text-base hover:opacity-95 shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5 fill-slate-950" />
            <span>START MOCK INTERVIEW (25 MINS)</span>
          </button>

        </div>
      )}

      {/* ACTIVE INTERVIEW STAGE */}
      {interviewState === 'ACTIVE' && questions.length > 0 && (
        <div className="space-y-6 max-w-4xl mx-auto">
          
          {/* TOP BAR: TIMER & PROGRESS */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-xl bg-amber-500/10 text-amber-400 font-extrabold text-xs border border-amber-500/30">
                {questions[currentIdx].round}
              </span>
              <span className="text-xs text-slate-400 font-semibold">
                Question {currentIdx + 1} of {questions.length}
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono font-black text-lg text-rose-400 bg-slate-950 px-4 py-1.5 rounded-xl border border-rose-500/30">
              <Clock className="w-4 h-4" />
              <span>{formatTimer(timeLeft)}</span>
            </div>
          </div>

          {/* QUESTION CARD */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Category: {questions[currentIdx].category}
              </span>
            </div>

            <h2 className="text-xl font-extrabold text-white leading-snug">
              {questions[currentIdx].question}
            </h2>

            {/* ANSWER INPUT AREA */}
            <div className="space-y-2 pt-2">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Your Response / Implementation</label>
              <textarea
                rows={10}
                value={answers[questions[currentIdx].id] || questions[currentIdx].initialCode || ''}
                onChange={(e) => handleAnswerChange(e.target.value)}
                placeholder="Type your explanation or code solution here..."
                className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-sm font-mono text-cyan-300 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* NAVIGATION CONTROLS */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx(currentIdx - 1)}
                className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-slate-300 disabled:opacity-40"
              >
                Previous Question
              </button>

              {currentIdx < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentIdx(currentIdx + 1)}
                  className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:opacity-90 flex items-center gap-1.5"
                >
                  <span>Next Question</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmitInterview}
                  disabled={submitting}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-extrabold text-xs hover:opacity-95 shadow-lg shadow-teal-500/20"
                >
                  {submitting ? 'Evaluating Interview...' : 'Submit & Generate Report'}
                </button>
              )}
            </div>

          </div>

        </div>
      )}

      {/* INTERVIEW REPORT STAGE */}
      {interviewState === 'REPORT' && report && (
        <div className="space-y-8 max-w-4xl mx-auto">
          
          {/* REPORT OVERALL SCORE CARD */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-slate-800 text-center space-y-4">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider">
              Interview Scorecard
            </span>

            <h2 className="text-4xl sm:text-5xl font-black text-white">
              {report.overall_score}% <span className="text-xl text-slate-400 font-normal">Overall Score</span>
            </h2>

            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Evaluation complete for target role: <strong className="text-cyan-400">{report.targetRole}</strong>
            </p>

            <button
              onClick={() => setInterviewState('SETUP')}
              className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-bold hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Mock Interview</span>
            </button>
          </div>

          {/* 5 METRIC BREAKDOWN */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
            <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-cyan-400" />
              <span>Detailed Metric Breakdown</span>
            </h3>

            <div className="space-y-3">
              {[
                { label: 'Technical Knowledge', score: report.tech_score, color: 'from-cyan-500 to-teal-400' },
                { label: 'DSA & Coding', score: report.dsa_score, color: 'from-purple-500 to-cyan-400' },
                { label: 'Problem Solving', score: report.problem_solving_score, color: 'from-teal-500 to-emerald-400' },
                { label: 'Communication Clarity', score: report.communication_score, color: 'from-amber-500 to-yellow-400' },
                { label: 'HR & Behavioral', score: report.hr_score, color: 'from-cyan-400 to-blue-500' }
              ].map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-200">{m.label}</span>
                    <span className="text-cyan-400">{m.score}%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${m.color} transition-all duration-300`}
                      style={{ width: `${m.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FEEDBACK & RECOMMENDATIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* STRENGTHS */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3">
              <h4 className="text-sm font-extrabold text-teal-400 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Candidate Strengths</span>
              </h4>
              <div className="space-y-2">
                {report.feedback.strengths.map((s, idx) => (
                  <p key={idx} className="text-xs text-slate-300 bg-slate-950 p-3 rounded-xl border border-slate-800">
                    • {s}
                  </p>
                ))}
              </div>
            </div>

            {/* WEAK AREAS */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3">
              <h4 className="text-sm font-extrabold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span>Recommended Learning Areas</span>
              </h4>
              <div className="space-y-2">
                {report.feedback.recommendedTopics.map((t, idx) => (
                  <p key={idx} className="text-xs text-slate-300 bg-slate-950 p-3 rounded-xl border border-slate-800">
                    💡 {t}
                  </p>
                ))}
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
