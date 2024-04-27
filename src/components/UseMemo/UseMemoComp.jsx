import React, { useEffect, useMemo, useState } from 'react';

function slowFunction() {
  for (let index = 0; index < 1000000000; index++) {}
  return 2;
}

const UseMemoComp = () => {
  const [number, setNumber] = useState(0);
  const [darktheme, setDarkTheme] = useState(false);

  useMemo(() => console.log(slowFunction()), [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: darktheme ? 'black' : 'white',
      color: darktheme ? 'white' : 'black',
    };
  }, [darktheme]);

  useEffect(() => {
    console.log('themestyles called');
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
      <br />
      <h4>{number}</h4>
    </div>
  );
};

export default UseMemoComp;
