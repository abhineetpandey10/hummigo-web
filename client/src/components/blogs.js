import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import firebase from '../services/firebase.js';
import Navbar from './navbar.js';
import Card from './card.js';
import '../css/blogs.js.css';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Post from './post';
import Form from './form.js';

export default function Blogs(props)
{
    var [postOpen,setPostOpen]=useState(false);
    var [response,setResponse]=useState([]);
    var [postDpUrl,setPostDpUrl]=useState("assets/dp.png");
    var [postHead,setPostHead]=useState('');
    var [postBody,setPostBody]=useState('');
    var [postAuthor,setPostAuthor]=useState('Abhineet Pandey');
    var [postImgUrl,setPostImgUrl]=useState('');
    var [upvoteText,setUpvoteText]=useState('Upvote');
    var [upvoteStyle,setUpvoteStyle]=useState({});
    var [downvoteText,setDownvoteText]=useState('Downvote');
    var [downvoteStyle,setDownvoteStyle]=useState({});

    var [loading,setLoading]=useState(true);
    var [posting,setPosting]=useState(false);

    var [formOpen,setFormOpen]=useState(false);
    var [name,setName]=useState('');
    var [dpurl,setDpurl]=useState('');
    var [email,setEmail]=useState('');
    var [updating,setUpdating]=useState(false);

    function closeForm()
    {
        setFormOpen(false);
    }
    async function showPost(dpurl,author,head,body,imgurl)
    {
        setUpdating(true);
        console.log("Opening Post...");
        setPostDpUrl(dpurl);
        setPostAuthor(author);
        setPostHead(head);
        setPostBody(body);
        setPostImgUrl(imgurl);
        setPostOpen(true);

        let userdetails=JSON.parse(await localStorage.getItem('@userdetails'));
        let useremail=userdetails.email;
        setEmail(useremail);
        console.log(email);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "email": useremail,
        "text": body
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://hummigo-server.herokuapp.com/blogs/upvote", requestOptions)
        .then(response =>{response.text();setUpdating(false)})
        .then(result =>console.log(result))
        .catch(error =>{console.log('error', error);setUpdating(false)});
    }
    function closePost()
    {
        setUpvoteText('Upvote');
        setUpvoteStyle({});
        setDownvoteText('Downvote');
        setDownvoteStyle({});
        setPostOpen(false);
    }
    async function handleUpvote()
    {
        setUpdating(true);
        if(upvoteText==='Upvote')
        {
            setUpvoteStyle({
                color:'white',
                backgroundColor:'#56ab2f'
            });
            setUpvoteText('Upvoted');

            let userdetails=JSON.parse(await localStorage.getItem('@userdetails'));
            let useremail=userdetails.email;
            setEmail(useremail);
            console.log(email);

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
            "email": email,
            "text": postBody
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://hummigo-server.herokuapp.com/blogs/upvote", requestOptions)
            .then(response =>{response.text();setUpdating(false)})
            .then(result => {
                console.log(result);
                setUpdating(false);
            })
            .catch(error =>{console.log('error', error);setUpdating(false)});
        }
        else
        {
            setUpvoteStyle({});
            setUpvoteText('Upvote');

            let userdetails=JSON.parse(await localStorage.getItem('@userdetails'));
            let useremail=userdetails.email;
            setEmail(useremail);
            console.log(email);

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
            "email": email,
            "text": postBody
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://hummigo-server.herokuapp.com/blogs/downvote", requestOptions)
            .then(response =>{response.text();setUpdating(false)})
            .then(result => {
                console.log(result);
                setUpdating(false);
            })
            .catch(error =>{console.log('error', error);setUpdating(false)});
        }
    }
    async function handleDownvote()
    {
        setUpdating(true);
        if(downvoteText==='Downvote')
        {
            setDownvoteText('Downvoted');
            setDownvoteStyle({
                color:'white',
                backgroundColor:'darkred'
            });

            let userdetails=JSON.parse(await localStorage.getItem('@userdetails'));
            let useremail=userdetails.email;
            setEmail(useremail);
            console.log(email);

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
            "email": email,
            "text": postBody
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://hummigo-server.herokuapp.com/blogs/downvote", requestOptions)
            .then(response =>{response.text();setUpdating(false)})
            .then(result => {
                console.log(result);
                setUpdating(false);
            })
            .catch(error =>{console.log('error', error);setUpdating(false)});
        }
        else
        {
            setDownvoteText('Downvote');
            setDownvoteStyle({});

            let userdetails=JSON.parse(await localStorage.getItem('@userdetails'));
            let useremail=userdetails.email;
            setEmail(useremail);
            console.log(email);

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
            "email": email,
            "text": postBody
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://hummigo-server.herokuapp.com/blogs/upvote", requestOptions)
            .then(response =>{response.text();setUpdating(false)})
            .then(result => {
                console.log(result);
                setUpdating(false);
            })
            .catch(error =>{console.log('error', error);setUpdating(false)});
        }
    }
    function logout()
    {
        firebase.auth().signOut();
        localStorage.removeItem('@userdetails');
        props.history.push("/login");
    }
    async function fetchData()
    {
        let userdetails=JSON.parse(await localStorage.getItem('@userdetails'));
        let email=userdetails.email;

        console.log("Fetching Data")
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var url="https://hummigo-server.herokuapp.com/blogs/view?email="+email;
        console.log(url);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(url, requestOptions)
        .then(response => response.text())
        .then(result=>{
            result=JSON.parse(result);
            setResponse(result);

            let body=(result[0]).text;
            setPostBody(body);
            let head=(result[0]).summary;
            setPostHead(head);
            setLoading(false);
            console.log("Set Response:=\n "+response);
        })
        .catch(error => 
        {
            console.log('error', error);
            setLoading(false);
        });
    }
    useEffect(async()=>{
        let userdetails=JSON.parse(localStorage.getItem('@userdetails'));
        if(userdetails===null)
        {
            props.history.push("/login");   
        }
        else
        {
            fetchData();
            setDpurl(userdetails.dpURL);
            setName(userdetails.name);
        }
    },[])
    return(
    <div>
        <Navbar history={useHistory()}/>
        <Backdrop open={updating} style={{backgroundColor:'lightgray',zIndex:8300,opacity:0.5,color:'#56ab2f'}}>
            <CircularProgress color="inherit" />
        </Backdrop>
        <Backdrop open={loading} style={{backgroundColor:'lightgray',zIndex:900,opacity:0.5,color:'#56ab2f'}}>
            <CircularProgress color="inherit" />
        </Backdrop>
        <div className="imghead">
            <img src="assets/write.jpg" style={{width:"100%",opacity:0.7,zIndex:"-1000"}}/>
            <div id="write" onClick={()=>setFormOpen(true)}>
                <img src="assets/write.png"/>
                <span>Publish your own blogs</span>
            </div>
            <div id="filler"></div>
            <Dialog open={postOpen}>
                <div id="closebtn" onClick={()=>closePost()}>X</div>
                <Post dpurl={postDpUrl} name={postAuthor} body={postBody} head={postHead} imgUrl={postImgUrl}/>
                <div id="arrows">
                    <div id="upvote" style={upvoteStyle} onClick={()=>handleUpvote()}>{upvoteText}</div>
                    <div id="downvote" style={downvoteStyle} onClick={()=>handleDownvote()}>{downvoteText}</div>
                </div>
            </Dialog>
            <Dialog open={formOpen}>
                <div id="closebtn" onClick={()=>closeForm()}>X</div>
                <Form dpurl={dpurl} name={name} context="blogs"/>
            </Dialog>
            <center className="cardcontainer">
                {
                    response.map((item)=>
                    <div onClick={()=>{showPost(item.dpurl,item.name,item.summary,item.text,item.imglink)}}>
                        <Card head={item.summary.substring(0,100)} summary={item.text.substring(0,220)+'...'} name={item.name}
                        imgUrl={item.imglink}></Card>
                    </div>)
                }
            </center>
        </div>
    </div>
    );
}