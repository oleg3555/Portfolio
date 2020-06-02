import React from 'react';
import classes from './Footer.module.css';

function Footer() {
  return (
      <div className={classes.footer}>
          <div className={classes.container}>
              <div className={classes.header}>
                  <h3>Олег Янусик</h3>
              </div>
              <div className={classes.main}>
                  <div className={classes.image}>
                      <img src="https://i.music.я.ws/img/vk.png"/>
                  </div>
                  <div className={classes.image}>
                      <img src="https://www.facebook.com/images/fb_icon_325x325.png"/>
                  </div>
                  <div className={classes.image}>
                      <img onClick={()=>{alert("hel")}} src="https://pngimg.com/uploads/github/github_PNG40.png"/>
                  </div>
                  <div className={classes.image}>
                      <img src="https://i0.wp.com/bosshunt.ru/wp-content/uploads/2017/05/linkedin_profile.png?fit=640%2C400&ssl=1"/>
                  </div>
              </div>
              <div className={classes.end}>
                  ©2020 Все права защищены
              </div>
          </div>
      </div>
  );
}

export default Footer;
