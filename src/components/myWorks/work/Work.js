import React from 'react';
import classes from './Work.module.css';

function Work(props) {
    return (
        <div className={classes.container}>
            <div className={classes.bord}>
                <div className={classes.image} style={{ backgroundImage:`url(${props.image})`}}>
                </div>
                <div className={classes.workName}>
                    <h3>{props.workName}</h3>
                </div>
                <div className={classes.text}>
                    {props.description}
                    <div className={classes.gitInfo}>
                        <span>Ссылка на <a href={props.gitSrc}> github</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
