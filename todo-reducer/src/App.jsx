import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

const todos = ['sleep', 'wake up', 'study', 'attend meeting', 'do leetcode', 'revise js concepts'];

function reducer (state, action){
  switch(action.type) {
    case ACTIONS.INCREMENT:
      return ({count: state.count+1})
    case ACTIONS.DECREMENT:
      return ({count: state.count-1})
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count : 0})


  const handleIncrement = () => {
    dispatch({type: ACTIONS.INCREMENT})
  }

  const handleDecrement = () => {
    dispatch({ type: ACTIONS.DECREMENT})
  }
  return (
    <>
      <div>
        <span>Count: {state.count}</span>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
     <main>
      {todos.map((todo) => <Todo key={todo} todo={todo} />
      )}
     </main>
    </>
  )
}

export default App
