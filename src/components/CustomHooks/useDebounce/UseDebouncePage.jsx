import React, { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';

const UseDebouncePage = () => {
  const delay = 1000;
  const [searchInput, setSearchInput] = useState();

  const debounce = useDebounce((e) => {
    console.log(`fetching data with input: ${e.target.value}`);
  }, delay);

  return (
    <div>
      <input type='text' onChange={(e) => debounce(e)} />
    </div>
  );
};

export default UseDebouncePage;
