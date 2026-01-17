import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Opportunities from "./components/Opportunities";

const App = () => {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <Opportunities/>
            </main>
        </>
    );
};

export default App;