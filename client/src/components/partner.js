import { useState,useEffect } from "react";
import { useHistory } from "react-router"
import Navbar from "./navbar"
import '../css/partner.js.css';
import Footer from './footer';
import PartnerForm from "./partnerform";
import Dialog from '@material-ui/core/Dialog';
export default function Partner(props)
{

    var [displayForm,setDisplayForm]=useState(false);
    var [color,setColor]=useState('gray');

    return(
        <div className="partner">
            <Navbar history={useHistory()}/>
            <Dialog open={displayForm}>
                <div style={{marginLeft:'93%',transform:'translateY(10px)',fontWeight:'bolder',fontSize:'x-large'
                ,color:color,cursor:'pointer'}} onMouseEnter={()=>setColor('lightsteelblue')} onMouseLeave={()=>setColor('gray')}
                onClick={()=>setDisplayForm(false)}>X</div>
                <PartnerForm/>
            </Dialog>
            <div style={{backgroundColor:'black'}}>
                <img src="assets/partnership.jpg" style={{width:"100%",zIndex:"-1000",opacity:0.5}}/>
            </div>
            <div style={{maxWidth:'80vw',marginLeft:'10vw'}}>
                <center id="explore">Explore the full potential of your buisness</center>
                <div id="explore2">Make your services reach a larger audience through <span id="h">h</span>
                <span id="ummigo">ummigo</span></div>
                <center id="apply" onClick={()=>setDisplayForm(true)}>
                    Apply for partnership
                </center>
            </div>
            <center id="why">Why Partner with Us?</center>
            <div className="a1">
                <div className="a11">
                    <div id="reach">Increased Reach</div>
                    <div id="reachdesc"><span id="h">h</span><span id="ummigo">ummigo</span>
                    's Map based services interface enhances the reach of your organization by recommending your organization and its 
                    services to our users on the global healthcare services Map.</div>
                </div>
                <center><img src="assets/services.png"/></center>
            </div>
            <div className="a2">
                <center>
                    <img src="assets/money.png" style={{maxWidth:'70vw'}}/>
                    <div className="a21">
                        <span style={{color:'#2f4f4f',fontWeight:'bolder'}}>
                            5.2 Billion USD
                        </span>
                        &nbsp; is the expected size of online home healthcare market of India in 2019.
                    </div>
                    <div className="a22">By partnering with us, you get to witness tremendous growth of your organization
                    by tapping into this market
                    </div>
                </center>
            </div>
            <div className="a3">
                <div className="a31">
                    <center><img src="assets/ease.jpeg"/></center>
                    <center><h1>Ease</h1></center>
                    <center style={{padding:'4px'}}>You just need to provide one healthcare service and fill out one 
                        online application to apply for partnership</center>
                </div>
                <div className="a31">
                    <center><img src="assets/transparency.png"/></center>
                    <center><h1>Transparency</h1></center>
                    <center style={{padding:'4px'}}>Equal opportunity for all healthcare service providers to grow online
                    </center>
                </div>
            </div>
            <div style={{backgroundColor:'black'}}>
                <img src="assets/mission.png" style={{width:"100%",zIndex:"-1000",opacity:0.5}}/>
            </div>
            <div style={{maxWidth:'80vw',marginLeft:'10vw'}}>
                <center id="explore">Join us in our mission against lifestyle diseases</center>
                <center><div id="explore2" style={{color:'white',marginTop:'40px'}}>Become a part of  the change to create a healthier, 
                    happier and brighter future</div></center>
            </div>
            <div id="closer"></div>
            <Footer/>
        </div>
    )
}