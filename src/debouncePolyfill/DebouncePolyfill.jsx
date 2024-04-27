import React, { useRef } from 'react';

const DebouncePolyfill = () => {
    
  const customDebounce = (fn, delay) => {
    let timer;
    return (e) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn(e);
      }, delay); 
    };
  };

  const fetchData = customDebounce((e) => {
    console.log(`fetching data with text: ${e.target.value}`);
  }, 1000);

  return (
    <div>
      <input type='text' onChange={(e) => fetchData(e)} />
    </div>
  );
};

export default DebouncePolyfill;
