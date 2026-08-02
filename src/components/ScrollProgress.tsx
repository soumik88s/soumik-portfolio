import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const totalScroll = documentHeight - windowHeight;
      const currentScroll = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;
      setScrollPercent(currentScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-slate-800/40">
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400 transition-all duration-150 ease-out"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
};
