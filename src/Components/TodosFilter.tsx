import React from 'react';

const TodosFilters = (props: any) => {
  return (
    <div>
      <select>
        <option value='all'>all</option>
        <option value='done'>done</option>
        <option value='undone'>undone</option>
      </select>
      filters Фильтрация по типу / все, выполненные, невыполненные
      <p>Отображение счётчика выполненных и невыполненных задач</p>
    </div>
  );
};

export default TodosFilters;
