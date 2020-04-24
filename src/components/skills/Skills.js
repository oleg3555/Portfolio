import React from 'react';
import classes from './Skills.module.css';
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={classes.skills}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <h2>Mои Скиллы</h2>
                </div>
                <div className={classes.abilities}>
                    <Skill
                        image="https://ru.reactjs.org/logo-og.png"
                        title="React"
                        text="React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений."
                    />
                    <Skill
                        image="https://ploshadka.net/wp-content/uploads/logo/js.png"
                           title="JavaScript"
                        text="JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией стандарта ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений."
                    />
                    <Skill
                        image="https://miro.medium.com/max/1200/1*aK6-A2EmtFCYriaKgoguPw.png"
                        title="CSS и HTML"
                        text="HTML отображает язык разметки гипертекста. «Язык разметки» означает, что HTML использует теги для идентификации различных типов контента и целей, которые каждый преследует на веб-странице.CSS – это формальный язык, служащий для описания оформления внешнего вида документа, созданного с использованием языка разметки (HTML, XHTML, XML)."
                    />
                </div>
            </div>
        </div>
    );
}

export default Skills;
