import './App.css'
import { Navbar } from '../src/components/Home/Navbar';
import { Hero } from '../src/components/Home/Hero';
import { CoffeeCollection } from '../src/components/Home/CoffeeCollection';
import { OrderGuide } from '../src/components/Home/OrderGuide';
import { Footer } from '../src/components/Home/Footer';

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