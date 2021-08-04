import React from 'react';
import './Post_It_Style.css'



const FormCard =()=>{
return (
    <form className="form-input">
        <input  autocomplete="off" type="text" className="title" placeholder="Title"></input>
        <input autocomplete="off" type="text"  placeholder="Enter Your Text" class="usertext" ></input>
        <input autocomplete="off" type="text"  placeholder="Enter Your URL" class="userimgurl" ></input>
        <input autocomplete="off" type="text" placeholder="Category" class="category_get" ></input>
        <button class="postbtn" >POST IT</button>
    </form>
)

}

export default FormCard