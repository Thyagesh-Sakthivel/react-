import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [output, setOutput] = useState('');

  const showAlert = () => {
    alert('Button was clicked!');

    if (name.toLowerCase() === 'thyagesh') {
      setOutput(`Hi ${name}`);
    } else {
      setOutput('Invalid user');
    }
  };

  return (
    <div className="App">
      <header className="inputbox">
        <h1>LOG IN</h1>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button onClick={showAlert}id='btn'>Search</button><br /><br />
        <p>{output}</p>
      </header>
    </div>
  ); 
}

export default App;
