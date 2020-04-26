import React from 'react';
import './App.css';
import TimeList from './components/time-list.component';
import AddTimeEntryForm from './components/add-time-entry-form';

function App() {
  return (
    <div className="App">
      <h1>Just Clock It</h1>
      <TimeList />
      <AddTimeEntryForm />
    </div>
  );
}

export default App;
