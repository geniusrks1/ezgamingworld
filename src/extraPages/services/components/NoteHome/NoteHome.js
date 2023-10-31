import React from 'react'

import NavBar from '../NavBar/NavBar'
import NoteForm from '../NoteForm/NoteForm'
import NoteList from '../NoteList/NoteList'
const NoteHome = () => {
  return (
    <div style={{backgroundColor:"white"}}>
               <NavBar />
               <h1>Notes</h1>
              <NoteForm  />
              <NoteList />
    </div>
  )
}

export default NoteHome