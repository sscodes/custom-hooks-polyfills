import React, { useEffect, useState } from 'react';

const List = ({ getList }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log(getList());
    setList(getList());
  }, [getList]);

  return list.map((item, i) => <div key={i}>{item}</div>);
};

export default List;
