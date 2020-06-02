import React from 'react';
import classes from './MyWorks.module.css';
import Work from "./work/Work";

function MyWorks(props) {
    return (
        <div className={classes.myWorks}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <h2>Мои работы</h2>
                </div>
                <div className={classes.main}>
                    {props.workArr.map(a=>(<Work image={a.image} workName={a.workName} description={a.description} gitSrc={a.gitSrc}/>))}
                </div>
            </div>
        </div>
    );
}

export default MyWorks;
