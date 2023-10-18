
import { useState ,useRef,useEffect, useReducer} from 'react';
import styles from './Blog.module.css'
import {CiSquareRemove} from 'react-icons/ci'
import {db} from '../../../../src/firebaseinit';
import { collection, addDoc,onSnapshot,deleteDoc,doc} from "firebase/firestore"; 








function blogsReducer(state,action){
    switch (action.type) {
        case 'SET':
      return action.blog;

        case "ADD":
            return [action.blog,...state];
           
    
        case "REMOVE" :
           return state.filter((blog,index)=>index!==action.index)
           default :return [];
    }

}





export default function Blog(){

    // const [title,setTitle] = useState("");
    // const [content,setContent] = useState("");
    const[formData, setFormData]=useState({title:"",content:""})
    // const [blogs, setBlogs] =  useState([]);
    const[blogs,dispatch]=useReducer(blogsReducer,[]);
    const titleRef=useRef(null);

 async function handleSubmit(e){
        e.preventDefault();
        // setBlogs([{title:formData.title,content:formData.content}, ...blogs]);
       dispatch({type:"ADD", blog:{title:formData.title,content:formData.content}})
        //   setTitle("");
    //   setContent("");

// Add a new document with a generated id.
try{
console.log(formData)
   const docRef = await addDoc(collection(db, "blog")
   , {
    title: formData.title,
    content: formData.content,
    createdOn:new Date()
  });
  console.log("Document written with ID: ", docRef.id);
}
catch(err){
console.log('its error',err)
}

  
    setFormData({title:"",content:""})
    titleRef.current.focus();
    }


const removeBlog= async(id)=>{
//    setBlogs( blogs.filter((blog,index)=>i!=index))
// dispatch({type:"REMOVE",index:id});

await deleteDoc(doc(db, "blog", id));


}


useEffect(()=>{
    if(blogs.length && blogs[0].title){
        document.title=blogs[0].title;
    }
    else{
        document.title="No Blogs!!!"
    }
},[blogs])


useEffect(()=>{
    titleRef.current.focus();
},[]);







useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'blog'), (snapShot) => {
      const blogs = snapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log(blogs);
      dispatch({ type: 'SET', blog: blogs }); 
    });
  
    // Cleanup the listener when the component is unmounted
    return () => unsubscribe();
  }, []);





    return(
        <>
        <h1 className={styles.h1}>Write a Blog!</h1>
        <div className={styles.section}>

        {/* Form for to write the blog */}
            <form onSubmit={handleSubmit}>
                <Row label="Title">
                        <input className={styles.input}
                                placeholder="Enter the Title of the Blog here.."
                                onChange = {(e) => setFormData({title:e.target.value,content:formData.content})}
                                value={formData.title}
                                ref={titleRef}
                        />
                </Row >

                <Row label="Content">
                        <textarea className={`${styles.input} ${styles.content}`}
                                placeholder="Content of the Blog goes here.."
                                onChange = {(e) => setFormData({title:formData.title,content:e.target.value})}
                                value={formData.content}
                                required
                        />
                </Row >
         
                <button className = {styles.btn}>ADD</button>
            </form>
                     
        </div>

        <hr/>

        {/* Section where submitted blogs will be displayed */}
        <h2 className={styles.h2}> Blogs </h2>
        {blogs.map((blog,i) => (
            <div className={styles.blog}>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>

                <div className={styles.blogbtn}>
                <CiSquareRemove 
                className={`${styles.btn} ${styles.remove}`}
                onClick={()=>removeBlog(blog.id)}
               />
                </div>
                
            </div>
        ))}
        
        </>
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label className={styles.label}>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
