import React, { useReducer } from 'react';
import { DemoReducer, INITIAL_STATE } from './DemoReducer';

const UserReducerComp = () => {
  const [state, dispatch] = useReducer(DemoReducer, INITIAL_STATE);

  const toggle = (val) => {
    if (val == 'Case 1')
      dispatch({
        type: val,
        payload: {
          a: false,
          b: true,
        },
      });
    else
      dispatch({
        type: val,
        payload: {
          a: true,
          b: false,
        },
      });
  };

  return (
    <div>
      <button onClick={() => toggle('Case 1')}>A OFF, B ON</button>
      <button onClick={() => toggle('Case 2')}>A ON, B OFF</button>
      <div>{state.a && 'A'}</div>
      <div>{state.b && 'B'}</div>
    </div>
  );
};

export default UserReducerComp;
