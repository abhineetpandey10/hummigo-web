import StarRateIcon from '@material-ui/icons/StarRate';
import { useState,useEffect,useRef } from "react";
import firebase from '../services/firebase.js';
import { useHistory } from 'react-router';
import Footer from './footer';
import '../css/download.js.css';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Review from './review.js';
import Navbar from './navbar.js';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function Download(props)
{
    const [color,setColor]=useState(['white','white','white','white','white']);
    const [review,setReview]=useState('');
    const [dialogOpen,setDialogOpen]=useState(false);
    const [dialogText,setDialogText]=useState(true);
    const [reviewArr,setReviewArr]=useState([]);

    var [backdrop,showBackDrop]=useState(false);

    function logout()
    {
        firebase.auth().signOut();
        localStorage.removeItem('@userdetails');
        props.history.push("/");
    }
    function changeColor(val)
    {
        if(val==-1)
        {
            var colorArr=['white','white','white','white','white'];
            setColor(colorArr);
        }
        else
        {
            var colorArr=['white','white','white','white','white'];
            for(var i=0;i<val;i++)
                colorArr[i]='gold';
            setColor(colorArr);
        }
    }
    function checkContent(text)
    {
        if(text.length>255)
        {
            console.log("Maxmimum allowed characters are 255");
        }
        else
        {
            setReview(text);
        }
    }
    async function submitDetails()
    {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var userdetails=await localStorage.getItem('@userdetails');
        userdetails=JSON.parse(userdetails);

        var raw = JSON.stringify(
        {
            "name": userdetails.name,
            "email": userdetails.email,
            "dpurl": userdetails.dpURL,
            "rated": "false",
            "reviewed": "false",
            "rating": 0,
            "review": ""
        });

        var requestOptions = 
        {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://hummigo-testing-server.herokuapp.com/reviews", requestOptions)
        .then(response => {
            response.text();
            getReviews();
        })
        .catch(error => console.log('error', error));
    }
    async function submitRating(val)
    {
        showBackDrop(true);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var userdetails=await localStorage.getItem('@userdetails');
        userdetails=JSON.parse(userdetails);

        var raw = JSON.stringify(
        {
            "email": userdetails.email,
            "rated": "true",
            "rating":val
        });

        var requestOptions = 
        {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://hummigo-testing-server.herokuapp.com/reviews", requestOptions)
        .then(response => 
        {
            //console.log(response.text());
            showBackDrop(false);
            setDialogText("Thank you for rating us");
            setDialogOpen(true);
        })
        .catch(error => {console.log('error', error);showBackDrop(false);});
    }
    async function submitReview()
    {
        showBackDrop(true);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var userdetails=await localStorage.getItem('@userdetails');
        userdetails=JSON.parse(userdetails);

        var raw = JSON.stringify(
        {
            "email": userdetails.email,
            "reviewed": "true",
            "review":review
        });

        var requestOptions = 
        {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://hummigo-testing-server.herokuapp.com/reviews", requestOptions)
        .then(response => 
        {
            //console.log(response.text());
            showBackDrop(false);
            setDialogText("Thank you taking out your time to give your feedback");
            setDialogOpen(true);
        })
        .catch(error => {console.log('error', error);showBackDrop(false);});
    }
    async function getReviews()
    {
        var myHeaders=new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = "";
        console.log("Processing...")

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://hummigo-testing-server.herokuapp.com/reviews", requestOptions)
        .then(response => response.text())
        .then(result => {
            var jsonResult=JSON.parse(result);
            setReviewArr(jsonResult.data);
            //console.log(reviewArr);
        })
        .catch(error => console.log('error', error));
    }
    useEffect(()=>{
        let userdetails=JSON.parse(localStorage.getItem('@userdetails'));
        if(userdetails===null)
        {
            props.history.push("/");
        }
        else
        {
            submitDetails();
        }
    })
    return(
        <div id="downcont">
            <Navbar history={useHistory()}/>
            <Backdrop open={backdrop} style={{zIndex:2000}}>
                <CircularProgress style={{color:"#56ab2f",fontSize:'xx-large'}}/>
            </Backdrop>
            <div><img src="assets/filler.png" /></div>
            <center>
                <div id="thank">
                    Thank you for trying our app
                </div>
                <div id="begin">
                    Click <a href="https://drive.google.com/uc?export=download&confirm=Hq9K&id=1jKXhV1eAHBXlkSVxaSW_QDgDo4eETAFo" target="_blank">
                        here
                    </a> to download the app.
                </div>
                <Dialog open={dialogOpen}>
                    <DialogTitle>
                        <div style={{fontSize:'xx-large',fontWeight:'bolder'}}>{dialogText}</div>
                    </DialogTitle>
                    <div style={{padding:'5px 0px 5px 0px'}}></div>
                    <div id="dialogcontrol" onClick={()=>setDialogOpen(false)}>CLOSE</div>
                </Dialog>
                <div id="rate">
                    Rate this app
                    <div>
                        <StarRateIcon style={{color:color[0]}} id="starrate"  onMouseEnter={()=>changeColor(1)} onMouseLeave={()=>changeColor(-1)} onClick={()=>submitRating(1)}/>
                        <StarRateIcon style={{color:color[1]}} id="starrate"  onMouseEnter={()=>changeColor(2)} onMouseLeave={()=>changeColor(-1)} onClick={()=>submitRating(2)}/>
                        <StarRateIcon style={{color:color[2]}} id="starrate"  onMouseEnter={()=>changeColor(3)} onMouseLeave={()=>changeColor(-1)} onClick={()=>submitRating(3)}/>
                        <StarRateIcon style={{color:color[3]}} id="starrate"  onMouseEnter={()=>changeColor(4)} onMouseLeave={()=>changeColor(-1)} onClick={()=>submitRating(4)}/>
                        <StarRateIcon style={{color:color[4]}} id="starrate"  onMouseEnter={()=>changeColor(5)} onMouseLeave={()=>changeColor(-1)} onClick={()=>submitRating(5)}/>
                    </div>
                </div>
                <div id="rate2">
                    Write a review
                    <div>
                        <textarea onChange={(event)=>checkContent(event.target.value)}></textarea>
                    </div>
                </div>
            </center>
            <div id="submitbtn" onClick={()=>submitReview()}>
                Submit Review
            </div>
            <div id="reviewshead">Reviews</div>
            <div>
            {
                reviewArr.map((item)=>
                    <div>
                        <Review 
                            name={item.name}
                            dpUrl={item.dpurl}
                            review={item.review}
                            rated={item.rating}
                        />
                    </div>
                )
            }
            </div>
            <div style={{padding:'50px 0px 50px 0px'}}></div>
            <Footer />
        </div>
    )
}