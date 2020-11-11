import logo from "./logo.svg";
import "./App.css";
import StyledDiv from "./styledComponents/StyledDiv";
import StyledHeader from "./styledComponents/StyledHeader";

function App() {
  return (
    <StyledDiv>
      <StyledHeader>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </StyledHeader>
    </StyledDiv>
  );
}

export default App;
