import React from 'react';
import {Route, Switch, Router} from 'react-router-dom';
import About from './About';
import Work from './Work';
import Resume from './Resume';
import LinkList from './Contact';
import Intro from './Intro';

const Landing = () => {
    return (
        <div className="app-wrap">
            <aside>
                <LinkList />
            </aside>

            <main>
                <Switch>
                    <Route path="/" exact component={Intro}/>
                    <Route path="/about" component={About} />
                    <Route path="/work" component={Work} />
                    <Route path="/resume" component={Resume} />
                </Switch>
            </main>
        </div>
    );
};

export default Landing;