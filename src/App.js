import React,{useState} from 'react';
import "./App.css";
import "./Components/Post_It_Style.css";
import Card from "./Components/Card";
import PostCard from "./Components/PostCard";

const postObj = [
  {
    title: "Mountain",
    text: "Himalaya Mountain Ranges",
    img: "https://th.bing.com/th/id/R.f8300f8f433b90e19ca2f807d14d9d38?rik=hP318Di8708nbA&riu=http%3a%2f%2fwww.thelandofsnows.com%2fwp-content%2fuploads%2f2012%2f05%2fDSC01637.jpg&ehk=uXjOJtJsR1QBc%2bbWiZjT2Velc%2fcQP2wNDU4J%2fVWexSg%3d&risl=&pid=ImgRaw&r=0",
    category: "Nature",
    date: new Date(),
  },
  {
    title: "National Animal Tiger",
    text: "National Animal of India",
    img: "https://th.bing.com/th/id/OIP.UDdlBiZpu41T3E7noyU9nQHaEo?w=274&h=180&c=7&o=5&dpr=1.38&pid=1.7",
    category: "Animal",
    date: new Date(),
  },
  {
    title: "National Bird Peacock",
    text: "National Bird of India",
    img: "https://th.bing.com/th/id/OIP.IOkW4s3hE6vlc8Tj5dwGLQHaEK?w=325&h=183&c=7&o=5&dpr=1.38&pid=1.7",
    category: "Birds",
    date: new Date(),
  },
];




function App() {

  const [items,setItems]=useState(postObj);

 
  const savePostDataHandler = (enteredPostData) => {
    // const postData = {
    //   ...enteredPostData,
    //   id: Math.random().toString(),
    // };
    // console.log("In App.js");
    // console.log(postData);
    // console.log(postObj);
    setItems((prevItems)=>{[enteredPostData,...items]});

  };

  return (
    <div className="App">
      <div className="sec1-container">
        <h2>POST IT</h2>
        <Card onSavePostData={savePostDataHandler} />
      </div>
      <div className="sec2-container">
         {postObj.map((postItems) =>{ return ( 
          <PostCard
            title={postItems.title}
            text={postItems.text}
            img={postItems.img}
            category={postItems.category}
            date={postItems.date}
          />
        )})};

        {/* <PostCard items={postObj} /> */} 
        {/* <PostCard
          title={postObj[0].title}
          text={postObj[0].text}
          img={postObj[0].img}
          category={postObj[0].category}
          date={postObj[0].date}
         
        />
        <PostCard
          title={postObj[1].title}
          text={postObj[1].text}
          img={postObj[1].img}
          category={postObj[1].category}
          date={postObj[1].date}
       
         />
        <PostCard
          title={postObj[2].title}
          text={postObj[2].text}
          img={postObj[2].img}
          category={postObj[2].category}
          date={postObj[1].date}
        
         /> */}
      </div>
    </div>
  );
}

export default App;
