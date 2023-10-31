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
      {/* <div className={styles.videos}>
       
        <iframe
          width="800"
          height="560"
          src=""
          title="React Video"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div> */}

<div>

{chapter.easy.map((problem, index) => {
  return(
        <div className={styles.column} key={index}>
          <div className={styles.number_column}>{index + 1}</div>
          <div className={styles.problem_column}>{problem.problem}</div>
          <a className={`${styles.button} ${styles.practice_button}`} href={problem.link} target="_blank" rel="noopener noreferrer">
            Practice
          </a>
         
            <a className={`${styles.button} ${styles.solution_button}`} href={problem.solution} target="_blank" rel="noopener noreferrer">
              Solution
            </a>
         
        </div>
  );
  }
  )}



</div>



    </div>
  );
}

export default Chapter;
