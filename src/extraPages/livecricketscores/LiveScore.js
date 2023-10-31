
import React, { useEffect, useState } from 'react';
import styles from './liveScore.module.css'

const LiveScore = () => {
    useEffect(()=>{
        document.title=" Live Cricket Scores";
        document.querySelector('link[rel="icon"]').setAttribute('href', 'ez-favicon.png')
    });



  const [completeData, setCompleteData] = useState([]);
  const [currentMatches, setCurrentMatches] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=3e946081-4b8b-412b-ba0b-1e142627b716');
      const data = await response.json();

      if (data.status !== "success") {
        alert("Failed");
        return [];
      }
    } catch (error) {
      console.log(completeData);
      console.error("Error fetching data:", error);
      return [];
    }
  };




  useEffect(() => {
    fetchData()
      .then((data) => {
        console.log("Complete data received:", data);
        setCompleteData(data);
      })
      .catch((error) => console.error("Error:", error));
  }); // Empty dependency array ensures this effect runs once after initial render




useEffect(() => {
    fetchData()
      .then((data) => {
        const currentMatchesData = data.filter(match => match.matchStarted);
        console.log("Current Matches:", currentMatchesData);
        setCurrentMatches(currentMatchesData);
      })
      .catch((error) => console.error("Error:", error));
  }); 



  return (
    <div>
      <h2  className={styles.h2}>Current Matches:</h2>
      <ul className={styles.h2}>
        {currentMatches.map((match, index) => (
          <li key={index}>
            <strong>Match: {match.title}</strong>
            <p>Team 1: {match['team-1']}</p>
            <p>Team 2: {match['team-2']}</p>
            <p>Match State: {match['matchStarted'] ? 'In Progress' : 'Not Started'}</p>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveScore;
