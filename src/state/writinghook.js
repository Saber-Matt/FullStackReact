//useState and useEffect as well as useWritingHook(make this)
import { useState, useEffect } from 'react';
import { fetchPrompt, fetchPrompts } from '../../../services/API.jsx';

export const usePrompts = (page) => {
  const [loading, setLoading] = useState(true);
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    fetchPrompts(page)
      .then(setPrompts)
      .finally(() => setLoading(false));
  }, [page]);

  return { prompts, loading };
};

export const usePrompt = (id) => {
  const [prompt, setPrompt] = useState(null);

  useEffect(() => {
    fetchPrompt(id).then(setPrompt);
  }, [id]);

  return prompt;
};



