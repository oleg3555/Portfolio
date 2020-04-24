import React from 'react';
import classes from './MyWorks.module.css';
import Work from "./work/Work";

function MyWorks() {
  return (
      <div className={classes.myWorks}>
          <div className={classes.container}>
              <div className={classes.header}>
                  <h2>Мои работы</h2>
              </div>
              <div className={classes.main}>
                  <Work
                      image="https://habrastorage.org/webt/wp/oz/gb/wpozgbqpds-jojrjfcehyxgj6-e.jpeg"
                      workName="ToDoList"
                      description="Наш первый проект, написанный на реакте."
                      gitSrc="dddddd"
                  />
              </div>
          </div>
      </div>
  );
}

export default MyWorks;
