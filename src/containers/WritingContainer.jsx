/* eslint-disable max-len */
//this is where the components are brought in to display state to children components via props
//this is where I use useWritingHook - where the { state } is being passed from state/writinghook.js

import React from 'react';
import writinghook from 'writinghook.js';
import PromptList from '../containers/PromptList.jsx';


export default WritingContainer{

  render() {
    return (
      <div className="PromptPage">
        <PromtList/>

      </div>
    );
  }

}