import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import ProductShowcase from "./components/ProductShowcase";
import Opportunities from "./components/Opportunities";
import Graph from "./components/Graph";
import Cost from "./components/Cost";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <main>
                <Hero/>
                <Solutions/>
                <ProductShowcase/>
                <Opportunities/>
                <Graph/>
                <Cost/>
                <Footer/>
            </main>
        </>
    );
};

export default App;
