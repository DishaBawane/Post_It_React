import React, { useEffect, useState } from "react";
import "./App.css";
import "./Components/Post_It_Style.css";
import Card from "./Components/Card";
import PostCard from "./Components/PostCard";
import useHttp from "./hooks/use-http";

// const postObj = [
//   {
//     title: "Mountain",
//     text: "Himalaya Mountain Ranges",
//     img: "https://th.bing.com/th/id/R.f8300f8f433b90e19ca2f807d14d9d38?rik=hP318Di8708nbA&riu=http%3a%2f%2fwww.thelandofsnows.com%2fwp-content%2fuploads%2f2012%2f05%2fDSC01637.jpg&ehk=uXjOJtJsR1QBc%2bbWiZjT2Velc%2fcQP2wNDU4J%2fVWexSg%3d&risl=&pid=ImgRaw&r=0",
//     category: "Nature",
//     date: new Date(),
//   },
//   {
//     title: "National Animal Tiger",
//     text: "National Animal of India",
//     img: "https://th.bing.com/th/id/OIP.UDdlBiZpu41T3E7noyU9nQHaEo?w=274&h=180&c=7&o=5&dpr=1.38&pid=1.7",
//     category: "Animal",
//     date: new Date(),
//   },
//   {
//     title: "National Bird Peacock",
//     text: "National Bird of India",
//     img: "https://th.bing.com/th/id/OIP.IOkW4s3hE6vlc8Tj5dwGLQHaEK?w=325&h=183&c=7&o=5&dpr=1.38&pid=1.7",
//     category: "Birds",
//     date: new Date(),
//   },
// ];

function App() {
  const [items, setItems] = useState([]);
  const { isLoading, error, sendRequest: fetchData } = useHttp();
  
  useEffect(()=>{
    const transformData=(data)=>{
        const loadedData = data.result.map((data)=>({
          id: data.objectId,
          text: data.description,
          title: data.title,
          url: data.image,
          category: data.category
        }));

        setItems(loadedData);
    };
 

    fetchData(
      {
        method: "get",
        url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/PostIt",
        headers: {
          "X-Parse-Application-Id": "MVV6avFp",
          "Content-Type": "application/json"
        }
      },transformData);
  
  },[fetchData]);
   




  const savePostDataHandler = (enteredPostData) => {
    console.log(enteredPostData);
    setItems((prevItems) => {
      return [enteredPostData, ...prevItems];
    });
  };

  return (
    <div className="App">
      <div className="sec1-container">
        <h2>POST IT</h2>
        <Card onSavePostData={ savePostDataHandler} />
      </div>
      <div className="sec2-container">
        {items.map((postItems) => (
          <PostCard
            isLoading={isLoading}
            error={error}
            key={postItems.id}
            title={postItems.title}
            text={postItems.text}
            img={postItems.img}
            category={postItems.category}
          />
        ))}
        ;
      </div>
    </div>
  );
}

export default App;
