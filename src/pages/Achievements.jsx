import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiRequest } from '../utils/api';
import { Award, Lock, CheckCircle2, Sparkles } from 'lucide-react';

export default function Achievements() {
  const { user } = useAuth();
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAchievements() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const res = await apiRequest('/achievements');
        setAchievements(res.achievements || []);
      } catch (err) {
        console.error('Failed to load achievements:', err);
      } finally {
        setLoading(false);
      }
    }
    loadAchievements();
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* HEADER */}
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-2">
          <Award className="w-3.5 h-3.5" />
          <span>Gamified Milestones</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">Achievements & Badges</h1>
        <p className="text-slate-400 text-sm mt-1">
          Unlock badges automatically as you complete daily goals, maintain streaks, and pass placement mock interviews.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(n => (
            <div key={n} className="h-40 rounded-3xl bg-slate-900/60 animate-pulse border border-slate-800"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((badge) => (
            <div
              key={badge.code}
              className={`p-6 rounded-3xl border transition-all duration-300 space-y-3 ${
                badge.unlocked
                  ? 'bg-slate-900/90 border-amber-500/40 shadow-lg shadow-amber-500/5'
                  : 'bg-slate-950/60 border-slate-800/80 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-2xl ${
                  badge.unlocked ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-slate-900 text-slate-600 border border-slate-800'
                }`}>
                  {badge.unlocked ? '🏆' : '🔒'}
                </div>
                <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${
                  badge.unlocked ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' : 'bg-slate-800 text-slate-500'
                }`}>
                  {badge.unlocked ? 'UNLOCKED' : 'LOCKED'}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-white">{badge.name}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{badge.description}</p>
              </div>

              {badge.unlocked && badge.unlocked_at && (
                <p className="text-[10px] text-teal-400 font-semibold pt-1">
                  Unlocked: {new Date(badge.unlocked_at).toLocaleDateString()}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
