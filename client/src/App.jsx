import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Hello MERN!</h1>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
