import React, { useState } from 'react';
import withCounter from './CounterHOC';

const Hover = ({ count, increaseCount }) => {
  return (
    <div>
      <button onMouseOver={increaseCount}>Hover</button>
      <h1>{count}</h1>
    </div>
  );
};

export default withCounter(Hover);
