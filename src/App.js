import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import AppRoutes from './routes/AppRoutes'
import Message from './components/Message/Message'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Message />
      <Footer />
    </div>
  )
}

export default App
