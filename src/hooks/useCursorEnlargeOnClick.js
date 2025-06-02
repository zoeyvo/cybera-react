import { useEffect } from 'react';

// Custom hook for cursor enlargement on click
export function useCursorEnlargeOnClick() {
  useEffect(() => {
    const handleMouseDown = () => {
      document.body.setAttribute('data-cursor-enlarged', 'true');
    };

    const handleMouseUp = () => {
      document.body.removeAttribute('data-cursor-enlarged');
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
}
