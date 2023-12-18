import React, { useState } from 'react';

const Overview = () => {
  const [showJoinContent, setShowJoinContent] = useState(false);
  const [showRulesContent, setShowRulesContent] = useState(false);

  const toggleJoinContent = () => {
    setShowJoinContent(!showJoinContent);
  };

  const toggleRulesContent = () => {
    setShowRulesContent(!showRulesContent);
  };

  return (
    <>
<div style={{ marginBottom: '20px', fontFamily: 'Arial, sans-serif', color: 'white', lineHeight: '1.5' }}>
    <p>EZGAMINGWORLD is hosting an exciting Underdog Event with a prize pool of INR 25,000.</p>
    <p>For Queries, join us on <a href="https://discord.gg/QB48tcYjvh " style={{ color: '#0077cc', textDecoration: 'none' }} target='blank'>Discord</a>.</p>
    <p>Check out the Tutorial Video on <a href="https://www.youtube.com/watch?v=z1LvSlU_db0&t=71s&ab_channel=Ezgamingworld" style={{ color: '#0077cc', textDecoration: 'none' }} target='blank'>YouTube</a>.</p>
    <div style={{ fontFamily: 'Arial, sans-serif', color: 'white', lineHeight: '1.5' }}>
    <h2>Format</h2>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><strong>Check-in time:</strong> 15 min before start</li>
        <li><strong>Team size:</strong> Squad</li>
        <li><strong>Prizepool:</strong> 5k</li>
        <li><strong>Slots:</strong> 222</li>
        <li><strong>Registered:</strong> 778/1000</li>
    </ul>
    
    <h2>Rounds</h2>
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
            <tr>
                <th>Round Type</th>
                <th>Promotions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>QUALIFIERS</td>
                <td>Single Elimination<br/>Top 4 Teams Per Group</td>
            </tr>
            <tr>
                <td>QUARTER FINALS</td>
                <td>Single Elimination<br/>Top 6 Teams Per Group</td>
            </tr>
            <tr>
                <td>SEMI FINALS</td>
                <td>Double Elimination<br/>Top 6 Teams Per Group</td>
            </tr>
            <tr>
                <td>FINALS</td>
                <td>Best of 3</td>
            </tr>
        </tbody>
    </table>
    
    <h2>Winner Prize Distribution</h2>
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
            <tr>
                <th>Position</th>
                <th>Prize</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1st</td>
                <td>2000</td>
            </tr>
            <tr>
                <td>2nd</td>
                <td>1200</td>
            </tr>
            <tr>
                <td>3rd</td>
                <td>800</td>
            </tr>
            <tr>
                <td>4th</td>
                <td>600</td>
            </tr>
            <tr>
                <td>5th</td>
                <td>400</td>
            </tr>
        </tbody>
    </table>
</div>

</div>


      {/* Toggle content for "How To Join" */}
      <div onClick={toggleJoinContent} style={toggleStyle}>
        How To Join
      </div>
      {showJoinContent && (
        <div style={contentStyle}>
           <p>
      Joining a ezgamingworld tournament is easy. However, before joining, please ensure the following:
    </p>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li>&#10003; All team members have logged into their ezgamingworld account.</li>
      <li>&#10003; Team profile for the particular game has been created and all members have been invited and added.</li>
    </ul>
    <p>To join a tournament follow these steps:</p>
    <ol>
      <li>Navigate to the 'tournaments page' and select your preferred tournament.</li>
      <li>Click on Join Tournament.</li>
      <li>Fill the slots with the desired team members.</li>
      <li>Click on the 'Join' button.</li>
    </ol>
    <p>You will receive a confirmation notification on the top right corner of the screen.</p>
  </div>
     
      )}

      {/* Toggle content for "Rules" */}
      <div onClick={toggleRulesContent} style={toggleStyle}>
        Rules
      </div>
      {showRulesContent && (
        <div style={contentStyle}>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>ID LEVEL SHOULD BE 40+</li>
            <li>PRIZEPOOL DISTRIBUTION WILL BE DONE WITHIN 45-60 DAYS, SO DON'T SPAM ADMIN'S DM</li>
            <li>EMERGENCY PICKUP/BAGPACK ARE DISALLOWED. TEAMS USING THIS FEATURE WILL GET MINUS 10 POINTS IN THE SAME MATCH</li>
            <li>ALL 4 PLAYERS MUST RECORD THEIR WHOLE GAMEPLAY WITH SOUND & BACKGROUND APPS (AT LEAST THRICE IN A MATCH) UNEDITED/UNCROPPED</li>
            <li>SCREENSHOTS OF RESULTS ARE COMPULSORY, WITHOUT THAT NO PRIZE MONEY</li>
            <li>IF YOU WERE KILLED BY A HACKER, PROVIDE SUITABLE RECORDING & DEATH CAM (MANDATORY), VIDEO SHOULD BE CONVINCING ENOUGH TO</li>
            <li>TEAM UP AND HACKING WILL LEAD TO DISQUALIFICATION AND TEAM BAN</li>
            <li>ALL 4 PLAYERS MUST JOIN THE ROOM 5 MINS IN ADVANCE OTHERWISE, WE WILL NOT BE RESPONSIBLE IF ANY PLAYER IS SITTING IN YOU</li>
            <li>NO COMPLAINTS WILL BE ENTERTAINED FOR ANY PLAYERS SITTING IN YOUR SLOT POST START TIME</li>
            <li>IN ANY CASE OF DISPUTE LAST DECISION IS UPTO THE ADMIN</li>
            <li>YOU MUST AGREE ALL TERMS AND CONDITION MENTIONED ABOVE BEFORE PLAYING</li>
            <li>TEAMS ARE NOT ALLOWED TO CHANGE THEIR INGAME NAME</li>
            <li>TEAMS WITH UNREGISTERED PLAYERS WILL BE DISQUALIFIED</li>
            <li>SOLO/DUO NOT ALLOWED. RESULT WILL NOT BE COUNTED</li>
            <li>PAYMENT WILL BE CLEARED IN 90 DAYS</li>
            <li>CHECK IN IS COMPULSORY. IF NOT CHECK -IN POINTS WILL BE DEDUCTED</li>
          </ul>
        </div>
      )}
    </>
  );
};

// Styles
const toggleStyle = {
  backgroundColor: 'black',
  padding: '10px',
  cursor: 'pointer',
  marginBottom: '5px',
};

const contentStyle = {
  backgroundColor: 'black',
  border: '1px solid #ccc',
  padding: '10px',
};

export default Overview;
