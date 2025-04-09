import { Hero } from "../components/Home/Hero";
import { CoffeeCollection } from "../components/Home/CoffeeCollection";
import { OrderGuide } from "../components/Home/OrderGuide";

const Home = () => {
    return (
        <div>
            <Hero />
            <CoffeeCollection />
            <OrderGuide />

        </div>
    )
}
export default Home;