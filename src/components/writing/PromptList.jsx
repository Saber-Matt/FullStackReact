import React from 'react';
import { Link } from 'react-router-dom';
import { usePrompts } from '../../state/customHooks';
import Prompt from './Prompt';

const PromptList = () => {
  const { prompts, loading } = usePrompts();
  if(loading) return <h1>Loading...</h1>;

  const promptElements = prompts.map((prompt) => (
    <li key={prompt.id}>
      <Link to={`/${prompt.id}`}>
        <Prompt {...prompt} />
      </Link>
    </li>
  ));

  return (
  
    <ul>{promptElements}</ul>
  );

};

export default PromptList;
