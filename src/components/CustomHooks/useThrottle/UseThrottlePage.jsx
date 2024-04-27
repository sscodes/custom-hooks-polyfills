import React, { useEffect } from 'react';
import { useThrottle } from './useThrottle';

const UseThrottlePage = () => {

  const throttle = useThrottle(() => {
    for (let index = 0; index < 10000000; index++) {}
    console.log('expensive function');
  }, 1000);

  useEffect(() => {
    window.addEventListener('resize', throttle);

    return () => window.removeEventListener('resize', throttle);
  }, []);

  return <></>;
};

export default UseThrottlePage;
