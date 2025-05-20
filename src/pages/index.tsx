import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import DeliveryCalculator from '../components/DeliveryCalculator';

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <ProductList />
            <DeliveryCalculator />
            <Footer />
        </div>
    );
}