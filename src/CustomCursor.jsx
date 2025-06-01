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
    return () => window.removeEventListener('mousemove', moveCursor);
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
      <img src={import.meta.env.BASE_URL + 'assets/cursor.cur'} alt="cursor" draggable="false" />
    </div>
  );
};

export default CustomCursor;
