import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import styled, {ThemeProvider} from 'styled-components';

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
  //device breakpoints
  nowTablet: "43.75rem",
  nowDesktop: "56.25rem",
  //Other
  h2: "h2 {font-weight: 500;}"
}

const Wrapper = styled.div`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .contentContainer {
    @media screen and (min-width: ${props => props.theme.nowTablet}) {
      padding: 1.3125rem 0;
    }
    @media screen and (min-width: ${props => props.theme.nowDesktop}) {
        display: grid;
        grid-template-columns: 1.5fr 10fr .5fr;
        grid-template-rows: auto;
      }
    .content {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      @media screen and (min-width: ${props => props.theme.nowDesktop}) {
        flex-flow: row wrap;
        grid-column: 2/3;
        grid-row: 1/2;
    }
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: ${props => props.theme.primaryfont}; 
  }

  p {
    font-family: "Roboto";
    max-width: 60ch;
  }

  h1,h2,h3,h4,h5,h6,p {
    line-height: 3rem;
    margin: 0;
  }

  footer {
    background-color: ${props => props.theme.lightgrey};
    text-align: center;
  }
}
`;

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Nav></Nav>
          <div className="contentContainer">
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/work" component={Work} /> 
              <Route path="/contact" component={Contact} />   
              <Route exact path="/" component={Landing} />
            </Switch> 
          </div>
        </Wrapper>
      </ThemeProvider>  
  );
}

export default App;
