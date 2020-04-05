import React from 'react';
import {Route, Switch, Router} from 'react-router-dom';
import About from './About';
import Work from './Work';
import LinkList from './Contact';
import Intro from './Intro';

const Landing = (props) => {
    let aboutSwipe = props.swipe;
    return (
        <div className="app-wrap">
            <aside>
                <LinkList />
            </aside>

            <main>
                <Switch swipe={props.swipe}>
                    <Route path="/" exact component={Intro}/>
                    <Route path="/about" swipe={props.swipe} render={(props) => <About swipe={aboutSwipe} />} />
                    <Route path="/work" component={Work} />
                </Switch>
            </main>
        </div>
    );
};

export default Landing;