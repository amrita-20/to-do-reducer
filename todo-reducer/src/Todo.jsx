import React from 'react'

function Todo({ todo }){
  return (
    <div>
      <span>{todo}</span>
      <input type='checkbox'></input>
      <button>Delete</button>
    </div>
  )
}

export default Todo
