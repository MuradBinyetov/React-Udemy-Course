import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";

// import Card from '../ui/Card';
//import LoadingSpinner from '../ui/LoadingSpinner';
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isEntered, setIsEntered] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusedHandler = () => {
    setIsEntered(true);
  };

  const finishFocusedHandler = () => {
    setIsEntered(false);
  };

  return (
    <div>
      <Prompt when={isEntered} message={(location) => "Are You Sure?"} />
      <form
        onChange={formFocusedHandler}
        className={classes.form}
        onSubmit={submitFormHandler}
      >
        {props.isLoading && (
          <div className={classes.loading}>{/* <LoadingSpinner /> */}</div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows="5" ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={finishFocusedHandler} className="btn">Add Quote</button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
