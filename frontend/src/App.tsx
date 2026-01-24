import React from "react";
import Hero from "./components/Hero";
import Opportunities from "./components/Opportunities";
import Graph from "./components/Graph";
import Cost from "./components/Cost";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <main>
                <Hero/>
                <Opportunities/>
                <Graph/>
                <Cost/>
                <Footer/>
            </main>
        </>
    );
};

export default App;