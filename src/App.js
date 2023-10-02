import React from 'react';

const todoList = [
  { id: 1, task: 'Einkaufen gehen', completed: false },
  { id: 2, task: 'React-App erstellen', completed: true },
  { id: 3, task: 'Übungen für JavaScript machen', completed: false },
  // Weitere Aufgaben können hinzugefügt werden
];

function App() {
  return (
    <div className="App">
      <h1>ToDo-Liste</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            {todo.task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
