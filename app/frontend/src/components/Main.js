import React, { useContext, useEffect } from 'react';
import getTasks from '../utils/getAll';
import GlobalContext from '../context/GlobalContext';

function Main() {
  const {fetchData, setFetchData} = useContext(GlobalContext);

  useEffect(() => {
    getTasks().then((data) => setFetchData(data));
    console.log(fetchData);
  }, [setFetchData]);

  return (
    <div>
      <main>
        { fetchData }
      </main>
    </div>
  );
}

export default Main;
