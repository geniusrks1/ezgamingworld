import React, { useEffect, useState } from 'react';
import { db } from '../../../../firebaseinit';
import { collection, onSnapshot } from 'firebase/firestore';
import { storage } from '../../../../firebaseinit';
import styles from './styles/Team.module.css';
import { getDownloadURL, listAll, ref } from "firebase/storage";

const Team = () => {
  const [teamsList, setTeamsList] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);



  useEffect(()=>{
    listAll(ref(storage,"images")).then(imgs=>{
        
        imgs.items.forEach(val=>{
            getDownloadURL(val).then(url=>{
              setImageUrls(data=>[...data,url])
            })
        })
    })
},[])
console.log(imageUrls)










  useEffect(() => {
    onSnapshot(collection(db, 'teamList'), (snapShot) => {
      const datafromfirebase = snapShot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id
        };
      });
      setTeamsList(datafromfirebase);
    });
  }, []);




  return (
    <div>
      <div className={styles.div_groupList}>
        <div className={styles.columnHeader}>Nos</div>
        <div className={styles.columnHeader}>Team Name</div>
        <div className={styles.columnHeader}>Leader Name</div>
        <div className={styles.columnHeader}>Image</div>

        {teamsList.map((team, index) => (
          <div key={team.id} className={styles.row}>
            <div>{index + 1}</div>
            <div>{team.teamName}</div>
            <div>{team.leaderName}</div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
