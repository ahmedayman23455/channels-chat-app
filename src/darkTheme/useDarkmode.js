import { useState } from 'react';

const useDarkmode = () => {
  const localStorageIsEmpty = !!!localStorage.getItem('darkMode');

  const [darkmode, setDarkmode] = useState(
    localStorageIsEmpty ? false : JSON.parse(localStorage.getItem('darkMode'))
  );

  const toggleDarkmode = () => {
    setDarkmode((prevstate) => !prevstate);
    localStorage.setItem('darkMode', JSON.stringify(!darkmode));
  };

  return [darkmode, toggleDarkmode];
};

export default useDarkmode;
