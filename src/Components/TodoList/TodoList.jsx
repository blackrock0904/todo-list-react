import React from 'react';
import TodoItem from '../TodoItem/TodoItem.jsx';

export default function TodoList({ todoList }) {

  return (
    <ul>
      {todoList.map(item => <TodoItem key={item.id} {...item} />)}
    </ul>
  )
}
