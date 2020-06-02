import React from 'react';
import classes from './Main.module.css';

function Main() {
  return (
      <div className={classes.main}>
          <div className={classes.container}>
              <div className={classes.mySelf}>
                  <span>Привет!</span>
                  <span>Меня зовут Олег Янусик.</span>
                  <span>Я front-end разработчик!</span>
              </div>
              <div className={classes.photo} style={{ backgroundImage:`url(${"https://sun9-26.userapi.com/c852036/v852036917/7aeaa/_19YwHOC0Rs.jpg?ava=1"})`}}>
              </div>
          </div>
      </div>
  );
}

export default Main;
