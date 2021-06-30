import {useState} from 'react';
import '../css/featuredreviews.js.css';

export default function FeaturedReviews(props)
{
    return(
    <div className="featured">
        <div id="head">
            <img src={props.dpUrl}/>
            <div style={{textAlign:'left',width:'70%'}}>
                <div id="name">{props.name}</div>
                <div id="rated">{props.name} rated this app {props.rated} out of 5</div>
            </div>
        </div>
        <div id="revtext">{props.review}</div>
    </div>
    );
}