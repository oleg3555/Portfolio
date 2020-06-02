import React from 'react';
import classes from './Skills.module.css';
import Skill from "./skill/Skill";


function Skills(props) {
    return (
        <div className={classes.skills}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <h2>Mои Скиллы</h2>
                </div>
                <div className={classes.abilities}>
                    {props.skillsArr.map(a=><Skill image={a.image} title={a.title} text={a.text}/>)}
                </div>
            </div>
        </div>
    );
}

export default Skills;
