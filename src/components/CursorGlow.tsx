import React, { useEffect, useState } from 'react';

export const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-30 transition-transform duration-75 ease-out rounded-full hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '320px',
        height: '320px',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(124, 58, 237, 0.08) 45%, transparent 70%)',
      }}
    />
  );
};
