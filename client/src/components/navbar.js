import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';
import firebase from '../services/firebase.js';
import MenuIcon from '@material-ui/icons/Menu';
import '../css/navbar.js.css';

export default function Navbar(props)
{
    var [dpurl,setDpUrl]=useState('assets/dp.png');
    var [login,setLogin]=useState('');
    function logout()
    {
        firebase.auth().signOut();
        localStorage.removeItem('@userdetails');
        props.history.push("/login");
    }
    useEffect(async()=>{
        let userdetails=localStorage.getItem('@userdetails');
        if(userdetails===null && window.location.href!=='http://localhost:3000/partners'
            && window.location.href!=='http://localhost:3000/' && window.location.href!=='http://localhost:3000'
            && userdetails===null && window.location.href!=='https://hummigo.herokuapp.com/partners'
            && window.location.href!=='https://hummigo.herokuapp.com/' && window.location.href!=='https://hummigo.herokuapp.com')
        {
            props.history.push("/login");
        }
        else if(userdetails!==null)
        {
            userdetails=JSON.parse(userdetails);
            let picurl=userdetails.dpURL;
            console.log(picurl);
            setDpUrl(picurl);
            setLogin('Logout');
        }
        console.log(window.location);
    },[]);
    return(
        <div className="navbar">
            <MenuIcon style={{color:'#56ab2f'}} id="menuicon"/>
            <div>
                <img src="assets/hummigoicon.png"  className="companylogo" style={{marginRight:'5px'}}/>
                <img src="assets/hummigo.png"  className="companyname"/>
            </div>
            <div className="menucontainer">
                <Link to="/" style={{textDecoration:'none'}}><span className="navmenu">Home</span></Link>
                <Link to="/blogs" style={{textDecoration:'none'}}><span className="navmenu">Blogs</span></Link>
                <Link to="/stories" style={{textDecoration:'none'}}><span className="navmenu">Stories</span></Link>
                <Link to="/partners" style={{textDecoration:'none'}}><span className="navmenu">Partners</span></Link>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
                <div id="salutation" onClick={()=>logout()}>{login}</div>
                <img src={dpurl} style={{borderRadius:'100%'}} id="dp"/>
            </div>
        </div>   
    );
}