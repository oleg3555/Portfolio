import React from 'react';
import classes from './Work.module.css';

function Work(props) {
  return (
      <div className={classes.container}>
          <div className={classes.image}>
              <img src={props.image} onClick={()=>{alert("hello")}}/>
          </div>
          <div className={classes.workName}>
              <h3>{props.workName}</h3>
          </div>
          <div className={classes.text}>
              {props.description}
          </div>
          <div className={classes.text}>

          </div>
          <div className="">

          </div>
      </div>
  );
}

export default Work;
