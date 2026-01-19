import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Opportunities from "./components/Opportunities";
import Graph from "./components/Graph";
import Cost from "./components/Cost";

const App = () => {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <Opportunities/>
                <Graph/>
                <Cost/>
            </main>
        </>
    );
};

export default App;