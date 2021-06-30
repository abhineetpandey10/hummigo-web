import {useState,useEffect} from 'react';
import '../css/form.js.css';
import PublishIcon from '@material-ui/icons/Publish';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Form(props)
{
    var [title,setTitle]=useState('');
    var [imgLink,setImgLink]=useState('assets/filler.jpg');
    var [name,setName]=useState('');
    var [email,setEmail]=useState('');
    var [dpurl,setDpurl]=useState('');
    var [body,setBody]=useState('');

    var [posting,setPosting]=useState(false);

    useEffect(async()=>{
        let userdetails=JSON.parse(await localStorage.getItem('@userdetails'));
        setName(userdetails.name);
        setEmail(userdetails.email);
        setDpurl(userdetails.dpURL);
    },[])

    function publishPost()
    {
        setPosting(true);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": name,
            "email": email,
            "dpurl": dpurl,
            "heading": "post",
            "summary": title,
            "imglink":imgLink,
            "text": body
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let url=""
        if(props.context==='blogs')
        {
            url="https://hummigo-server.herokuapp.com/blogs/write";
        }
        else
        {
            url="https://hummigo-server.herokuapp.com/stories/write";
        }

        fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            setPosting(false);
            window.location.reload();
        })
        .catch(error => console.log('error', error));
    }

    return(
        <div className="form">
            <Backdrop open={posting} style={{backgroundColor:'lightgray',zIndex:900,opacity:0.5,color:'#56ab2f'}}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className="author">
                <span><img src={props.dpurl} className="formdp"/></span>
                <div id="authordetails">
                    <span id="authorname">{props.name}</span>
                    <span id="author">Author</span>
                </div>
            </div>
            <div id="subheading">Title:</div>
            <input type="text" onChange={(event)=>{setTitle(event.target.value)}}></input>
            <div id="subheading">Add an Image:</div>
            <input type="text" placeholder="Enter link" onChange={(event)=>{setImgLink(event.target.value)}}></input>
            {/**<center style={{margin:'10px 0px 10px 0px'}}><h3 style={{color:'steelblue'}}>OR</h3></center>
            <input type="file" hidden id="imgupload"/>
            <center><label htmlFor="imgupload" id="uploadbtn">Upload file</label></center>**/}
            <div id="subheading">Body:</div>
            <textarea onChange={(event)=>{setBody(event.target.value)}}></textarea>
            <div id="submitbtn" onClick={()=>publishPost()}>
                <PublishIcon style={{marginBottom:'-5px'}}/>
                Publish
            </div>
        </div>
    )
}