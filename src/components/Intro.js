import React from 'react';
import Hero from '../assets/hero.jpg';
import Hero_wide from '../assets/hero-wide.jpg';
import {Link} from 'react-router-dom';

const Intro = () => {
  return (
    <header id="intro-block" className="react-transition fade-in">
        <div className="sub-sec header-waterfall">
            <h1>Jerm Estes</h1>
            <h2 className="waterfallh2">Web developer<br />Designer<br />Creator</h2>
            <Link to="/about">
                <button className="header-chevron"><span></span></button>
            </Link>
        </div>

        <picture className="sub-sec header-picture">
            <source media="(min-width: 700px)" srcSet={Hero} />
            <source media="(max-width: 700px)" srcSet={Hero_wide} />
            <img src={Hero_wide} className="header-picture-img" alt="Jerm dribbling while coding" />
        </picture>
    </header>
  );
};

export default Intro;