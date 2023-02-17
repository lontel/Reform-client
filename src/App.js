import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import AppRoutes from './routes/AppRoutes'


function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  )
}

export default App
