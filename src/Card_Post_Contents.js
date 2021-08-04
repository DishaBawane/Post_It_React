import React from 'react';
import './Post_It_Style.css';

const Card_Post_Contents =()=>{

    return (

        <div>
            <div className="image-container">
                <img class="image_post"  src="https://th.bing.com/th/id/R.f8300f8f433b90e19ca2f807d14d9d38?rik=hP318Di8708nbA&riu=http%3a%2f%2fwww.thelandofsnows.com%2fwp-content%2fuploads%2f2012%2f05%2fDSC01637.jpg&ehk=uXjOJtJsR1QBc%2bbWiZjT2Velc%2fcQP2wNDU4J%2fVWexSg%3d&risl=&pid=ImgRaw&r=0"/>
            </div>
            <div>
                <div className="title_date_post">
                    <h2 className="title_post">Nature</h2>
                    <p className="date">4-08-21</p>
                </div>
                <div className="description_post">
                    <p className="description">Himalaya Mountain Ranges</p>
                </div>
                <div className="category_post">
                    <button className="category">Nature</button>
                </div>
            </div>

        </div>
    )

}

export default Card_Post_Contents