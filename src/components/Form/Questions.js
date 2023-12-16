import {useState } from "react";
import config from "../../config";

function Questions(props) {
    const currentQuestion = props.form.find(({complete})=>!complete)
    if(!currentQuestion){
        return null;
    };
    return (
      <>
      <h1>{config.title}</h1>
      <Question {...currentQuestion} {...props}/>
      </>
    )
  }


  function Question(props) {
    const { queryId, question, id, value = "", setForm, form } = props;
    const [inputValue, set_inputValue] = useState(value);
  
    function completeQuestion (index, value){
      const newQuestions = [...form];
      newQuestions[index].complete = true;
      newQuestions[index].value = value;
      setForm(newQuestions);
    }

    function handleChange(event){
        const {target: {value = ''}={}} = event;
        set_inputValue(value);
    }

    function onSubmit () {
      completeQuestion(id, inputValue)
      set_inputValue('')
    };

    return (
      <div className='question'>
        <label htmlFor={queryId}>{question}</label>
        <input id={queryId} onChange={handleChange} value={inputValue}/>
        <button disabled={!inputValue} onClick={onSubmit}>
          submit
        </button>
      </div>
    );
  }

  export default Questions;
