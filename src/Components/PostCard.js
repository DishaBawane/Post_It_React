import React  from 'react';
import './Post_It_Style.css';

  const PostCard=(props)=>{
//   const month= props.date.toLocaleString('en-US',{ month:'long'});
//   const day= props.date.toLocaleString('en-US',{ month:'2-digit'});
//   const year=props.date.getFullYear();

 
    return <div className="card">
              <div className="image-container">
                <img className="image_post"  src= {props.img} alt=""/>
              </div> 
            <div>
                <div className="title_date_post">
                    <h2 className="title_post">{props.title}</h2>
                    {/* <p className="date">{props.date.toISOString()}</p> */}
                    {/* <p className="date"> {props.date.toISOString()}</p> */}
                </div>
                <div className="description_post">
                    <p className="description">{props.text}</p>
                </div>
                <div className="category_post">
                    <button className="category">{props.category}</button>
                </div>
            </div>
        
    </div>
    

};

export default PostCard;