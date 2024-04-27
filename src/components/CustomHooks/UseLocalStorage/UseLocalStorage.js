const useLocalStorage = (key) => {
  const setData = (value) => {
    localStorage.setItem(key, value);
  };
  const getData = () => {
    return localStorage.getItem(key);
  };
  const deleteData = () => {
    localStorage.removeItem(key);
  };

  return { setData, getData, deleteData };
};

export default useLocalStorage;
