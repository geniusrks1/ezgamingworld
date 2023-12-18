import React, { useEffect, useState } from 'react';
import { Link ,Outlet } from 'react-router-dom';
import styles from './ReactApp.module.css';
import { db } from '../../../../../../firebaseinit';
import { collection, onSnapshot } from 'firebase/firestore';


const ReactApp = () => {
  const [list, setList] = useState([]);
  const [uniqueTopics, setUniqueTopics] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'questions'), (snapShot) => {
      const listF = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
// console.log(listF)
      setList(listF);
    });

    // Clean up the subscription
    // console.log('its list',list)
    // return () => {
    //   unsub();
    // };
  }, []);

  useEffect(() => {
    // Extract all topic names into a Set to get unique values
    const topics = new Set(list.map((item) => item.data.topicName));
    setUniqueTopics(Array.from(topics));

    console.log('uniq',uniqueTopics);
    console.log('list',list);
  }, [list]);



  // Rendering
  return (
    <>
      <Outlet />
      <div style={{ color: 'white' }} className={styles.topics}>
        <Link to="add">
          <button> Add Question</button>
        </Link>
        <h2>Topics</h2>

        <div className={styles.topicsContainer}>
        
  {uniqueTopics.map((item, index) => (
    
    <div key={index} className={styles.topicItem}>
     
      {item}
      
    </div>
  ))}
</div>



      </div>
     
    </>
  );
};

export default ReactApp;
