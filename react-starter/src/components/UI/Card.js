import React from 'react';
import "./Card.css"; // a set of reusable CSS rules to reduce code repetition

const Card = (props) => {

    const classes = "card " + props.className; // use the class "card" plus whatever class the framed component already has

    return(
        <div className={classes}>{props.children}</div> // props.children is crucial as it enables nesting custom components
    )
}

export default Card