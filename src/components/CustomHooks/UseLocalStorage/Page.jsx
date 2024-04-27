import React, { useState } from 'react';
import useLocalStorage from './UseLocalStorage';


const Page = () => {
  const [name, setName] = useState();
  const { setData, getData, deleteData } = useLocalStorage('name');

  return (
    <div>
      <input type='text' onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setData(name)}>Set</button>
      <button onClick={() => console.log(getData())}>Get</button>
      <button onClick={() => deleteData()}>Delete</button>
    </div>
  );
};

export default Page;
