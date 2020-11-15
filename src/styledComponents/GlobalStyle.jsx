const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Raleway:wght@200;400;600&display=swap");

:root {
  --display: "Dancing Script", cursive;
  --text: "Raleway", sans-serif;

  --black: #1e0f0d;
  --white: #faf7f7;
  --primary: #760000;
  --primary-dark: #4d0000;
  --grey-dark: #3b3b3b;
  --grey: #656565;

  --space-small: 0.75em;
  --space-medium: 1.5em;
  --space-larger: 2em;
  --space-large: 3em;

  --shadow-big: 5px 5px 15px rgba(0, 0, 0, 0.2),
    -5px -5px 15px rgba(255, 255, 255, 0.2);
  --shadow-small: 3px 3px 7px rgba(0, 0, 0, 0.2),
    -3px -3px 7px rgba(255, 255, 255, 0.2);
  --shadow-small-darker: 3px 3px 7px rgba(0, 0, 0, 0.3),
    -3px -3px 7px rgba(255, 255, 255, 0.3);

  --spin-control-size: 25px;
}

html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  font-family: var(--text);
}
`;

export default GlobalStyle;
