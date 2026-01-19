import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Opportunities from "./components/Opportunities";
import Cost from "./components/Cost";

const App = () => {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <Opportunities/>
                <Cost/>
            </main>
        </>
    );
};

export default App;