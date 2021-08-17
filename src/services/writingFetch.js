/* eslint-disable max-len */
//this is where the writing fetch to our backend is declaired
//fetch for post, put, getAll, getById, and delete


//a writing propmt is a string.
export const fetchPrompts = async () => {
  const res = await fetch('https://serene-escarpment-34661.herokuapp.com/api/v1/prompts/');
  const prompts = await res.json();

  return prompts;
};

export const fetchPrompt = async (id) => {
  console.log(id);
  const res = await fetch(`https://serene-escarpment-34661.herokuapp.com/api/v1/prompts/${id}`);
  const prompt = await res.json();
  return prompt;
};

export const createPrompt = async (prompt) => {
  const res = await fetch('https://serene-escarpment-34661.herokuapp.com/api/v1/prompts/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(prompt)
  });
  const newPrompt = res.json();
  return await newPrompt;
};

export const updatePrompt = async (prompt, id) => {
  console.log(prompt);
  const res = await fetch(`https://serene-escarpment-34661.herokuapp.com/api/v1/prompts/${id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(prompt)
  });
  console.log(res);
  const updatedPrompt = res.json();
  console.log(updatedPrompt);
  return await updatedPrompt;
};

export const deletePrompt = async (id) => {
  const res = await fetch(`https://serene-escarpment-34661.herokuapp.com/api/v1/prompts/${id}`, {
    method: 'DELETE'
  });
  console.log(res);
  if(res.status === 200) alert('Prompt Recycled');
  
};

