import React, { useEffect, useState } from 'react';
import './TodosFilter.scss';
const TodosFilters = (props: any) => {
  const [allTodos, setAllTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);
  const [undoneTodos, setUndoneTodos] = useState([]);
  //props.setSortFilter
  useEffect(() => {
    setFilterUndone();
    setFilterDone();
    setFilterAll();
    console.log('useEffect refilter');
  }, [props.todos, allTodos]);
  const setFilterAll = () => {
    setAllTodos((prevState) => props.todos);
    props.onSetFilteredTodos(allTodos);
    console.log(props.todos);
  };
  const setFilterDone = () => {
    setDoneTodos(props.todos.filter((todo: ITodo) => todo.isDone === true));
    props.onSetFilteredTodos(doneTodos);
  };
  const setFilterUndone = () => {
    setUndoneTodos(props.todos.filter((todo: ITodo) => todo.isDone === false));
    props.onSetFilteredTodos(undoneTodos);
  };

  return (
    <div className='todos-filter'>
      <button onClick={setFilterAll}>all {allTodos.length}</button>
      <button onClick={setFilterDone}>done {doneTodos.length}</button>
      <button onClick={setFilterUndone}>undone {undoneTodos.length}</button>
      <p>filters Фильтрация по типу / все, выполненные, невыполненные</p>
      <p> Отображение счётчика выполненных и невыполненных задач</p>
    </div>
  );
};

export default TodosFilters;
