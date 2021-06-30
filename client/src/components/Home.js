import {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import firebase from '../services/firebase.js';
import Navbar from './navbar.js';
import Card2 from './Card2.js';
import FeaturedReviews from './featuredreviews';
import Footer from './footer';
import Header from './header';
import Video from './video'
import '../css/app.js.css';

export default function Home(props)
{
    const [avgRating,setAvgRating]=useState('...');
    const [totalreviews,setTotalReviews]=useState('...');
    const [totaldownloads,setTotalDownloads]=useState('...');
    const [featured1,setFeatured1]=useState('...');
    const [featured2,setFeatured2]=useState('...');
    async function getAggregates()
    {
      console.log("Processing...");
      var myHeaders=new Headers();

      var requestOptions = {
        method: 'GET',
        headers:myHeaders,
        redirect: 'follow'
      };

      fetch("https://hummigo-testing-server.herokuapp.com/aggregate", requestOptions)
      .then(response => response.text())
      .then(result =>
      {
        //console.log(result);
        result=JSON.parse(result);
        setAvgRating(result.avgrating);
        setTotalReviews(result.totalreviews);
        setTotalDownloads(result.totaldownloads);
        setFeatured1(result.featured[0]);
        setFeatured2(result.featured[1])
      })
      .catch(error => console.log('error', error));
    }
    useEffect(()=>{
      getAggregates();
    },[])
    function logout()
    {
        firebase.auth().signOut();
        localStorage.removeItem('@userdetails');
        props.history.push("/login");
    }
    useEffect(async()=>{
        let userdetails=localStorage.getItem('@userdetails');
        if(userdetails===null)
        {
            //props.history.push("/login");
        }
    },[])
    return(
    <div>
        <Navbar history={useHistory()}/>
        <Header history={useHistory()}/>
        <div id="download">Download the Official <span>h</span><span>ummigo</span> app now!</div>
        <div id="downloaddesc">Be one of the first few users to get an early access to the app.</div>
        <center className="cardcontainer1">
            <Card2 head={avgRating || '...'} body="average rating on a scale of 0 to 5"/>
            <Card2 head={totaldownloads || '...'} body="users who tested this app"/>
            <Card2 head={totalreviews || '...'} body="user reviews about our app"/>
        </center>
        <center className="mobcontainer">
            <div><img src="assets/mobile.png" style={{maxWidth:'80vw',marginTop:'-6vh'}}/></div>
            <div id="mobdata">
            <div id="mobhead">An app for everyone...</div>
            <div id="mobtxt">who want to live a healthier, happier life by following a healthy routine and adopting an healthy lifestyle</div>
            </div>
        </center>
        <Video/>
        <h1 id="mobhead">Featured Reviews</h1>
        <div className="featuredcont">
            <FeaturedReviews dpUrl={featured1.dpurl || 'assets/dp.png'} 
            name={featured1.name ||  '...'}  rated={featured1.rating ||  '...'}
            review={featured1.review ||  '...'} />
            <FeaturedReviews dpUrl={featured2.dpurl || 'assets/dp.png'} 
            name={featured2.name || '...'}  rated={featured2.rating || '...'}
            review={featured2.review || '...'} />
        </div>
        <div style={{padding:'50px 0px 50px 0px'}}></div>
        <Footer/>
    </div>
    );
}