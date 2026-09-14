import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import SplashScreen from './components/layout/SplashScreen';
import Navbar from './components/layout/Navbar';
import AuthModal from './components/auth/AuthModal';

import Home from './pages/Home';
import Courses from './pages/Courses';
import MyLearning from './pages/MyLearning';
import TopicView from './pages/TopicView';
import DSAPatterns from './pages/DSAPatterns';
import AptitudeView from './pages/AptitudeView';
import Progress from './pages/Progress';
import MockInterview from './pages/MockInterview';
import Achievements from './pages/Achievements';
import Profile from './pages/Profile';

function AppContent() {
  const [showSplash, setShowSplash] = useState(true);
  const [activePage, setActivePage] = useState('home');
  const [selectedTopicId, setSelectedTopicId] = useState('quant-number-system');

  // URL Hash Router Sync
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        setActivePage('home');
        return;
      }

      if (hash.startsWith('dsa') || hash.startsWith('/dsa')) {
        setActivePage('dsapatterns');
      } else if (hash.startsWith('aptitude') || hash.startsWith('/aptitude')) {
        setActivePage('aptitude');
      } else if (hash.startsWith('courses')) {
        setActivePage('courses');
      } else if (hash.startsWith('mylearning')) {
        setActivePage('mylearning');
      } else if (hash.startsWith('mockinterview')) {
        setActivePage('mockinterview');
      } else if (hash.startsWith('progress')) {
        setActivePage('progress');
      } else if (hash.startsWith('achievements')) {
        setActivePage('achievements');
      } else if (hash.startsWith('profile')) {
        setActivePage('profile');
      } else if (hash.startsWith('topic')) {
        setActivePage('topic');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const navigateToPage = (pageId) => {
    setActivePage(pageId);
    if (pageId === 'dsapatterns') {
      window.location.hash = 'dsa';
    } else {
      window.location.hash = pageId;
    }
  };

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 transition-colors duration-300">
      
      {/* NAVBAR */}
      <Navbar activePage={activePage} setActivePage={navigateToPage} />

      {/* AUTH MODAL */}
      <AuthModal />

      {/* MAIN VIEW CONTENT */}
      <main className="flex-1">
        {activePage === 'home' && (
          <Home setActivePage={navigateToPage} setSelectedTopicId={setSelectedTopicId} />
        )}
        {activePage === 'courses' && (
          <Courses setActivePage={navigateToPage} setSelectedTopicId={setSelectedTopicId} />
        )}
        {activePage === 'mylearning' && (
          <MyLearning setActivePage={navigateToPage} setSelectedTopicId={setSelectedTopicId} />
        )}
        {activePage === 'topic' && (
          <TopicView topicId={selectedTopicId} setActivePage={navigateToPage} />
        )}
        {activePage === 'dsapatterns' && (
          <DSAPatterns />
        )}
        {activePage === 'aptitude' && (
          <AptitudeView />
        )}
        {activePage === 'progress' && (
          <Progress setActivePage={navigateToPage} setSelectedTopicId={setSelectedTopicId} />
        )}
        {activePage === 'mockinterview' && (
          <MockInterview setActivePage={navigateToPage} />
        )}
        {activePage === 'achievements' && (
          <Achievements />
        )}
        {activePage === 'profile' && (
          <Profile />
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300">PREPNEX</span>
            <span>— Prepare Today. Step Into Your Future.</span>
          </div>
          <p>© 2026 PrepNex Platform. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}
