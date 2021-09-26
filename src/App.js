import React, { useEffect, useState } from "react";
import "./App.css";
import "./Components/Post_It_Style.css";
import Card from "./Components/Card";
import PostCard from "./Components/PostCard";
import useHttp from "./hooks/use-http";


function App() {
  const [items, setItems] = useState([]);
  const { isLoading, error, sendRequest: fetchData } = useHttp();
  const { sendRequest: sendDataRequest
  } = useHttp(); 

  useEffect(() => {
    const transformTasks = (data) => {
      const loadedTasks = data.results.map((data) => ({
        id: data.objectId,
        text: data.description,
        title: data.title,
        img: data.image,
        category: data.category
      }));
      setItems(loadedTasks);
    };
    fetchData(
      {
        method: "get",
        url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/PostIt",
        headers: {
          "X-Parse-Application-Id": "MVV6avFp",
          "Content-Type": "application/json"
        }
      },
      transformTasks
    );
  }, [fetchData]);

  const createdPostData = (data) => {
    const createdNewPost = {
      id:  data.objectId ,
      text: data.description,
      title: data.title,
      img: data.image,
      category: data.category
    };

    console.log(data);

    setItems((prev)=>[createdNewPost,...prev]);
  };


  const addNewPostHandler = async (data) => {
    sendDataRequest(
      {
        method: "post",
        url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/PostIt",
        headers: {
          "X-Parse-Application-Id": "MVV6avFp",
          "Content-Type": "application/json"
        },
        body: {
          description: data.text,
          title: data.title,
          image: data.img,
          category: data.category
        }
      },
      createdPostData(data)
    );
  };


  return (
    <div className="App">
      <div className="sec1-container">
        <h2>POST IT</h2>
        <Card onSavePostData={addNewPostHandler} />
      </div>
      <div className="sec2-container">
      <h1>{isLoading ? "Loading...":"Done"}</h1>
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
        )).reverse()}
        ;
      </div>
    </div>
  );
}

export default App;

