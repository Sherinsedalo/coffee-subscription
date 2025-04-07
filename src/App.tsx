import './App.css'
import { Navbar } from './components/Home/navbar';
import { Hero } from './components/Home/Hero';
import { CoffeeCollection } from './components/Home/CoffeeCollection';
import { OrderGuide } from './components/Home/OrderGuide';
import { Footer } from './components/Home/Footer'
function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <CoffeeCollection />
      <OrderGuide />
      <Footer />
    </div>)
}

export default App