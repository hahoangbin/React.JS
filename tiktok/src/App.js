
import './App.css';
import { useState, useEffect } from 'react'
import Content from './Content'
import Live from './Live'
 
function App() {
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    return storageJobs ?? []
  })
  const [show, setShow] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)
      return newJobs
    })
    setJob('')
  }

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [window.innerWidth])

  return (
    <div className="App">
      <header className="App-header">
        <div value={width}>{width}</div>
         <div>
          <input 
            value={job}
            onChange={e => setJob(e.target.value)} />
          <button onClick={handleSubmit}>Add</button>
          <ul>
            {jobs.map((job, index) => (
              <li key={index}>{job}</li>
            ))}
          </ul>
         </div>
         {show && <Content />}
         <button onClick={() => setShow(!show)}>Toggle</button>
      </header>
      {/* <Live /> */}
    </div>
  );
}

export default App;
