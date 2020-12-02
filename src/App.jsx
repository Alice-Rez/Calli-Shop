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
import ShipPay from "./components/footer-navbar/ShipPay";
import Terms from "./components/footer-navbar/Terms";
import Privacy from "./components/footer-navbar/Privacy";
import About from "./components/footer-navbar/About";

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
            <Route path="/shipping-payment">
              <ShipPay />
            </Route>
            <Route path="/terms-conditions">
              <Terms />
            </Route>
            <Route path="/privacy-policy">
              <Privacy />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </StyledMain>

        <Footer />
      </StyledApp>
    </Router>
  );
}

export default App;
