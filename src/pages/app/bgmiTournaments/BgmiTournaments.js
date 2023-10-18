import React, { useEffect, useState } from 'react'
import styles from './BgmiTournament.module.css'
import BgmiTournamentList from './BgmiTournamentList';
const cards = [
  "https://pbs.twimg.com/media/FSZOulraAAA_kTB.jpg:large",
  "https://pbs.twimg.com/media/FG6kYJIVgAY1mBN.jpg",
  "https://i.ytimg.com/vi/eIYxzKHSPeA/maxresdefault.jpg",
  "https://img.jagrantv.com/entertainment/War-Of-Glory.jpg",
];


const BgmiTournaments = () => {
  const [currentPage,setCurrentPage]=useState(0);

  useEffect(()=>{
    const interval=setInterval(()=>{
      handleNext();
    },5000);

    return ()=>{
      clearInterval(interval);
    };
  },[currentPage]);


const handleNext=()=>{
  setCurrentPage((prevPage)=>(prevPage+1)%cards.length);
}

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
      <BgmiTournamentList/>
    </>
  )
}



export default BgmiTournaments