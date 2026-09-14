import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { apiRequest } from '../utils/api';
import { User, Mail, Calendar, Flame, Clock, LogOut, Sun, Moon, Edit, Check } from 'lucide-react';

export default function Profile() {
  const { user, logout, setUser } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const [profileData, setProfileData] = useState(null);
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [savingName, setSavingName] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      if (!user) return;
      try {
        const res = await apiRequest('/user/profile');
        setProfileData(res);
        setNameInput(res.user.name);
      } catch (err) {
        console.error('Failed to load profile:', err);
      }
    }
    loadProfile();
  }, [user]);

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center text-slate-400">
        <p>Please sign in to view your profile.</p>
      </div>
    );
  }

  const handleSaveName = async () => {
    if (!nameInput.trim()) return;
    setSavingName(true);
    try {
      await apiRequest('/user/profile', 'PUT', { name: nameInput.trim() });
      setUser({ ...user, name: nameInput.trim(), full_name: nameInput.trim() });
      setEditingName(false);
    } catch (err) {
      alert(err.message || 'Failed to update profile name');
    } finally {
      setSavingName(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      {/* HEADER CARD */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
        
        {/* AVATAR */}
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-cyan-500 to-teal-400 text-slate-950 font-black text-3xl flex items-center justify-center shadow-xl shadow-cyan-500/20 shrink-0 uppercase">
          {(user.full_name || user.name || 'U').charAt(0)}
        </div>

        <div className="space-y-1.5 flex-1">
          {editingName ? (
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-slate-950 border border-cyan-500 text-white font-bold text-lg focus:outline-none"
              />
              <button
                onClick={handleSaveName}
                disabled={savingName}
                className="p-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
              >
                <Check className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h1 className="text-2xl font-black text-white">{user.full_name || user.name}</h1>
              <button
                onClick={() => {
                  setNameInput(user.full_name || user.name);
                  setEditingName(true);
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400"
              >
                <Edit className="w-4 h-4" />
              </button>
            </div>
          )}

          <p className="text-xs text-slate-400 flex items-center justify-center sm:justify-start gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            <span>{user.email}</span>
          </p>

          <p className="text-[11px] text-slate-500 flex items-center justify-center sm:justify-start gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>Member since {new Date(user.created_at || Date.now()).toLocaleDateString()}</span>
          </p>
        </div>

        <button
          onClick={logout}
          className="px-4 py-2 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 font-bold text-xs hover:bg-rose-500 hover:text-white transition-all flex items-center gap-2"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>

      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <p className="text-xs font-bold text-slate-400 uppercase">Enrolled Courses</p>
          <p className="text-2xl font-black text-white mt-1">
            {profileData ? profileData.enrolled_courses_count : 0}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <p className="text-xs font-bold text-slate-400 uppercase">Current Streak</p>
          <p className="text-2xl font-black text-amber-400 mt-1">
            🔥 {profileData ? profileData.current_streak : 0} Days
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <p className="text-xs font-bold text-slate-400 uppercase">Completed Tasks</p>
          <p className="text-2xl font-black text-teal-400 mt-1">
            {profileData ? profileData.completed_tasks_count : 0}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <p className="text-xs font-bold text-slate-400 uppercase">Learning Minutes</p>
          <p className="text-2xl font-black text-cyan-400 mt-1">
            ⏱️ {profileData ? profileData.total_learning_minutes : 0} min
          </p>
        </div>

      </div>

      {/* SETTINGS CARD */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
        <h2 className="text-lg font-extrabold text-white">Platform Settings</h2>

        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-white">Theme Preference</p>
            <p className="text-xs text-slate-400">Current theme: <span className="text-cyan-400 capitalize">{theme}</span></p>
          </div>

          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-bold hover:border-cyan-500 flex items-center gap-2"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
            <span>Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
          </button>
        </div>
      </div>

    </div>
  );
}
