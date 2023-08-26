
import './App.css';
import { useState } from 'react'
 
function App() {
  const orders = [111, 222, 333]
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur)
    return total
  })

  const handleIncrease = () => {
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 2)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{counter}</h1>
        <button onClick={handleIncrease}>Increase</button>
      </header>
    </div>
  );
}

export default App;
