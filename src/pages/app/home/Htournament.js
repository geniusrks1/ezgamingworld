
import React from 'react';
import Card from './HTCard';
import {AiOutlineRight} from 'react-icons/ai'
import styles from './Htournament.module.css'
import { Link } from 'react-router-dom';

const cardData = [
  {
    title: 'Card 1',
    description: 'Description for Card 1',
    imageUrl: 'https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2021/07/BGMI-esports.png'
  },
  {
    title: 'Card 2',
    description: 'Description for Card 1',
    imageUrl: 'https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2021/07/BGMI-esports.png'
  },
  {
    title: 'Card 3',
    description: 'Description for Card 1',
    imageUrl: 'https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2021/07/BGMI-esports.png'
  },
  {
    title: 'Card 4',
    description: 'Description for Card 1',
    imageUrl: 'https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2021/07/BGMI-esports.png'
  }

];




const Htournament = () => {
  return (
    <>
    <div className={styles.container}>
        <h2> BGMI Tournaments</h2>
      <div className={styles.row}>
        {cardData.map((card, index) => (
          <div className={styles.col} key={index}>
            <Card title={card.title} description={card.description} imageUrl={card.imageUrl} />
          </div>
        ))}
      </div>
      <button className={`${styles.btn} btn btn-primary`}>
       <Link to="bgmitournaments"> View All <AiOutlineRight /> </Link>
      </button>
    </div>
    </>
  );
};

export default Htournament;

