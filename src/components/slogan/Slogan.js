import React from 'react';
import classes from './Slogan.module.css';

function Slogan() {
  return (
      <div className={classes.slogan}>
          <div className={classes.container}>
              <div className={classes.header}>
                  <h2>Рассматриваю варианты удаленной работы</h2>
              </div>
              <div className={classes.main}>
                  <button className={classes.btn} onClick={()=>{console.log("hi")}}>Нанять меня</button>
              </div>
          </div>
      </div>
  );
}

export default Slogan;
