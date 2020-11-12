import React from "react";
import Basket from "./components/Basket";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import StyledApp from "./styledComponents/StyledApp";
import StyledMain from "./styledComponents/StyledMain";

function App() {
  return (
    <StyledApp>
      <Header />
      <Navigation />
      <StyledMain>
        <Products />
        <Basket />
      </StyledMain>

      <Footer />
    </StyledApp>
  );
}

export default App;
