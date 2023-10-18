
import React from 'react';
import Card from './HTCard';
import {AiOutlineRight} from 'react-icons/ai'
import styles from './Htournament.module.css'

const cardData = [
  {
    title: 'Garena Free Fire MAX Redeem Codes for Today: How to Win Freebies on 30 September',
    description: 'Description for Card 1',
    imageUrl: 'https://images.thequint.com/thequint%2F2023-09%2F0ecda198-cb97-41f4-988f-eaa9a0dbcf2c%2Fgarena.jpg?rect=0%2C0%2C1440%2C810&auto=format%2Ccompress&fmt=webp&width=720'
  },
  {
    title: 'Garena Free Fire MAX Redeem Codes for Today: How to Win Freebies on 30 September',
    description: 'Description for Card 2',
    imageUrl: 'https://images.thequint.com/thequint%2F2023-09%2F0ecda198-cb97-41f4-988f-eaa9a0dbcf2c%2Fgarena.jpg?rect=0%2C0%2C1440%2C810&auto=format%2Ccompress&fmt=webp&width=720'
  },
  {
    title: 'Garena Free Fire MAX Redeem Codes for Today: How to Win Freebies on 30 September',
    description: 'Description for Card 3',
    imageUrl: 'https://images.thequint.com/thequint%2F2023-09%2F0ecda198-cb97-41f4-988f-eaa9a0dbcf2c%2Fgarena.jpg?rect=0%2C0%2C1440%2C810&auto=format%2Ccompress&fmt=webp&width=720'
  },
  {
    title: 'Garena Free Fire MAX Redeem Codes for Today: How to Win Freebies on 30 September',
    description: 'Description for Card 4',
    imageUrl: 'https://images.thequint.com/thequint%2F2023-09%2F0ecda198-cb97-41f4-988f-eaa9a0dbcf2c%2Fgarena.jpg?rect=0%2C0%2C1440%2C810&auto=format%2Ccompress&fmt=webp&width=720'
  },

];




const HFFNews = () => {
  return (
    <>
    <div className={styles.container}>
        <h2> FREEFIRE LATEST NEWS</h2>
      <div className={styles.row}>
        {cardData.map((card, index) => (
          <div className={styles.col} key={index}>
            <Card title={card.title} 
            // description={card.description} 
            imageUrl={card.imageUrl} />
          </div>
        ))}
      </div>
      <button className={`${styles.btn} btn btn-primary`}>
        View All <AiOutlineRight />
      </button>
    </div>
    </>
  );
};

export default HFFNews;

