import React, { useRef } from 'react';

const UseRef2 = () => {
  const inputRef = useRef();
  function inputFocus() {
    inputRef.current.focus();
  }
  return (
    <div>
      <input type='text' ref={inputRef} />
      <br />
      <br />
      <button
        onClick={inputFocus}
        style={{ backgroundColor: 'blue', color: 'white' }}
      >
        Focus
      </button>
    </div>
  );
};

export default UseRef2;
