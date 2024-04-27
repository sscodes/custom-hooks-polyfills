import React, { useState } from 'react';

const withCounter = (OldComponent) => {
  return function CounterHOC() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <OldComponent
          count={count}
          increaseCount={() => setCount((e) => e + 1)}
        />
      </div>
    );
  };
};

export default withCounter;
