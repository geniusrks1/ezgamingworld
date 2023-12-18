import React, { useState, useRef } from 'react';
import styles from './adminPanel.module.css';
import { ref, getStorage, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../firebaseinit';
import { collection, addDoc } from 'firebase/firestore'; 

const storage = getStorage();

const NewBgmiTournament = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [tournamentName, setTournamentName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [regStartDate, setRegStartDate] = useState('');
  const [regEndDate, setRegEndDate] = useState('');
  const [totalSlots, setTotalSlots] = useState('');
  const [gameMode, setGameMode] = useState('');
  const [prizePool, setPrizePool] = useState('');
  const [imageURL, setImageURL] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image && tournamentName && startDate && endDate && regStartDate && regEndDate && totalSlots && gameMode ) {
      const storageRef = ref(storage, `newtournaments/${image.name}`);
      setUploading(true);

      uploadBytes(storageRef, image)
        .then((snapshot) => {
          return getDownloadURL(snapshot.ref);
        })
        .then((downloadURL) => {
          setImage(null);
          setUploading(false);
          setImageURL(downloadURL);

          return addDoc(collection(db, 'bgmiTournamentNew'), {
            tournamentName,
            imageURL: downloadURL,
            startDate,
            endDate,
            regStartDate,
            regEndDate,
            totalSlots,
            gameMode,
            prizePool,
            createdOn: new Date()
          });
        })
        .then(() => {
          console.log('Data added to Firestore successfully');
          setTournamentName('');
          setStartDate('');
          setEndDate('');
          setRegStartDate('');
          setRegEndDate('');
          setTotalSlots('');
          setGameMode('');
          setPrizePool('');
          fileInputRef.current.value = null;
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
          setUploading(false);
        });
    }
  };

  return (
    // <div className={styles.tournament_form_container}>
      <div className={`${styles.tournament_form_container}`}>
      <h2>Posting new Bgmi tournament</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor='tournamentname'>TName</label>
        
        <input
          type='text'
          id='tournamentname'
          name='tournamentName'
          placeholder='Enter tournament name'
          required
          value={tournamentName}
          onChange={(e) => setTournamentName(e.target.value)}
        />
        
        <div className={styles.dates}>
        <div className={`${styles.left_column}`}>
        <label htmlFor='startdate'> TStartDate</label>
        <input
          type='date'
          id='startdate'
          name='startDate'
          placeholder='Enter start date'
          required
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        
        <br/>
      

        <label htmlFor='enddate'>TEndDate</label>
        
        <input
          type='date'
          id='enddate'
          name='endDate'
          placeholder='Enter end date'
          required
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        
        <br/>
        <label htmlFor='regstartdate'>RegStartDate</label>
        <input
          type='date'
          id='regstartdate'
          name='regStartDate'
          placeholder='Enter registration start date'
          required
          value={regStartDate}
          onChange={(e) => setRegStartDate(e.target.value)}
        />
         <br/>
        <label htmlFor='regenddate'>RegEndDate</label>
        
        <input
          type='date'
          id='regenddate'
          name='regEndDate'
          placeholder='Enter registration end date'
          required
          value={regEndDate}
          onChange={(e) => setRegEndDate(e.target.value)}
        />
        </div>

        <label htmlFor='totalslots'>Total Slots</label>
        
        <input
          type='number'
          id='totalslots'
          name='totalSlots'
          placeholder='Enter total slots'
          required
          value={totalSlots}
          onChange={(e) => setTotalSlots(e.target.value)}
        />
        
     


        <div className={styles.radioButtons}>
        <label>Game Mode:</label>
        <input
          type='radio'
          id='solo'
          name='gameMode'
          value='solo'
          checked={gameMode === 'solo'}
          onChange={() => setGameMode('solo')}
        />
        <label htmlFor='solo'>Solo</label>
        
        <input
          type='radio'
          id='duo'
          name='gameMode'
          value='duo'
          checked={gameMode === 'duo'}
          onChange={() => setGameMode('duo')}
        />
        <label htmlFor='duo'>Duo</label>
        
        <input
          type='radio'
          id='squad'
          name='gameMode'
          value='squad'
          checked={gameMode === 'squad'}
          onChange={() => setGameMode('squad')}
        />
        <label htmlFor='squad'>Squad</label>

        </div>

</div>



<div className={`${styles.right_column}`}>
        <label htmlFor='prizepool'>Prize Pool Distribution</label>
        
        <textarea
          id='prizepool'
          name='prizePool'
          placeholder='Enter prize pool distribution'
          value={prizePool}
          onChange={(e) => setPrizePool(e.target.value)}
        ></textarea>
 <br/>
        <label htmlFor='banner'>Upload Banner</label>
        
        <input
          type='file'
          id='banner'
          name='banner'
          ref={fileInputRef}
          onChange={handleFileChange}
        />
</div>
        <button type='submit' className={styles.submitButton}>Add</button>
      </form>
    </div>
  );
};

export default NewBgmiTournament;
