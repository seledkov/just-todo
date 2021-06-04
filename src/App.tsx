import React from 'react';
import TodoAdd from './Components/TodoAdd';
import TodosFilters from './Components/TodosFilter';
import TodosList from './Components/TodosList';

const App = () => {
  return (
    <div className='App'>
      <TodosFilters />
      <TodoAdd />
      <TodosList />
    </div>
  );
};

export default App;
