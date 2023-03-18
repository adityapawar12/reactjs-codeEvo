import "./App.css";
import StyledButton, {
  FancyButton,
  SubmitButton,
  AnimatedLogo,
  DarkThemedButton,
} from "./components/styled-components/Button/Button";
import logo from "./logo.svg";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  button {
    /* font-family: 'Roboto'; */
    font-family: ${(props) => props.theme.fontFamily};
  }
`;

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
  fontFamily: "Segoe UI",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        {/* <button>button</button> */}
        <StyledButton>Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <StyledButton variant="outline">Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <FancyButton>Fancy Button</FancyButton>
        <div>
          <br />
        </div>
        <SubmitButton>Submit Button</SubmitButton>
        <div>
          <br />
        </div>
        {/* <img src={logo} className="App-logo" /> */}
        <AnimatedLogo src={logo} />
        <div>
          <br />
        </div>
        <DarkThemedButton>Dark Themed Button</DarkThemedButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
