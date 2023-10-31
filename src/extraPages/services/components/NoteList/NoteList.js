import { useSelector, useDispatch } from "react-redux";
import styles from "./NoteList.module.css";
import { noteSelector,actions } from '../../../../redux/reducer/noteReducer'
function NoteList() {
    // const notes=useSelector((state)=> state.noteReducer.notes);
    const notes=useSelector(noteSelector);
    const dispatch=useDispatch();

  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li className={styles.item}>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className={styles.notecontent}>{note.text}</p>
            <button className={"btn btn-danger "+styles.button}
           onClick={()=> dispatch(actions.delete(index))}
            >Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
