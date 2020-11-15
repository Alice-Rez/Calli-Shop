import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styledComponents/GlobalStyle";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import Basket from "./components/Basket";
import Footer from "./components/Footer";
import StyledApp from "./styledComponents/StyledApp";
import StyledMain from "./styledComponents/StyledMain";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <StyledApp>
        <Header />
        <Navigation />
        <StyledMain>
          <Switch>
            <Route path="/" exact>
              <Products />
            </Route>
            <Route path="/basket">
              <Basket />
            </Route>
          </Switch>
        </StyledMain>

        <Footer />
      </StyledApp>
    </Router>
  );
}

export default App;
