
import React, { useState } from 'react';
import styles from './adminPanel.module.css';
import { ref, getStorage, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../firebaseinit';
import { collection, addDoc } from 'firebase/firestore'; // Updated import

const storage = getStorage();

const NewBgmiTournament = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [tournamentName, setTournamentName] = useState(''); // State for tournament name
  const [imageURL, setImageURL] = useState(''); // State for image URL
  const fileInputRef = React.useRef(null);
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image && tournamentName) {
      const storageRef = ref(storage, `newtournaments/${image.name}`);
      setUploading(true);

      uploadBytes(storageRef, image)
        .then((snapshot) => {
          return getDownloadURL(snapshot.ref); // Get download URL directly from the reference
        })
        .then((downloadURL) => {
          setImage(null);
          setUploading(false);
          setImageURL(downloadURL);

          // Now, let's add the data to Firestore
          return addDoc(collection(db, 'bgmiTournamentNew'), {
            tournamentName,
            imageURL: downloadURL,
            createdOn: new Date()
          });
        })
        .then(() => {
          console.log('Data added to Firestore successfully');
          // Optionally, reset form fields here
          setTournamentName('');
          fileInputRef.current.value = null; // Reset file input value
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
          setUploading(false);
        });
    }
  };

  return (
    <div className={styles.tournament_form_container}>
      <h2>Posting new Bgmi tournament</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor='tournamentname'>Tournament Name</label>
        <br />
        <input
          type='text'
          id='tournamentname'
          name='tournamentName'
          placeholder='Enter tournament name'
          required
          value={tournamentName}
          onChange={(e) => setTournamentName(e.target.value)}
        />
      


        <label htmlFor='banner'>Upload Banner</label>
        <br />
        <input type='file' id='banner' name='banner'
          ref={fileInputRef} // Add ref to the file input
         onChange={handleFileChange} />

        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default NewBgmiTournament;
