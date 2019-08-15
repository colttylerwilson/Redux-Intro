import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment} from './actions';
import {decrement} from './actions';
import {sign} from './actions';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const log = useSelector(state => state.loggedReducer);
  const dispatch = useDispatch();

  const buttonStyle = {
    backgroundColor: '#4CAF50', /* Green */
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
  };
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button style={buttonStyle} onClick={() => dispatch(increment(5))}>Increment</button>
      <button style={buttonStyle} onClick={() => dispatch(decrement(2))}>Decrement</button>
      <button style={buttonStyle} onClick={() => dispatch(sign())}>Log</button>
      {log ? <h1>The Plan is the Plan</h1> : <h1>You get Nothing</h1>}
    </div>
  );
}

export default App;
