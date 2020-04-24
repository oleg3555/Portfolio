import React from 'react';
import classes from './NavMenu.module.css';

function NavMenu() {
    return (
        <div className={classes.nav}>
            <a href="" className={classes.link}>Главная</a>
            <a href="" className={classes.link}>Скиллы</a>
            <a href="" className={classes.link}>Проекты</a>
            <a href="" className={classes.link}>Контакты</a>
        </div>
    );
}

export default NavMenu;
