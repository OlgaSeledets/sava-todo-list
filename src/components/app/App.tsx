import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { addTodo, setStatus, clearList } from "../../slices/todoSlice";
import { Button } from "../button/Button"
import { TodoItem } from '../todo-item/TodoItem';

function App() {
  const todoList = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const [value, setValue] = useState('');

  const handleAddTodo = () => {
    dispatch(addTodo(value))
    setValue('')
  }

  return (
    <div className="App">
      <h1>Дневной список дел</h1>
      <div className='wrapper-addTodo'>
        <input className='todo-input' onChange={(e) => setValue(e.target.value)} value={value} placeholder='Добавить новый элемент'/>
        <Button customStyles={'add-btn'} caption={'Добавить'} action={() => value !== '' && handleAddTodo()} />
      </div>
      <div className='todo-list'>
        {todoList.map(item => (
          <TodoItem key={item.id} id={item.id} completed={item.completed} text={item.text} />
        ))}
      </div>
      <div className='footer'>
        <hr className='line'></hr>
        <div className='progress-and-clear'>
          <p>{todoList.filter(item => item.completed === true).length}/{todoList.length} дело завершено</p>
          <Button customStyles={'clear-btn'} caption={'Очистить'} action={() => dispatch(clearList())} />
        </div>
      </div>
    </div>
  );
}

export default App;
