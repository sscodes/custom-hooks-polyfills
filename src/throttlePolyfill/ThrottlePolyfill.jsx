import React from 'react';

const ThrottlePolyfill = () => {
  const customThrottle = (fn, delay) => {
    let start = 0;
    return (e) => {
      let now = Date.now();
      if (now - start < delay) return;
      start = now;
      return fn(e);
    };
  };

  const fetchData = customThrottle((e) => {
    console.log(`fetching data for input: ${e.target.value}`);
  }, 1000);

  return (
    <div>
      <input type='text' onChange={(e) => fetchData(e)} />
    </div>
  );
};

export default ThrottlePolyfill;
