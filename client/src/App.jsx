import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import HelloWorld from './components/hello-world';

function App() {
  return (
    <Router>
      <div>
        <HelloWorld />
      </div>
    </Router>
  )
}

export default App
