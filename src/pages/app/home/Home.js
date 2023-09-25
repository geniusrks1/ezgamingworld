import React from 'react';
import style from './Home.module.css';

function Home() {
  return (
    <header>
      <section className={style.logo_wrapper}>
        <img
          className={style.logo}
          src='https://rivalgames.s3.amazonaws.com/staticImages/games/fortnite/fortnite-match.webp'
          alt='logo'
        />
      </section>
      <section className={style.content}>
        <h4>Ready to Win !</h4>
        <h1>Play And Win Big</h1>
        <p>
        skill your game and play 
        </p>
      </section>
    </header>
  );
}

export default Home;