import { Calculator } from './components/Calculator'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Engineering Calculator</h1>
      </header>
      <main>
        <Calculator />
      </main>
    </div>
  )
}

export default App
