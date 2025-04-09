import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Footer } from '../src/components/Home/Footer';
import Home from './pages/Home';
import { Navbar } from './components/Home/navbar';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App