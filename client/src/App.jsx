import './App.css'
import { Navbar, Footer } from './components'
import { Home } from './pages'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
