import React, { useState } from 'react';

const Button = ({ onClick, style, children }) => {
  const [touched, setTouchState] = useState(false);

  const className = touched ? 'btn touched' : 'btn';
  return (
    <div style={{ ...style }}>
      <button
        className={className}
        onMouseDown={() => setTouchState(!touched)}
        onMouseUp={() =>
          setTimeout(() => {
            setTouchState(!touched);
            if (onClick) {
              onClick();
            }
          }, 150)
        }
      >
        {{ ...children }}
      </button>
    </div>
  );
};

export default Button;
