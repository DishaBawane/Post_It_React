import React ,{ useState} from "react";
import "./Post_It_Style.css";
// import FormCard from "./FormCard";

const Card = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredText, setEnteredText] = useState('');
    const [enteredImg, setEnteredImg] = useState('');
    const [enteredCategory, setEnteredCategory] = useState('');

    const titleChangeHandler=(event) =>{
        setEnteredTitle(event.target.value);
    };
    
    const textChangeHandler=(event) =>{
        setEnteredText(event.target.value);
    };
    
    const imgChangeHandler=(event) =>{
        setEnteredImg(event.target.value);
    };
    
    const categoryChangeHandler=(event) =>{
        setEnteredCategory(event.target.value);
    };

    const submitHandler=(event)=>{
        event.preventDefault();
        const postData = {
            id: Math.random().toString(),
            title:enteredTitle,
            text:enteredText,
            img:enteredImg,
            category:enteredCategory
        };
        props.onSavePostData(postData);
        setEnteredTitle('');
        setEnteredText('');
        setEnteredImg('');
        setEnteredCategory('');


    };

    const clickHandler=()=>{
        console.log("clicked");
    };

   
  return (
    <div className="inputcontainer">
  
      <form  onSubmit={submitHandler} className="form-input">
        <input onChange={titleChangeHandler}
          type="text"
          value={enteredTitle}
          className="title"
          placeholder="Title"
        ></input>
        <input onChange={textChangeHandler}
          type="text"
          value={enteredText}
          placeholder="Enter Your Text"
          className="usertext"
        ></input>
        <input onChange={imgChangeHandler}
          type="text"
          value={enteredImg}
          placeholder="Enter Your URL"
          className="userimgurl"
        ></input>
        <input onChange={categoryChangeHandler}
          type="text"
          value={enteredCategory}
          placeholder="Category"
          className="category_get"
        ></input>
        <button onClick={clickHandler} className="postbtn">POST IT</button>
      </form>
    </div>
  );
};

export default Card;
