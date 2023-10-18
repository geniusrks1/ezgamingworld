import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Htournament from './Htournament';
import HFFtournament from './HFFtournament';
import HBgmiNews from './HBgmiNews';
import HFFNews from './HFFNews';

const cards = [
  "https://esportsgen.com/wp-content/uploads/2022/07/battle-royale-games-900x506-1.jpg",
  "https://www.insidesport.in/wp-content/uploads/2023/05/bgmi-BANNER.jpg",
  "https://onecms-res.cloudinary.com/image/upload/s--w5QuWc5w--/c_crop,h_843,w_1500,x_0,y_34/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/mediacorp/cna/image/2022/06/11/the_big_read.jpg?itok=n8ndjQvw",
  "https://staticg.sportskeeda.com/editor/2022/05/d69f5-16516912771477-1920.jpg?w=840",
];

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [currentPage]); // Run effect whenever currentPage changes


  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % cards.length);
  };



  const handlePaginationClick = (index) => {
    setCurrentPage(index);
  };

  return (
    <>
      <div className={styles.cardcarousel}>
        <img
          src={cards[currentPage]}
          alt={`Card ${currentPage + 1}`}
          className={styles.cardimage}
        />

        <div className={styles.pagination}>
          {cards.map((_, index) => (
            <div
              key={index}
              className={`${styles.paginationdot} ${index === currentPage ? styles.active : ''}`}
              onClick={() => handlePaginationClick(index)}
              ></div>
          ))}
        </div>
      </div>

      <Htournament/>
      <HFFtournament/> 
      <HBgmiNews/> 
      <HFFNews/>   
    </>
  );
};

export default HomePage;










