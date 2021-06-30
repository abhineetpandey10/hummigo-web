import '../css/post.js.css'
export default function Post(props)
{
    return(
        <div className="post">
            <div className="author">
                <span><img src={props.dpurl} className="dp"/></span>
                <div id="authordetails">
                    <span id="authorname">{props.name}</span>
                    <span id="author">Author</span>
                </div>
            </div>
            <div>
                <img src={props.imgUrl} style={{objectFit:'cover',width:'100%',margin:'30px 0px 30px 0px'}}/>
            </div>
            <div className="posthead">{props.head}</div>
            <div className="postbody">{props.body}</div>
        </div>
    )
}