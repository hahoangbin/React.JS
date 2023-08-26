
import './App.css';
import { useState } from 'react'
 
function App() {
  const orders = [111, 222, 333]
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur)
    return total
  })
  const [gift, setGift] = useState('Chua co phan thuong')
  const [name, setName] = useState('')
  const [checked, setChecked] = useState([])

  const gifts = [
    'CPU i9',
    'RAM 32GB RGB',
    'RGB Keyboard',
  ]
  const courses = [
    {
      id: 1,
      name: "HTML, CSS",
    },
    {
      id: 2,
      name: "ReactJS",
    },
    {
      id: 3,
      name: "Javascript",
    },
  ]

  const handleIncrease = () => {
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 2)
  }
  const handleGetReward = () => {
    var index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index]);
  }
  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        // unCheck
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{counter}</h1>
        <h2>{gift}</h2>
        <button onClick={handleIncrease}>Increase</button>
        <br />
        <button onClick={handleGetReward}>Lấy thưởng</button>
        <br />
        <div style={{display: 'flex'}}>
          <input value={name} onChange={e => setName(e.target.value)}></input>
          <button onClick={e => setName('Nguyen Van BBB')}>set name</button>
        </div>
        {courses.map(course => (
          <div key={course.id}>
            <input 
              type='radio'
              checked={checked === course.id}
              onChange={() => setChecked(course.id)} />
              {course.name}
            <input 
              style={{marginLeft: '50px'}}
              type='checkbox'
              checked={checked.includes(course.id)}
              onChange={() => handleCheck(course.id)} />
              {course.name}
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
