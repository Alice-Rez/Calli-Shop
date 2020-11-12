import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StyledApp from "./styledComponents/StyledApp";
import StyledMain from "./styledComponents/StyledMain";

function App() {
  return (
    <StyledApp>
      <Header />
      <StyledMain>
        <div>Test</div>
      </StyledMain>

      <Footer />
    </StyledApp>
  );
}

export default App;
