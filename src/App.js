import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import MyWorks from "./components/myWorks/MyWorks";
import Contacts from "./components/contacts/Contacts";
import Slogan from "./components/slogan/Slogan";
import Footer from "./components/footer/Footer";

function App() {
    let skillsArr=[
        {
            image:"https://ru.reactjs.org/logo-og.png",
            title:"React",
            text:"React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений."
        },
        {
            image:"https://guidedblogz.com/wp-content/uploads/2019/06/icon.javascript.png",
            title:"JavaScript",
            text:"JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией стандарта ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений."
        },
        {
            image:"https://miro.medium.com/max/1200/1*aK6-A2EmtFCYriaKgoguPw.png",
            title:"CSS и HTML",
            text:"HTML отображает язык разметки гипертекста. «Язык разметки» означает, что HTML использует теги для идентификации различных типов контента и целей, которые каждый преследует на веб-странице.CSS – это формальный язык, служащий для описания оформления внешнего вида документа, созданного с использованием языка разметки (HTML, XHTML, XML)."
        }
    ];
    let workArr = [
        {
            image: "https://habrastorage.org/webt/wp/oz/gb/wpozgbqpds-jojrjfcehyxgj6-e.jpeg",
            workName: "ToDoList",
            description: "Facebook — крупнейшая социальная сеть в мире и одноимённая компания, владеющая ею. Была основана 4 февраля 2004 года Марком Цукербергом и его соседями по комнате во время обучения в Гарвардском университете — Эдуардо Саверином, Дастином Московицем и Крисом Хьюзом.Первоначально веб-сайт был назван Thefacebook и был доступен только для студентов Гарвардского университета, затем регистрацию открыли для других университетов Бостона, а затем и для студентов любых учебных учреждений США, имеющих электронный адрес в домене .edu.",
            gitSrc: "https://github.com/oleg3555/ToDoList.git"
        },
        {
            image: "https://lh3.googleusercontent.com/D88VPn13kN3AVtuqOuTWkXkZsk3MdlC2R11irE3Z1dpWWJDGU-Cqr-PiCR31VoUb1wc",
            workName: "Social Network",
            description: "Netflix — американская развлекательная компания, поставщик фильмов и сериалов на основе потокового мультимедиа. Основана 29 августа 1997 года Ридом Хастингсом и Марком Рэндольфом. Штаб-квартира находится в Лос-Гатосе, Калифорния.",
            gitSrc: "https://github.com/oleg3555/ToDoList.git"
        }
    ];
  return (
    <div className="App">
      <div className="portfolio">
          <Header/>
          <Main/>
          <Skills skillsArr={skillsArr}/>
          <MyWorks workArr={workArr}/>
          <Slogan/>
          <Contacts/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
