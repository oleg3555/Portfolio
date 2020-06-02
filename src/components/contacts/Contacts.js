import React from 'react';
import classes from './Contacts.module.css';

function Contacts() {
    return (
        <div className={classes.contacts}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <h2>Мои контакты</h2>
                </div>
                <div className={classes.main}>
                    <div className={classes.inp}>
                        Оставьте свой телефон:
                        <input className={classes.input} value="+375"/>
                    </div>
                    <div className={classes.inp}>
                        Адрес электронной почты:
                        <input className={classes.input} placeholder="Your email"/>
                    </div>
                    <div className={classes.notes}>
                        <div>Сообщение:</div>
                        <div className={classes.area}>
                            <textarea className={classes.textarea} placeholder="Write message">
                        </textarea>
                        </div>
                    </div>
                </div>
                <div className={classes.footer}>
                    <button className={classes.btn} onClick={() => {
                        console.log("I'm working")
                    }}>Отправить
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
