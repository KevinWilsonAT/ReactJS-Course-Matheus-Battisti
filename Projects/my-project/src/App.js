import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages Contents
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

// Pages Parts Layouts
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Commented Code is ommited when uses React Router

/*
import './App.css';
import HWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName'
import Person from './components/Person'
import Phrase from './components/Phrase';
import List from './components/List';
import Event from './components/Event';
import Form from './components/Form';
import Conditional from './components/Conditional';
import OtherList from './components/OtherList';
import YourName from './components/YourName';
import Greetings from './components/Greetings';
import { useState } from 'react';
*/

function App() {
/*  const name1 = 'Kevin'
  const newname = name1.toUpperCase()

  function sum(a, b){
    return a+b
  }

  const url = 'https://via.placeholder.com/150'
  
  const myItems = ['React', 'Vue', 'Angular']

  const [name, setName] = useState()
*/
  return (
    /*
    <div className="App">

      <header className="App-header">
        <h1> 2 - Hello World (In React)</h1>
        <p>This is my first app (in React)</p>
        <h1> 3 - Updating JSX</h1>
        <p>Hi, {name1} (Normal).</p>
        <p>Hi, {newname} (Uppercase).</p>
        <p>Sum: {sum(1, 2)}</p>
        <img src={url} alt="My Image" />
      </header>

        <h1> 4 - Creating Components in React</h1>
        <HWorld />
        <Phrase />

        <h1> 5 - Working with props</h1>
        <SayMyName name1="John" />
        <SayMyName name1={name1} />
        <Person 
          name1="John" age="18" job="Developer" photo="https://via.placeholder.com/150"
        />

        <h1> 6 - Testing CSS</h1>
        <Phrase />        
        <Phrase />

        <h1> 7 - Using React fragments</h1>
        <List />

        <h1> 8 - Advancing in props (not visible, only code)</h1>

        <h1> 9 - Events in React (onClick, onChange, onSubmit)</h1>
        <Event num="1"/>
        <Event num="2"/>
        
        <h1> 10 - useState </h1>
        <Form />

        <h1> 11 - Throw events by props (not visible, only code)</h1>

        <h1> 12 - Conditional Rendering</h1>
        <Conditional />

        <h1> 13 - List Rendering</h1>
        <OtherList items={myItems} />
        <OtherList items={[]} />

        <h1> 14 - State Lift</h1>
        <YourName setName={setName}/>
        <Greetings name={name} />
    </div>
    */
    <Router>
      <h1> 15 - Implementing React Router</h1>
      <Navbar />
      <Routes>
        <Route exact path="/" element={
          <Home />
        } />
        <Route path="/about" element={
          <About />
        } />
        <Route path="/contact" element={
          <Contact />
        } />
      </Routes>
      <h1> 16 - React Icons</h1>
      <Footer />
    </Router>
  );
}

export default App;
