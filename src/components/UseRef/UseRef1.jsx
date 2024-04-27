import React, { useEffect, useRef, useState } from 'react';

const UseRef1 = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      <button
        onClick={() => setCount(count - 1)}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          marginRight: '0.7rem',
        }}
      >
        -
      </button>
      <span style={{ fontSize: '2rem' }}>{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          marginLeft: '0.7rem',
        }}
      >
        +
      </button>
      <h2>Number of times rendering: {renderCount.current}</h2>
    </div>
  );
};

export default UseRef1;
