import '../css/card2.js.css';
export default function Card2(props)
{
    return(
        <div id="container">
            <div>{props.head}</div>
            <div>{props.body}</div>
        </div>
    )
}