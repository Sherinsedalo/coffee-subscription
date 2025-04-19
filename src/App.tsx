import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Footer } from '../src/components/Home/Footer';
import Home from './pages/Home';
import { Navbar } from './components/Home/navbar';
import About from './pages/About'
import Plan from './pages/Plan';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='plan' element={<Plan />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App