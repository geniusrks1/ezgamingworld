import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./NoteForm.module.css";
import { actions }  from '../../../../redux/reducer/noteReducer';


function NoteForm() {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.add(noteText));
    
    setNoteText("");
  };

  return (
    <div className={styles.noteContainer}>
      
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        className="form-control mb-3"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Note</button>
    </form>
    </div>
  );
}

export default NoteForm;