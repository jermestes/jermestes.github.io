import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';
import './css/style.css';

const App = () => {
    return (
        <Router>
            <Nav />
            <Main />
            <footer>© 2019 Jeremy Estes</footer>
        </Router>
    );
};

export default App;