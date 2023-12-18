import React, { useState } from 'react';
import styles from './AptitudeCard.module.css';

const AptitudeCard = ({ title, topic, question, ans, solution, id, isAdmin, removeQuestion, updateQuestion,searchTerm }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    topicName: topic,
    titleName: title,
    question: question,
    answer: ans,
    solution: solution,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    updateQuestion(id, updatedData); // Call the update function with the updatedData
    setEditMode(false); // Exit edit mode after updating
  };



 // Function to highlight the matching text
 const highlightText = (text, term) => {
  if (!term || term.length === 0) {
    return <span>{text}</span>;
  }

  const regex = new RegExp(`(${term})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) => (
        <span
          key={index}
          className={part.toLowerCase() === term.toLowerCase() ? styles.highlight : ''}
        >
          {part}
        </span>
      ))}
    </span>
  );
};



  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {/* <h3>{title}</h3> */}
     <h3>   {highlightText(title, searchTerm)}</h3>
        <p>
          {topic} {isAdmin && <button onClick={() => removeQuestion(id)} className={styles.times}> &times;</button>}
          {isAdmin && (<button onClick={() => setEditMode(true)}>Edit</button> )}
       
       
       
        </p>
      </div>
      {editMode ? (
     <form onSubmit={handleUpdateSubmit} className={styles.editForm}>
     <label htmlFor="topicName">Topic Name</label>
     <input
       type="text"
       name="topicName"
       value={updatedData.topicName}
       onChange={handleInputChange}
       required
     />

     <label htmlFor="titleName">Title Name</label>
     <input
       type="text"
       name="titleName"
       value={updatedData.titleName}
       onChange={handleInputChange}
       required
     />

     <label htmlFor="question">Question</label>
     <textarea
       name="question"
       value={updatedData.question}
       onChange={handleInputChange}
       required
     ></textarea>

     <label htmlFor="answer">Answer</label>
     <input
       type="text"
       name="answer"
       value={updatedData.answer}
       onChange={handleInputChange}
       required
     />

     <label htmlFor="solution">Solution</label>
     <textarea
       name="solution"
       value={updatedData.solution}
       onChange={handleInputChange}
       required
     ></textarea>

     <button type="submit">Update</button>
   </form>
      ) : (
        <div className={styles.content}>
          {/* <p className={styles.question}>{question}</p> */}
          <p className={styles.question}>{highlightText(question, searchTerm)}</p>
          <p>
            <strong>Answer: </strong>
            {ans}
          </p>
          <p>
            <strong>Solution: </strong>
            {solution}
          </p>
        
        </div>
      )}
    </div>
  );
};

export default AptitudeCard;
