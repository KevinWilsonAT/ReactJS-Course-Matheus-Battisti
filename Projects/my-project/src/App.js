import './App.css';
import HWorld from './components/HelloWorld';
import TextPhrase from './components/TextPhrase';

function App() {
  const name = 'Kevin'
  const newname = name.toUpperCase()

  function sum(a, b){
    return a+b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello World (In React)</h1>
        <p>This is my first app (in React)</p>
        <h2>Updating JSX</h2>
        <p>Hi, {name} (Normal).</p>
        <p>Hi, {newname} (Uppercase).</p>
        <p>Sum: {sum(1, 2)}</p>
        <img src={url} alt="My Image" />
        <TextPhrase />
        <HWorld />
        <TextPhrase />
      </header>
    </div>
  );
}

export default App;
