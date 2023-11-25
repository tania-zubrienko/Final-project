import './App.css'
import Navigation from './components/Navigation/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
