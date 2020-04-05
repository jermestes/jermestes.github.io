import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './components/Nav';
import Landing from './components/Landing';
import './css/style.css';
import './react-transitions.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swipeup: true,
            footerHide: true
        };
    }

    pageReset = (e) => {
        window.scrollTo(0,0);
        if(e.target.classList.contains('nav-logo')) {
            this.setState({swipeup: true, footerHide: true});
            console.log(e);
        } else {
            this.setState({swipeup: false, footerHide: false});
            console.log(e);
        }
    }

    render() {
        return (
            <Router>
                <Nav action={this.pageReset}/>
                <Landing className="transition-container" action={this.pageReset} swipe={this.state.swipeup}/>
                <footer className="footer">© 2020 Jeremy Estes</footer>
            </Router>
        );
    }
}

export default App;