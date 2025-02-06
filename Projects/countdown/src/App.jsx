import Title from './components/Title';
import Counter from './components/Counter';
import useCountdown from './hooks/useCountdown';

import './App.css';

function App() {

  const [day, hour, minute, second] = useCountdown("Jan 1, 2026 00:00:00");

  return (
    <div className="App" style={{backgroundColor: 'black'}}>
      <div className="container">
        <Title title="2026 Countdown" />
        <div className="countdown-container">
          <Counter title="Days" number={day} />
          <Counter title="Hours" number={hour} />
          <Counter title="Minutes" number={minute} />
          <Counter title="Seconds" number={second} />
        </div>
      </div>
    </div>
  )
}

export default App
