import React from 'react';
import PropTypes from 'prop-types';

const Prompt = ({ title, text }) => (
  <figure className="Prompt">
    <h2>Title: {title}</h2>
    <figcaption>
      <p>Text: {text}</p>
      <br/>
      <p>What happens next?</p>
    </figcaption>
   
  </figure>
);

Prompt.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Prompt;
