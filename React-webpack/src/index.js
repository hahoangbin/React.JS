import React from 'react'
import ReactDOM from 'react-dom/client'

// Create component App
function App() {
    return (
        <div>
            <h1>Hello my friend!</h1>
            <h2>Ok roi day ae oi!</h2>
        </div>
    )
}

// Render React@17 component App vao #root element
// ReactDOM.render(<App />, document.getElementById('root'))
// Render React@18 component App vao #root element
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
