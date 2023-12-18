
import React, { useEffect, useState } from 'react';
import styles from './Aptitude.module.css'
import {useSelector} from 'react-redux';
import { userSelector } from '../../../../../redux/reducer/UserReducer';
import AptitudeCard from './AptitudeCard';
import { addDoc, collection, deleteDoc, doc, onSnapshot ,updateDoc} from 'firebase/firestore';
import { db } from '../../../../../firebaseinit';
const Aptitude = () => {
    const [showForm, setShowForm] = useState(false); 
    const {user}=useSelector(userSelector);
   
   
    let User;
    if(user)
    User=user.email;
    else
    User='x.......1x1x1________x1@gmail.com'
    
    // console.log('User is ',User);
    const Admin="xy1004323@gmail.com"
    const isAdmin= User===Admin;;

const initialState={
    topicName: '',
    titleName: '',
    question: '',
    answer: '',
    solution: '',
  }

  const [formData, setFormData] = useState(initialState);
  const [questions, setQuestions] =  useState([]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await addDoc(collection(db,'aptitudeQuestion'),{
    topicName: formData.topicName,
    titleName: formData.titleName,
    question:  formData.question,
    answer:    formData.answer,
    solution:  formData.solution,
    createdOn:new Date()
    })
    // Handle form submission, e.g., send data to backend or perform actions with formData
    // console.log(formData);
    setFormData(initialState);
    handleCloseForm();
  };


  const handleAddNewQuestion = () => {
    setShowForm(true); // Show the form when "Add New Question" is clicked
  };
  const handleCloseForm = () => {
    setShowForm(false); // Hide the form
    // You might want to reset form data here: setFormData({ ...initialFormData });
  };




  useEffect(()=>{

    onSnapshot(collection(db,'aptitudeQuestion'),(snapshot)=>{

           const datafromfirebase=snapshot.docs.map((doc)=>{
            return{
                id:doc.id,
                ...doc.data()
            }

           })
           setQuestions(datafromfirebase);
    }
    
    
    );

  },[]);


const removeQuestion=async(i)=>{
// setQuestions(questions.filter((question,index)=>question.id!==i));
try{
  await deleteDoc(doc(db,'aptitudeQuestion',i));
}
catch(error){
  console.error('Error removing document: ', error);
}

}


const updateQuestion = async (id, updatedData) => {
  // Update in the React state
  // const updatedQuestions = questions.map((question) =>
  //   question.id === id ? { ...question, ...updatedData } : question
  // );
  // setQuestions(updatedQuestions);

  try {
    // Update in Cloud Firestore
    const questionRef = doc(db, 'aptitudeQuestion', id);
    await updateDoc(questionRef, updatedData);
    console.log('Document successfully updated!');
  } catch (error) {
    console.error('Error updating document: ', error);
  }
};


const [searchTerm, setSearchTerm] = useState('');
const [searchResults, setSearchResults] = useState([]);
const handleSearch = (e) => {
  setSearchTerm(e.target.value);
};
useEffect(() => {
  const filteredQuestions = questions.filter(
    (question) =>
      question.titleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.question.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setSearchResults(filteredQuestions);
}, [questions, searchTerm]);
















  return (<>

<input
  className={styles.searchBar}
        type="text"
        placeholder="Search by title or question..."
        value={searchTerm}
        onChange={handleSearch}
      />
<div style={{color:"yellowgreen"}}> Total Number of Questions: {questions.length}</div>

{ searchTerm.length >=3 &&<div className={styles.contentListSearchResult}>
        {searchResults.map((question) => (
          <AptitudeCard
            key={question.id}
            title={question.titleName}
            topic={question.topicName}
            question={question.question}
            ans={question.answer}
            solution={question.solution}
            id={question.id}
            isAdmin={isAdmin}
            removeQuestion={removeQuestion}
            updateQuestion={updateQuestion}
            searchTerm={searchTerm}
          />
        ))}
      </div>
}



      


  {isAdmin && <button onClick={handleAddNewQuestion}>ADD NEW QUESTION</button>}
   
  {showForm && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={handleCloseForm}>
              &times;
            </span>
            <form onSubmit={handleSubmit}  className={styles.my_form}>
      <label className={styles.label} htmlFor="topicName">Topic Name</label>
      <input
        type="text"
        id="topicName"
        name="topicName"
        value={formData.topicName}
        onChange={handleChange}
        required
      />

      <label className={styles.label} htmlFor="titleName">Title Name</label>
      <input
        type="text"
        id="titleName"
        name="titleName"
        value={formData.titleName}
        onChange={handleChange}
        required
      />

      <label className={styles.label} htmlFor="question">Question</label>
      <textarea
        id="question"
        name="question"
        value={formData.question}
        onChange={handleChange}
        required
      ></textarea>

      <label className={styles.label} htmlFor="answer">Answer</label>
      <input
        type="text"
        id="answer"
        name="answer"
        value={formData.answer}
        onChange={handleChange}
        required
      />

      <label className={styles.label} htmlFor="solution">Solution</label>
      <textarea
        id="solution"
        name="solution"
        value={formData.solution}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit" className={styles.button}>Submit</button>
           </form>

          </div>
        </div>
      )}
   










   <div className={styles.contentList}>

{questions.map((question)=>  <AptitudeCard 
    topic={question.topicName}
    title={question.titleName}
    question={question.question}
    ans={question.answer}
    solution={question.solution}
    id={question.id}
    isAdmin={isAdmin}
    removeQuestion={removeQuestion}
    updateQuestion={updateQuestion}
    />)}


   </div>
   




    </>);
};

export default Aptitude;
