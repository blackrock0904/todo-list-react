import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import TodoList from './Components/TodoList/TodoList';
import Context from './Context/context.js';
import reducer from './reducer.js';

function App() {
  
  const preloaded = JSON.parse(localStorage.getItem('todos'));

  const [state, dispatch] = useReducer(reducer, preloaded)
  const [todoTitle, setTodoTitle] = useState('')
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  const addTodo = (e) => {
    if (e.key === 'Enter') {
      dispatch({
        type: 'add',
        payload: todoTitle
      })
      setTodoTitle('');
    }
  }

  return (
    <Context.Provider value={{
      // ...state,
      dispatch
    }}>
      <div className="App">
        <div>
          <input
            placeholder="Input todo"
            name="todo"
            type="text"
            onChange={e => setTodoTitle(e.target.value)}
            onKeyPress={addTodo}
            value={todoTitle}
          />
        </div>
        <div>
          <TodoList todoList={state} />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
