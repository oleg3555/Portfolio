import React from 'react';
import classes from './Skill.module.css';

function Skill(props) {
    return (
        <div className={classes.container}>
            <div className={classes.image}>
                <img src={props.image}/>
            </div>
            <div className={classes.name}>
                <h2>{props.title}</h2>
            </div>
            <div className={classes.description}>
                <span>{props.text}</span>
            </div>
        </div>
    );
}

export default Skill;
