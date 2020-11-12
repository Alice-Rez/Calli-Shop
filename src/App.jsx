import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StyledApp from "./styledComponents/StyledApp";

function App() {
  return (
    <StyledApp>
      <Header />
      <main>
        <div>Test</div>
      </main>

      <Footer />
    </StyledApp>
  );
}

export default App;
