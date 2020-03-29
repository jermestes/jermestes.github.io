import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Landing from './Landing';

const Main = () => {
    return (
        <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact}/>
        </Switch>
    )
}

export default Main;