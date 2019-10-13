import React from 'react';
import Nav from './components/Nav';
import styled, {ThemeProvider} from 'styled-components'; 
import './App.css';

const theme = {
  //The colors
  darkgrey: "#7b7879",
  lightgrey: "#EEEEEE",
  pink: "#E4C8C4",
  blue: "#75C4DB",
  gold:"#ffeba8",
  green: "#a8ffb7",
  //The fonts
  primaryfont: "Chakra Petch",
  secondaryfont: "Roboto",
  //Other
  h2: "h2 {font-weight: 500;}"
}

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Nav></Nav>
          <footer>© 2019</footer>
      </ThemeProvider>  
  );
}

export default App;
