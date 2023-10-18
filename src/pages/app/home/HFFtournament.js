
import React from 'react';
import Card from './HTCard';
import {AiOutlineRight} from 'react-icons/ai'
import styles from './Htournament.module.css'

const cardData = [
  {
    title: 'Card 1',
    description: 'Description for Card 1',
    imageUrl: 'https://thebridge.in/wp-content/uploads/2020/12/Freefire.jpg'
  },
  {
    title: 'Card 2',
    description: 'Description for Card 1',
    imageUrl: 'https://thebridge.in/wp-content/uploads/2020/12/Freefire.jpg'
  },
  {
    title: 'Card 3',
    description: 'Description for Card 1',
    imageUrl: 'https://thebridge.in/wp-content/uploads/2020/12/Freefire.jpg'
  },
  {
    title: 'Card 4',
    description: 'Description for Card 1',
    imageUrl: 'https://thebridge.in/wp-content/uploads/2020/12/Freefire.jpg'
  }

];




const HFFournament = () => {
  return (
    <>
    <div className={styles.container}>
        <h2> FREE FIRE Tournaments</h2>
      <div className={styles.row}>
        {cardData.map((card, index) => (
          <div className={styles.col} key={index}>
            <Card title={card.title} description={card.description} imageUrl={card.imageUrl} />
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

export default HFFournament;

