import React, { useCallback, useEffect, useMemo, useState } from 'react';
import List from './List';

const UseCallbackComp = () => {
  const [number, setNumber] = useState(0);
  const [darktheme, setDarkTheme] = useState(false);

  const getList = useCallback(
    () => [number * 2, number * 5, number * 10],
    [number]
  );
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: darktheme ? 'black' : 'white',
      color: darktheme ? 'white' : 'black',
    };
  }, [darktheme]);

  /* 
  Difference between useCallback and useMemo is that useCallback returns the callback 
  function which it takes in as the first arguement whereas useMemo returns the value of the 
  callback function.
  */

  useEffect(() => {
    console.log(themeStyles);
  }, [themeStyles]);

  return (
    <div style={themeStyles}>
      <input type='number' onChange={(e) => setNumber(e.target.value)} />
      <br />
      <br />
      <button
        style={{ backgroundColor: 'blue', color: 'white' }}
        onClick={() => setDarkTheme(!darktheme)}
      >
        Change Theme
      </button>
      <List getList={getList} />
    </div>
  );
};

export default UseCallbackComp;
