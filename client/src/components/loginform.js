import {useState,useEffect} from 'react';
import firebase from '../services/firebase.js';

const LoginForm=(props)=>
{
    const [buttonStyle,setButtonStyle]=useState(styles.button);
    const [user,setUser]=useState();
    function login()
    {
        console.log("Loggin In...")
        var provider=new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result=>
        {
            console.log(result.user);
            setUser(result.user);
            let userdetails={
                name: result.user.displayName,
                email: result.user.email,
                uid: result.user.uid,
                dpURL: result.user.photoURL
            }
            localStorage.setItem('@userdetails',JSON.stringify(userdetails));
            props.history.push("/");
    
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(
            {
                "name": result.user.displayName,
                "email": result.user.email,
                "dpurl": result.user.photoURL
            });

            var requestOptions = 
            {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://hummigo-server.herokuapp.com/adduser", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }))
        .catch((error)=>
        {
            console.log(error.code);
            console.log(error.message);
        });
    }

    useEffect(()=>{
        let userdetails=JSON.parse(localStorage.getItem('@userdetails'));
        //console.log(userdetails);
        if(userdetails!==null)
        {
            props.history.push("/");
        }
    },[]);

    return(
        <div style={styles.container}>
            <center>
                <div style={styles.heading}>Sign In to Hummigo</div>
            </center>
            <center>
                <div><img style={styles.img} src="assets/hummigoicon.png"/></div>
            </center>
            <center>
                <div style={styles.text} className="linedText">
                    To access this website, you must be signed in
                </div>
            </center>
            <center>
                <div style={buttonStyle} 
                    onMouseEnter={()=>{setButtonStyle(styles.buttonActive)}} 
                    onMouseLeave={()=>{setButtonStyle(styles.button)}}
                    onClick={()=>{login();}}>
                    <img src="assets/googleicon.png" style={{objectFit:'cover',height:25,width:25,marginRight:15}}/>
                    <div style={{paddingTop:2}}>Sign In with Google</div>
                </div>
            </center>
        </div>
    )
}

let styles={
    container: {
        display:'flex',
        flexDirection:'column',
        width:'100%',
        height:'100vh',
        backgroundColor:'rgb(245,255,245)'
    },
    heading:{
        fontSize:45,
        fontWeight:'bolder',
        color:'#088002',
        paddingTop:'8vh'
    },
    img: {
        objectFit:'cover',
        height:'35%',
        width:'35%',
        marginTop:'5vh'
    },
    button: {
        backgroundColor:'white',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignContent:'center',
        width:'fit-content',
        color:'rgb(100,100,100)',
        borderRadius:4,
        boxShadow:'0px 0px 5px lightgray',
        fontSize:'large',
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:20,
        paddingRight:20,
        cursor:'pointer'
    },
    buttonActive: {
        backgroundColor:'white',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignContent:'center',
        width:'fit-content',
        color:'rgb(100,100,100)',
        borderRadius:4,
        boxShadow:'0px 0px 10px lightgray',
        fontSize:'large',
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:20,
        paddingRight:20,
        cursor:'pointer'
    },
    text: {
        color:'gray',
        fontSize:'medium',
        width:'60%',
        paddingTop:'7vh',
        paddingBottom:'8vh'
    }
    
}

export default LoginForm;