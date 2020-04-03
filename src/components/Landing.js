import React from 'react';
import {Route, Switch, Router} from 'react-router-dom';
import About from './About';
import Work from './Work';
import Resume from './Resume';
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
                <Switch>
                    <Route path="/" exact component={Intro}/>
                    <Route path="/about" swipe={props.swipe} render={(props) => <About swipe={aboutSwipe} />} />
                    <Route path="/work" component={Work} />
                    <Route path="/resume" component={Resume} />
                </Switch>
            </main>
        </div>
    );
};

export default Landing;