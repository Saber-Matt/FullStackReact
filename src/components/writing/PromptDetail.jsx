/* eslint-disable max-len */
import React from 'react';
import { useParams } from 'react-router-dom';
import { usePrompt } from '../../state/writinghook.js';
import { deletePrompt } from '../../services/writingFetch.js';
import { Link } from 'react-router-dom';

const PromptDetails = () => {
  const { id } = useParams();
  const prompt = usePrompt(id);


  if(!prompt) return <h1>Loading...</h1>;

  return (
    <>
      <h2>Prompt</h2>
      <p>Title</p>
      <p>{prompt.title}</p>
      <p>{prompt.text}</p>


      <Link to={`/${fighter.id}/edit`}>
        Write your very own prompt
      </Link>
      <button id={id} onClick={((e) => deletePrompt(e.target.id))}>
        Recycle Prompt
      </button>
    </>
  );
};

export default PromptDetails;
