import React ,{ useEffect, useRef, useState }from 'react';
import { useParams } from 'react-router-dom';
import { cardData } from './BgmiTournamentList';
import styles from './BgmiTournamentDetails.module.css';

//Import fireStore reference from frebaseInit file
import {db} from '../../../firebaseinit';
//Import all the required functions from fireStore
import { collection, doc,  setDoc,onSnapshot} from "firebase/firestore"; 

const BgmiTournamentDetails = () => {
  const { id } = useParams();
  const card = cardData.find((item) => item.id === id);
  const formRef = useRef(null);


  const [formData, setformData] = useState({teamName:"", leaderName:""})
  const [teamsList, setteamsList] =  useState([]);





  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'auto' });
  };

  useEffect(()=>{
document.title=card.title;
  },[card.title]);


  async function handleSubmit(e){
    e.preventDefault();
    // added into firebase database        
    await setDoc( doc(collection(db, "teamList")), {
            teamName: formData.teamName,
            leaderName: formData.leaderName,
            createdOn: new Date()
        });
        setformData({teamName: "",leaderName:""})
}


useEffect(()=>{
   onSnapshot(collection(db,"teamList"), (snapShot) => {
    const datafromfirebase = snapShot.docs.map((doc) => {
            return{
              ...doc.data(),
                id: doc.id
                
            }
        })

 // Sort by timestamp (assuming 'createdOn' is the field to sort by)
 datafromfirebase.sort((a, b) => {
  const timestampA = a.createdOn.toDate().getTime();
  const timestampB = b.createdOn.toDate().getTime();
  return timestampA - timestampB; // Ascending order (change to timestampB - timestampA for descending)
});






        setteamsList(datafromfirebase);
})
},[]);












    // setteamsList([...teamsList,{teamName: formData.teamName,leaderName:formData.leaderName}]);
    



  return (
    <>
      <div className={styles.container}>
        <img src={card.imageUrl} alt={card.title} className={styles.image} />
        <button onClick={scrollToForm}
        className={styles.registerButton} >
          Register
        </button>
      </div>

      
      <div ref={formRef} class=  {styles.div_container}>
          <div className={styles.form} >
         
            <h2>Registration Form</h2>


            <form onSubmit={handleSubmit}>
                <Row label="Team Name">
                        <input className="input"
                                placeholder="Enter your team nsme.."
                                value={formData.teamName}
                                onChange = {(e) => setformData({teamName: e.target.value, leaderName:formData.leaderName})}
                        />
                </Row >

                <Row label="Leader Real Name">
                        <textarea className="input content"
                                placeholder="Enter Leader Real Name.."
                                value={formData.leaderName}
                                onChange = {(e) => setformData({teamName: formData.teamName,leaderName: e.target.value})}
                        />
                </Row >
         
                <button className = "btn">ADD</button>
            </form>








          </div>
        </div>



    

      <div className={styles.details}>
        <p>Total Slots: {card.totalSlots}</p>
        <p>Filled Slots: {card.filledSlots}</p>
        <p>Registration Open Date: {card.registrationOpenDate}</p>
      </div>


 






 



<div className={styles.div_groupList}>
  <div className={styles.columnHeader}>Nos</div>
  <div className={styles.columnHeader}>Team Name</div>
  <div className={styles.columnHeader}>Leader Name</div>

  {teamsList.map((team, index) => (
    <React.Fragment key={index}>
      <div>{index + 1}</div>
      <div>{team.teamName}</div>
      <div>{team.leaderName}</div>
    </React.Fragment>
  ))}
</div>




    </>
  );
};

export default BgmiTournamentDetails;







//Row component to introduce a new row section in the form
function Row(props){
  const{label} = props;
  return(
      <>
      <label>{label}<br/></label>
      {props.children}
      <hr />
      </>
  )
}

