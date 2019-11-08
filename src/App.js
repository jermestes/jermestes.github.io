import React from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import './css/style.css';

const App = () => {
    return (
        <React.Fragment>
            <Nav />
            <Landing />
            <main>
                <About />
                <Work />
                <Contact />
            </main>
            <footer>© 2019 Jeremy Estes</footer>
        </React.Fragment>
    );
};

export default App;