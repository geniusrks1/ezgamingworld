import React, { useState } from 'react';
import styles from './styles/Register.module.css';
import { collection, doc,setDoc } from 'firebase/firestore';
import { db } from '../../../../firebaseinit';
// import ImageUploadForm from './ImageUploadForm';


const Register = () => {
  const initialFormData = {
    teamName: '',
    leaderName: '',
    player1IngameName: '',
    player2IngameName: '',
    player3IngameName: '',
    player4IngameName: '',
    player5IngameName: '',
    player6IngameName: '',
  };

  const [formData, setFormData] = useState(initialFormData);
 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = collection(db, 'teamList');
      await setDoc(doc(docRef), {
        ...formData,
        createdOn: new Date()
      });
      setFormData(initialFormData); 
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };



  return (
    <div className={styles.divAll}>
      <div className={styles.div_container}>
        <div className={styles.form}>
          <h2>Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="teamName">Team Name:</label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                value={formData.teamName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="leaderName">Leader Name:</label>
              <input
                type="text"
                id="leaderName"
                name="leaderName"
                value={formData.leaderName}
                onChange={handleInputChange}
              />
            </div>
            {/* Inputs for player names */}
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={`player${num}`}>
                <label htmlFor={`player${num}IngameName`}>
                  Player {num} In-game Name:
                </label>
                <input
                  type="text"
                  id={`player${num}IngameName`}
                  name={`player${num}IngameName`}
                  value={formData[`player${num}IngameName`]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
             {/* <ImageUploadForm /> */}
            <button className="btn" type="submit">
              Register
            </button>
          </form>
        </div>
 
      </div>
 
    </div>
  );
};

export default Register;
