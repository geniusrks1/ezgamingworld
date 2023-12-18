import React ,{ useEffect, useState }from 'react';
import { useParams } from 'react-router-dom';
import { cardData } from './BgmiTournamentList';
import styles from './BgmiTournamentDetails.module.css';
import Overview from './detailspageBottomNav/Overview';
import Schedule from './detailspageBottomNav/Schedule';
import Credentials from './detailspageBottomNav/Credentials';
import {useSelector} from 'react-redux'

import Team from './detailspageBottomNav/Team';
import Result from './detailspageBottomNav/Result';
import Login from './detailspageBottomNav/Login';
import Register from './detailspageBottomNav/Register';
import { userSelector } from '../../../redux/reducer/UserReducer';


const BgmiTournamentDetails = () => {
const {user}=useSelector(userSelector);
 
  const { id } = useParams();
  const card = cardData.find((item) => item.id === id);
  










  // const scrollToForm = () => {
  //   formRef.current.scrollIntoView({ behavior: 'auto' });
  // };




  useEffect(()=>{
document.title=card.title;
  },[card.title]);








    


    
    const [selectedOption, setSelectedOption] = useState('overview');
    const renderDetails = () => {
      switch (selectedOption) {
        case 'overview':
          return <Overview />; 
        case 'schedule':
          return user ?<Schedule />: <Schedule />;
        case 'credentials':
          return user ?<Credentials />: <Credentials />;
          case 'result':
            return user ?<Result/>: <Result/>;
          case 'team':
            return <Team/>; 
            case 'register':
              return user ?<Register/>:<Login/>;
        // Add cases for other options
        default:
          return <Overview />;
      }
    };



    const handleRegister=()=>{
    setSelectedOption('register')
    
    }








  return (
    <>
<div className={styles.container}>
  <div className={styles.imageContainer}>
    <img src={card.imageUrl} alt={card.title} className={styles.image} />
    <div className={styles.detailsOverlay}>
      {/* Details to be shown */}
      <img src={card.imageUrl} alt="Details" className={styles.detailsImage} />
      <div className={styles.detailsText}>
        {/* Text information: registration time, tournament start time, total teams, etc. */}
        Registration Time: 10 dec<br />
        Tournament Start Time: 20dec<br />
        Total Teams: 100
        {/* Add other details */}
      </div>
      <button onClick={handleRegister} className={styles.registerButton}>
    Register
  </button>
    </div>
  </div>
</div>

<div>
      <div className={styles.dnavbar}>
        <button 
          className={styles.navButton}
        onClick={() => setSelectedOption('overview')}>Overview</button>
        
        <button  className={styles.navButton}
         onClick={() => setSelectedOption('schedule')}>Schedule</button>
         
        <button  className={styles.navButton}
        onClick={() => setSelectedOption('credentials')}>Credentials</button>
        <button  className={styles.navButton}
        onClick={() => setSelectedOption('result')}>Result</button>
        <button  className={styles.navButton}
        onClick={() => setSelectedOption('team')}>Team</button>
        <button  className={styles.navButton}
        onClick={() => setSelectedOption('register')}>Register</button>
        {/* Add buttons for other options */}
      </div>
      <div className={styles.ddetails}>
        {renderDetails()}
      </div>
    </div>

      <div className={styles.details}>
        <p>Total Slots: {card.totalSlots}</p>
        <p>Filled Slots: {card.filledSlots}</p>
        <p>Registration Open Date: {card.registrationOpenDate}</p>
      </div>
    </>
  );
};

export default BgmiTournamentDetails;



