export const useThrottle = (fn, delay) => {
  let start = 0;

  return () => {
    let now = Date.now();
    if (now - start < delay) return;
    start = now;
    return fn();
  };
};
