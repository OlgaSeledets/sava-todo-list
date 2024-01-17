import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { addTodo } from "../../slices/todoSlice";

function App() {
  const todoList = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const [value, setValue] = useState('');

  return (
    <div className="App">
      <h1>Дневной список дел</h1>
      <div className='wrapper-addTodo'>
        <input className='todo-input' onChange={(e) => setValue(e.target.value)} placeholder='Добавить новый элемент'></input>
        <button className='add-btn' onClick={() => { dispatch(addTodo(value)) }}>Добавить</button>
      </div>
      <div className='todo-list'>
        {todoList.map((item) => (
          <div className='todo' key={item.id}>
            <input type='checkbox' className='todo-checkbox'></input>
            <p className='todo-item'>{item.text}</p>
          </div>
        ))}
      </div>
      <div className='footer'>
        <hr className='line'></hr>
        <div className='progress-and-clear'>
          <p>1/3 дело завершено</p>
          <button className='clear-btn'>Очистить</button>
        </div>
      </div>
    </div>
  );
}

export default App;
