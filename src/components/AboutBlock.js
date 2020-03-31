import React from 'react';

const AboutBlock = (props) => {
  return (
    <section className="about-block">
      <img className="about-block_img" src={props.image} alt={props.alt} />
      <div className="about-block_text">
        <h2>{props.opener}</h2>
        <p>{props.body}</p>
      </div>
    </section>
  );
};

export default AboutBlock;