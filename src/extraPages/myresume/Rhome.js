import React from 'react'
import Rlayout from './rlayout/Rlayout'
import About from './rabout/About'
import Techstack from './Techstack/Techstack'
import Projects from './Projects/Projects'
import WorkExp from './workExp/WorkExp'
import Contact from './Contact/Contact'
import Education from './Educations/Education'
import ScrollToTop from "react-scroll-to-top";



const Rhome = () => {
  
  return (
    <> 
  
   
        <Rlayout/>
        <div className="container">
          <About />
           <Education />
        <Techstack/>
           <Projects />
            <WorkExp />
          <Contact/>
         <ScrollToTop 
          smooth 
          color="#f28f67"
          style={{
            backgroundColor:'black',
            borderRadius:"80px"
        }}
          /> 
        </div>
      
        
    </>
   
  )
}

export default Rhome