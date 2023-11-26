import Card from "./BgmiCard";
import styles from './List.module.css'


export const cardData = [
    {
      id:'i-1',
      title: '50k tournament',
      description: 'Description for Card 1',
      imageUrl: 'https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2021/07/BGMI-esports.png'
     , totalSlots: 100,
      filledSlots: 50,
      registrationOpenDate: '2023-11-15'
    
    },
    {
      id:'i-2',
      title: 'Card 2',
      description: 'Description for Card 1',
      imageUrl: 'https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2021/07/BGMI-esports.png'
      , totalSlots: 100,
      filledSlots: 50,
      registrationOpenDate: '2023-11-15'
    },
    { id:'i-3',
      title: 'Card 3',
      description: 'Description for Card 1',
      imageUrl: 'https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2021/07/BGMI-esports.png'
      , totalSlots: 100,
      filledSlots: 50,
      registrationOpenDate: '2023-11-15'
    },
    {
      id:'i-4',
      title: 'Card 4',
      description: 'Description for Card 1',
      imageUrl: 'https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2021/07/BGMI-esports.png'
    
      , totalSlots: 100,
      filledSlots: 50,
      registrationOpenDate: '2023-11-15'}
  
  ];
  
  
  
  
  const BgmiTournamentList = () => {
    return (
      <>
      <div className={styles.container}>
          <h2> BGMI Tournaments</h2>
        <div className={styles.row}>
          {cardData.map((card, index) => (
            <div className={styles.col} key={index}>
              <Card 
              title={card.title} 
              description={card.description} 
              imageUrl={card.imageUrl} 
              id={card.id}/>
            </div>
          ))}
        </div>
      
      </div>
      </>
    );
  };
  
  export default BgmiTournamentList;
  
  