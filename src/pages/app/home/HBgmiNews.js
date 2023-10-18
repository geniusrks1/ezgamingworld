
import React from 'react';
import Card from './HTCard';
import {AiOutlineRight} from 'react-icons/ai'
import styles from './Htournament.module.css'

const cardData = [
  {
    title: 'BGMI new season date and C4S13 tier rewards leaks are here, check now',
    description: 'Description for Card 1',
    imageUrl: 'https://www.insidesport.in/wp-content/uploads/2023/09/Screenshot-2023-09-29-110219.png?w=690'
  },
  {
    title: 'BGMI new season date and C4S13 tier rewards leaks are here, check now',
    description: 'Description for Card 2',
    imageUrl: 'https://www.insidesport.in/wp-content/uploads/2023/09/Screenshot-2023-09-29-110219.png?w=690'
  },
  {
    title: 'BGMI new season date and C4S13 tier rewards leaks are here, check now',
    description: 'Description for Card 3',
    imageUrl: 'https://www.insidesport.in/wp-content/uploads/2023/09/Screenshot-2023-09-29-110219.png?w=690'
  },
  {
    title: 'BGMI new season date and C4S13 tier rewards leaks are here, check now',
    description: 'Description for Card 4',
    imageUrl: 'https://www.insidesport.in/wp-content/uploads/2023/09/Screenshot-2023-09-29-110219.png?w=690'
  }

];




const HBgmiNews = () => {
  return (
    <>
    <div className={styles.container}>
        <h2> BGMI LATEST NEWS</h2>
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

export default HBgmiNews;

