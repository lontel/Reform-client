import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import AppRoutes from './routes/AppRoutes'
import Message from './components/Message/Message'


function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Message />
    </div>
  )
}

export default App
