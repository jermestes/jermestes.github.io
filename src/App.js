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
  main, header {
    @media screen and (min-width: ${props => props.theme.nowTablet}) {
      padding: 1.3125rem 0;
    }
  }

  main {
    @media screen and (min-width: ${props => props.theme.nowDesktop}) {
        display: grid;
        grid-template-columns: 1.5fr 10fr .5fr;
        grid-template-rows: auto;
    }
  }
  
  h1,h2,h3,h4,h5,h6, li {
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

  h2 {
    font-size: 1.5rem;
  }

  ul {
    list-style: none;
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
    h2 {
      font-weight: 500;
    }
  }
  
  footer {
    background-color: ${props => props.theme.lightgrey};
    text-align: center;
  }

  .profile_links {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-right: 3rem;
    img {
        margin-right: .5rem;
        width: 3.125rem;
        height: 3.125rem;
    }
    :visited {
        color: black;
    }
}

.main_secs {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 100%;
    padding: 2rem 0;
    h1 {
        @media screen and (min-width: $screen-breakpoint1) {
            margin: auto;
        }
    }
    @media screen and (min-width: $screen-breakpoint1) {
        grid-column: 2/12;
    }
    h2 {
        font-size: 2.25rem;
    }
    h2, p {
        color: $dark-grey;
    }
}
}
`;

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Nav></Nav>
            <Switch>
              <Route path="/about" component={About}/>
              <Route path="/work" component={Work} /> 
              <Route path="/contact" component={Contact} />   
              <Route exact path="/" component={Landing} />
            </Switch> 
        </Wrapper>
      </ThemeProvider>  
  );
}

export default App;
