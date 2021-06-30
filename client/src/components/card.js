import { useState,useEffect } from 'react';
import '../css/card.js.css';
export default function Card(props)
{
    const [tags,setTags]=useState([]);
    function loadTags()
    {
        setTags(props.tags);
    }
    useEffect(()=>{
        loadTags();
    },[])
    return(
        <div className="cardview">
            <img src={props.imgUrl}/>
            <div id="postedby">
                Posted by {props.name}
            </div>
            <div className="cardhead">
                {props.head}
            </div>
            <div className="cardsummary">
                {props.summary}
            </div>
        </div>
    )
}