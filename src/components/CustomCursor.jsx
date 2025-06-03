import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.scss';

// Custom cursor overlay that follows the mouse and plumps up on click
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [enlarged, setEnlarged] = useState(false);
  const [coords, setCoords] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  // Mouse move handler
  useEffect(() => {
    const moveCursor = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);

    // Only hide cursor for touch-only devices (not hybrid)
    const isTouchOnly = () => {
      return (
        ('ontouchstart' in window || navigator.maxTouchPoints > 0) &&
        !window.matchMedia('(pointer: fine)').matches
      );
    };
    if (isTouchOnly() && cursorRef.current) {
      cursorRef.current.style.display = 'none';
    }
    const hideCursor = () => {
      if (isTouchOnly() && cursorRef.current) {
        cursorRef.current.style.display = 'none';
      }
    };
    const showCursor = () => {
      if (!isTouchOnly() && cursorRef.current) {
        cursorRef.current.style.display = '';
      }
    };
    window.addEventListener('touchstart', hideCursor, { passive: true });
    window.addEventListener('touchmove', hideCursor, { passive: true });
    window.addEventListener('touchend', hideCursor, { passive: true });
    window.addEventListener('touchcancel', hideCursor, { passive: true });
    window.addEventListener('mousemove', showCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('touchstart', hideCursor);
      window.removeEventListener('touchmove', hideCursor);
      window.removeEventListener('touchend', hideCursor);
      window.removeEventListener('touchcancel', hideCursor);
      window.removeEventListener('mousemove', showCursor);
    };
  }, []);

  // Click plump up animation
  useEffect(() => {
    const handleDown = () => {
      setEnlarged(true);
    };
    const handleUp = () => {
      setEnlarged(false);
    };
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, []);

  // Cursor style
  const style = {
    left: coords.x + 'px',
    top: coords.y + 'px',
  };

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor${enlarged ? ' plump' : ''}`}
      style={style}
    >
      <img src={import.meta.env.BASE_URL + 'assets/cursor/cursor.cur'} alt="cursor" draggable="false" />
    </div>
  );
};

export default CustomCursor;
