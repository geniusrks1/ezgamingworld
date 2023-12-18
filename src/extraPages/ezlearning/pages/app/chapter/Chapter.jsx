import React from "react";
import styles from "./Chapter.module.css";
import { useParams,useOutletContext } from "react-router-dom";


function Chapter() {
  const { chapterId }=useParams();
  const course=useOutletContext();

  const chapter = course.chapters.find(
    // convert the number to string for equality check
    (chapter) => String(chapter.chapter) === chapterId
  );
  
  return (
    <div>
       <h1>{chapter.title}</h1>
       <hr />
      <h2>{chapter.description}</h2>
      <p className={styles.para}>{chapter.details}</p>
      <br />
      <br />
    
<div>

{chapter.questions.map((problem, index) => {
  return(
        <div className={styles.column} key={index}>
          <div className={styles.number_column}>{index + 1}</div>
          <div className={styles.problem_column}>{problem.problem}</div>

    


         {/* <button className={`${styles.button} ${styles.solve_button}`}>Show</button> */}

         {problem.link &&      <a className={`${styles.button} ${styles.practice_button}`} href={problem.link} target="_blank" rel="noopener noreferrer">
            LeetCode
          </a>}

          {problem.gfg &&   <a className={`${styles.button} ${styles.solution_button}`} href={problem.gfg} target="_blank" rel="noopener noreferrer">
              gfg
            </a> 
}
            {problem.codingNinja &&    <a className={`${styles.button} ${styles.solution_button}`} href={problem.codingNinja} target="_blank" rel="noopener noreferrer">
            codingninja
            </a> 
            }
        </div>
  );
  }
  )}



</div>



    </div>
  );
}

export default Chapter;
