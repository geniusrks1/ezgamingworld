import React, { useState } from 'react';
import {db }from '../../../../../../firebaseinit'
import { collection, addDoc } from "firebase/firestore";
import styles from './Form.module.css'
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "ace-builds/src-noconflict/ext-language_tools"


import { useNavigate } from "react-router-dom";


const FormComponent = () => {
  const [topicName, setTopicName] = useState('');
  const [question, setQuestion] = useState('');
  const [isObjective, setIsObjective] = useState(false);
  const [options, setOptions] = useState(['', '', '', '']);
  const [solutionFormat, setSolutionFormat] = useState('text'); 
  const [solutionCode, setSolutionCode] = useState(''); 
  const [codeType, setCodeType] = useState('jsx'); // Default code type
  const [title, setTitle] = useState('');
  const [approach, setApproach] = useState('');
  const [complexity, setComplexity] = useState('');
  
 



  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      topicName,
      question,
      isObjective,
      options: isObjective ? options : [],
      solutionFormat,
      title,
      approach,
      complexity,
      codeType,
      solutionCode,
    };

    try {
        await addDoc(collection(db, "questions"), {data});
      setTopicName('');
      setQuestion('');
      setIsObjective(false);
      setOptions(['', '', '', '']);
      setSolutionFormat('text'); // Reset solution format to default after submission
      setSolutionCode(''); // Reset solution code after submission
      setTitle('');
      setApproach('');
      setComplexity('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/studyhub/courses/React");
  };




  return (
    <>
   
    <div className={styles.formContainer}>
    <div>
      <button onClick={goBack}>Go Back</button>
    </div>
      <h2 className={styles.h2} >Add Question</h2>
      <form onSubmit={handleSubmit}>
        <input  className={styles.inputField} type="text" value={topicName} onChange={(e) => setTopicName(e.target.value)} placeholder="Topic Name" />
        <br/>
        <div>
          <p>Title:</p>
          {/* Use your rich text editor component here for title input */}
          {/* Example: react-quill */}
          <input    className={styles.inputField} type='text'  value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <input  className={styles.inputField} type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" />
        <input 
          type="checkbox"
          checked={isObjective}
          onChange={(e) => setIsObjective(e.target.checked)}
          id="isObjective"
          className={styles.inputcheckbox}
        />
        <label  className={styles.label} htmlFor="isObjective">IsObjective</label>
        {/* Options (if objective) */}
        {isObjective && (
          <>
            {options.map((opt, index) => (
              <input
              className={styles.inputField}
                key={index}
                type="text"
                value={opt}
                onChange={(e) => {
                  const updatedOptions = [...options];
                  updatedOptions[index] = e.target.value;
                  setOptions(updatedOptions);
                }}
                placeholder={`Option ${index + 1}`}
              />
            ))}
          </>
        )}

        {/* Solution Format options */}
        <div>
        <h2 className={styles.h2}>Add Solution</h2>

      

        <div>
          <p>Approach:</p>
          {/* Use your rich text editor component here for approach input */}
          {/* Example: react-draft-wysiwyg */}
          {/* <ReactQuill   className={styles.textEditor}
            theme="snow" value={approach} 
            onChange={(e) => setApproach(e.target.value)}/> */}

<ReactQuill
  className={styles.textEditor}
  theme="snow"
  value={approach || ''}
  onChange={(value) => setApproach(value || '')}
/>

          {/* <textarea value={approach} onChange={(e) => setApproach(e.target.value)} /> */}
        </div>






        <div>
          <p>Complexity:</p>
          {/* Use your rich text editor component here for complexity input */}
          {/* Example: react-quill */}
          <textarea    className={styles.textArea} value={complexity} onChange={(e) => setComplexity(e.target.value)} />
        </div>



        <div className={styles.codeInputSection}>
          <p>Code:</p>
              {/* Code type selection */}
            <select  className={styles.selectField} value={codeType} onChange={(e) => setCodeType(e.target.value)}>
            <option value="java">Java</option>
            <option value="jsx">JSX</option>
            {/* Add other code type options as needed */}
          </select>
          {/* Use AceEditor for code input */}
          <AceEditor
            mode={codeType}
            theme="github"
            value={solutionCode}
            onChange={(code) => setSolutionCode(code)}
            name="solution-code-editor"
            editorProps={{ $blockScrolling: true }}
            width="100%"
            height="200px"
            placeholder={`Enter ${codeType.toUpperCase()} code`}
            className={styles.aceEditor}
          />
          
      
        </div>
        </div>


       







        {/* Submit button */}
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
    </>
  );
};

export default FormComponent;
