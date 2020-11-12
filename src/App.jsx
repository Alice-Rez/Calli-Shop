import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import StyledApp from "./styledComponents/StyledApp";
import StyledMain from "./styledComponents/StyledMain";

function App() {
  return (
    <StyledApp>
      <Header />
      <Navigation />
      <StyledMain>
        <div>Test</div>
      </StyledMain>

      <Footer />
    </StyledApp>
  );
}

export default App;
