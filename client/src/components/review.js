import '../css/review.js.css';

export default function Review(props)
{
    return(
        <div className="reviewcontainer1">
            <div id="head">
                <img src={props.dpUrl} className="dp"/>
                <div style={{textAlign:'left',width:'70%'}}>
                    <div id="name">{props.name}</div>
                    <div id="rated">{props.name} rated this app {props.rated} out of 5</div>
                </div>
            </div>
            <center><div id="revtxt">{props.review}</div></center>
        </div>
    );
}