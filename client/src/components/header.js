import {useState,useEffect} from 'react'
import firebase from '../services/firebase.js';
import { useHistory } from 'react-router';
import '../css/header.js.css';

export default function Header(props)
{
    const [user,setUser]=useState();
    function login()
    {
        let userdetails=JSON.parse(localStorage.getItem('@userdetails'));
        if(userdetails!==null)
        {
            console.log("Already Logged In");
            props.history.push("/download");
        }
        else
        {
            console.log("Loggin In...");
            var provider=new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
            .then((result=>{
                //console.log(result.user);
                setUser(result.user);
                let userdetails={
                    name: result.user.displayName,
                    email: result.user.email,
                    uid: result.user.uid,
                    dpURL: result.user.photoURL
                }
                localStorage.setItem('@userdetails',JSON.stringify(userdetails));
                props.history.push("/download");
            }))
            .catch((error)=>{
                console.log(error.code);
                console.log(error.message);
            });
        }
    }

    useEffect(()=>{
        let userdetails=JSON.parse(localStorage.getItem('@userdetails'));
        //console.log(userdetails);
    },[]);

    return(
        <div className="container">
            <div id="headtext">
                <div id="h">
                    h<span id="ummigo">ummigo</span>
                </div>
                <div id="desc">
                    The only app you'll ever need for <span id="selfcare">Self-care</span>
                </div>
                <div id="installbtn" onClick={()=>login()}>
                    Test and give reviews
                </div>
            </div>
            <div><img src="assets/hummigoss2.png" className="filler" style={{marginTop:'20vh',marginBottom:'-30vh'}}/></div>
        </div>
    );
}