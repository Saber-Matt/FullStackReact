//useState and useEffect as well as useWritingHook(make this)
import { useState, useEffect } from 'react';
import { fetchData } from '../../../services/API.jsx';

const useQuotes = () => {
  const [quotes, setQuotes] =
  useState([]);
  useEffect(() => {
    fetchData()
      .then(setQuotes);
  }, []);

  return { quotes };
};

export default useQuotes;
