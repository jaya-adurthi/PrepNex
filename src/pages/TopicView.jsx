import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiRequest } from '../utils/api';
import {
  BookOpen,
  CheckCircle,
  HelpCircle,
  Clock,
  ArrowLeft,
  Award,
  Sparkles,
  ExternalLink,
  Code,
  Zap,
  CheckCircle2,
  XCircle,
  AlertCircle
} from 'lucide-react';

export default function TopicView({ topicId, setActivePage }) {
  const { user } = useAuth();

  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);

  // Quiz Modal state
  const [quizModalOpen, setQuizModalOpen] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizResult, setQuizResult] = useState(null);
  const [submittingQuiz, setSubmittingQuiz] = useState(false);

  useEffect(() => {
    async function loadTopicData() {
      if (!topicId) return;
      try {
        setLoading(true);
        const res = await apiRequest(`/courses/topic/${topicId}`);
        setTopic(res.topic);
      } catch (err) {
        console.error('Failed to load topic:', err);
      } finally {
        setLoading(false);
      }
    }

    loadTopicData();
  }, [topicId]);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-6 animate-pulse">
        <div className="h-8 w-48 rounded-xl bg-slate-900"></div>
        <div className="h-64 rounded-3xl bg-slate-900"></div>
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 text-center text-slate-400">
        <p>Topic not found.</p>
        <button
          onClick={() => setActivePage('courses')}
          className="mt-4 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  const content = topic.content || {};
  const quizQuestions = content.quiz || [];

  const handleOptionSelect = (qId, optionIdx) => {
    setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const handleQuizSubmit = async () => {
    if (!user) {
      alert('Please sign in to save your quiz scores and progress!');
      return;
    }

    setSubmittingQuiz(true);
    try {
      const res = await apiRequest('/quizzes/submit', 'POST', {
        courseId: topic.course_id,
        topicId: topic.id,
        userAnswers
      });
      setQuizResult(res);
    } catch (err) {
      alert(err.message || 'Quiz submission failed');
    } finally {
      setSubmittingQuiz(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      {/* NAVIGATION BAR */}
      <button
        onClick={() => setActivePage('home')}
        className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Dashboard</span>
      </button>

      {/* TOPIC TITLE HEADER */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 border border-slate-800 space-y-3">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase tracking-wider">
            {topic.category}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
            topic.difficulty === 'Easy' ? 'bg-teal-500/10 text-teal-400 border border-teal-500/30' :
            topic.difficulty === 'Hard' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30' :
            'bg-amber-500/10 text-amber-400 border border-amber-500/30'
          }`}>
            {topic.difficulty || 'Medium'}
          </span>
          <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {topic.estimated_minutes} min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{topic.title}</h1>
        <p className="text-slate-300 text-sm">{topic.description}</p>
      </div>

      {/* CONCEPT EXPLANATION */}
      {content.concept && (
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3">
          <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <span>Concept Explanation</span>
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{content.concept}</p>
        </div>
      )}

      {/* IMPORTANT FORMULAS & RULES */}
      {(content.rules || content.key_rules) && (
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3">
          <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            <span>Important Formulas & Core Rules</span>
          </h2>
          <div className="space-y-2 pt-1">
            {(content.rules || content.key_rules).map((rule, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80 text-xs font-semibold text-slate-200 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-[10px] shrink-0 border border-amber-500/30">
                  {idx + 1}
                </span>
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CODE SNIPPETS (IF PROGRAMMING) */}
      {content.code_snippets && (
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
          <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
            <Code className="w-5 h-5 text-teal-400" />
            <span>Code Snippets & Examples</span>
          </h2>
          <div className="space-y-3">
            {content.code_snippets.map((code, idx) => (
              <div key={idx} className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden">
                <pre className="p-4 text-xs font-mono text-cyan-300 overflow-x-auto">
                  <code>{code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SOLVED EXAMPLES */}
      {content.solved_examples && content.solved_examples.length > 0 && (
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
          <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span>Solved Placement Examples</span>
          </h2>
          <div className="space-y-3">
            {content.solved_examples.map((ex, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <p className="text-sm font-bold text-slate-100">Q{idx + 1}: {ex.question}</p>
                <p className="text-xs text-teal-300 bg-teal-950/30 p-3 rounded-xl border border-teal-500/20 font-medium">
                  💡 <strong>Solution:</strong> {ex.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TIMED QUIZ TRIGGER CARD */}
      {quizQuestions.length > 0 && (
        <div className="p-6 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-extrabold text-white">Ready to test your knowledge?</h3>
            <p className="text-xs text-slate-300 mt-1">
              Take the {quizQuestions.length}-question topic quiz to unlock progress and verify mastery.
            </p>
          </div>
          <button
            onClick={() => {
              setUserAnswers({});
              setQuizResult(null);
              setQuizModalOpen(true);
            }}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-extrabold text-sm hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all shrink-0"
          >
            Start Topic Quiz
          </button>
        </div>
      )}

      {/* QUIZ MODAL */}
      {quizModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl text-slate-100 my-8">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-extrabold text-white">{topic.title} — Topic Quiz</h3>
                <p className="text-xs text-slate-400">Select the best answer for each question.</p>
              </div>
              <button
                onClick={() => setQuizModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* QUIZ RESULTS VIEW */}
            {quizResult ? (
              <div className="space-y-6">
                <div className={`p-6 rounded-3xl text-center space-y-2 border ${
                  quizResult.passed
                    ? 'bg-teal-500/10 border-teal-500/40 text-teal-300'
                    : 'bg-rose-500/10 border-rose-500/40 text-rose-300'
                }`}>
                  <p className="text-4xl font-black">{quizResult.score_percentage}%</p>
                  <p className="text-sm font-bold">
                    {quizResult.passed ? '🎉 Passed & Topic Mastered!' : '⚠️ Below 60% Passing Threshold'}
                  </p>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">{quizResult.recommendation}</p>
                </div>

                <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                  {quizResult.evaluations.map((ev, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5 text-xs">
                      <div className="flex items-start gap-2 font-bold text-slate-100">
                        {ev.isCorrect ? (
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        )}
                        <span>Q{idx + 1}: {ev.question}</span>
                      </div>
                      <p className="text-slate-400 pl-6">
                        Your answer: <strong className={ev.isCorrect ? 'text-teal-400' : 'text-rose-400'}>
                          {ev.options[ev.selected] !== undefined ? ev.options[ev.selected] : 'None'}
                        </strong>
                      </p>
                      {!ev.isCorrect && (
                        <p className="text-teal-400 pl-6">Correct answer: {ev.options[ev.correct]}</p>
                      )}
                      <p className="text-slate-400 pl-6 italic">Explanation: {ev.explanation}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setQuizModalOpen(false)}
                  className="w-full py-3 rounded-2xl bg-cyan-500 text-slate-950 font-bold text-sm hover:opacity-90"
                >
                  Close & Continue
                </button>
              </div>
            ) : (
              /* QUESTION FORM */
              <div className="space-y-6">
                <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                  {quizQuestions.map((q, qIdx) => (
                    <div key={q.id || qIdx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                      <p className="text-sm font-bold text-white">
                        {qIdx + 1}. {q.question}
                      </p>

                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = userAnswers[q.id || qIdx] === optIdx;
                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleOptionSelect(q.id || qIdx, optIdx)}
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
                </div>

                <button
                  onClick={handleQuizSubmit}
                  disabled={submittingQuiz}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold text-sm hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all"
                >
                  {submittingQuiz ? 'Evaluating Answers...' : 'Submit Quiz & Calculate Score'}
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
