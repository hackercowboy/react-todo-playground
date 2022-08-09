import React from 'react';
import Todos from './Todos';

import './App.css';

function App() {
  return (
    <main>
      <h1>Rails Todo Playground</h1>
      <div className="container">
        <Todos />
      </div>
    </main>
  );
}

export default App;
