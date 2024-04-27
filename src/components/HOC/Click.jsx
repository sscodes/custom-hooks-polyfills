import React, { useState } from 'react';
import withCounter from './CounterHOC';

const Click = ({ count, increaseCount }) => {
  return (
    <div>
      <button onClick={increaseCount}>Click</button>
      <h1>{count}</h1>
    </div>
  );
};

export default withCounter(Click);
