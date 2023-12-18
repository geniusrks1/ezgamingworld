import React from 'react';
import style from './Courses.module.css';
import Card from '../../../components/card';
import coursesData from '../../../data/courses.json';
import { Link} from 'react-router-dom';
 
function Courses() {
  return (
  
    <div className={style.courses_container}>
      <div className={style.heading}>
        <h1>Popular Courses</h1>
       
      </div>
      <div className={style.courses}>
        {coursesData.map((course, index) => {
            const rec = course.title === 'React' ? 'React' : `${course.id}`;
          return (
            <div key={index} className={style.card_container}>
              <Link to={rec}>
              <Card
                key={course.id}
                id={course.id}
                title={course.title}
                img={course.img}
              />
              </Link>
            </div>
          );
        }
        )
        }

        <div>
          <Link to='aptitude'> 
          <Card key='aptitude' id='aptitude' title='Aptitude' img= '/static/studyHub/aptitude.jpg'/>
          </Link>
        </div>
      </div>
    </div>
   
   
  );
}

export default Courses;
