import React, { useEffect, useRef, useState } from 'react';

const UseRef3 = () => {
  const [state, setState] = useState();
  const prevState = useRef('');
  useEffect(() => {
    prevState.current = state;
  }, [state]);
  return (
    <div>
      <input type='text' onChange={(e) => setState(e.target.value)} />
      <br />
      Currently the state is {state}.
      <br />
      Previously the state was {prevState.current}.
    </div>
  );
};

export default UseRef3;
