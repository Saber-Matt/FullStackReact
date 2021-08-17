import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PromptList from '../Prompts/PromptList';
import PromptDetails from '../PromptDetails/PromptDetails';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={PromptList} />
      <Route exact path="/add" component={FormPage} />
      <Route exact path="/:id/edit" component={EditFormPage} />
      <Route exact path="/:id" component={PromptDetails} />
      
      
    </Switch>
  );
}
