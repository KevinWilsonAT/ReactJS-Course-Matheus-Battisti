import { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState("Kevin");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <h1>Input value with React</h1>
      <input type="text" value={value} onChange={handleChange} />
      <p> {value} </p>
    </div>
  );
}

export default App;