import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Дневной список дел</h1>
      <div className='wrapper'>
        <input className='todo-input' placeholder='Добавить новый элемент'></input>
        <button className='add-btn'>Добавить</button>
      </div>
      <div className='todo-list'>
        <div className='todo'>
          <input type='checkbox' className='todo-checkbox'></input>
          <p className='todo-item'>New list item</p>
        </div>
        <div className='todo'>
          <input type='checkbox' className='todo-checkbox'></input>
          <p className='todo-item'>New list item</p>
        </div>
        <div className='todo'>
          <input type='checkbox' className='todo-checkbox'></input>
          <p className='todo-item'>New list item</p>
        </div>
      </div>
      <hr></hr>
      <div className='wrapper-footer'>
        <p>1/3 дело завершено</p>
        <button className='clear-btn'>Очистить</button>
      </div>
    </div>
  );
}

export default App;
