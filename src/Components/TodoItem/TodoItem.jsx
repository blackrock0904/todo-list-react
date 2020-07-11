import React, { useContext } from 'react';
import Context from '../../Context/context.js';

export default function TodoItem({ id, title, completed }) {
  const { dispatch } = useContext(Context);

  const classList = (completed) ? 'throuth' : ''
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch({
          type: 'toggle',
          payload: id
        })}
      />
      <span className={classList}>{title}</span>
      <button
        className="delete"
        onClick={() => {
          dispatch({
            type: 'remove',
            payload: id
          })
        }}>
        delete
      </button>
    </li>
  )
}
