import React from 'react';
import './styles/App.css';
import ExampleComponent from './components/ExampleComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My App</h1>
      </header>
      <main>
        <ExampleComponent />
      </main>
    </div>
  );
}

export default App;