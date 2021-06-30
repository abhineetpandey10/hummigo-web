import {useState,useEffect} from 'react';
import '../css/form.js.css';
import PublishIcon from '@material-ui/icons/Publish';
import Backdrop from '@material-ui/core/Backdrop';
import Dialog from '@material-ui/core/Dialog';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function PartnerForm(props)
{
    var [name,setName]=useState('');
    var [address,setAddress]=useState('');
    var [email,setEmail]=useState('');
    var [no,setNo]=useState('');
    var [msg,setMsg]=useState('');

    var [posting,setPosting]=useState(false);
    var [dialog,showDialog]=useState(false);
    var [backdrop,showBackDrop]=useState(false);
    function apply()
    {
        if(name==='' || address==='' || email==='' || no==='' || msg==='')
        {
            document.getElementById("partnerhandling").innerHTML="Please fill in all the details";
        }
        else
        {
            showBackDrop(true);
            setInterval(()=>{
                showBackDrop(false);
                document.getElementById("partnerhandling").innerHTML="";
                showDialog(true);
            },3000)
        }
    }
    
    return(
        <div className="form" style={{overflowY:'scroll'}}>
            <Backdrop open={backdrop} style={{zIndex:2000}}>
                <CircularProgress style={{color:"#56ab2f",fontSize:'xx-large'}}/>
            </Backdrop>
            <Dialog open={dialog}>
                <center style={{color:'#2f4f4f',fontWeight:'bolder',fontSize:'xx-large',padding:'10px'}}>   
                    Application successfully Submitted
                </center>
                <div style={{padding:'20px'}}>
                    We have received your application and it is currently under review. You will be contacted by our
                    team within a week, to tell you about the status of your application and exploring areas of 
                    possible partnerships between our organisations.
                </div>
                <div style={{marginLeft:"80%",padding:'10px',fontWeight:'bold',color:'steelblue',cursor:'pointer'}}
                onClick={()=>{showDialog(false);window.location.reload()}}>CLOSE</div>
            </Dialog>
            <Backdrop open={posting} style={{backgroundColor:'lightgray',zIndex:900,opacity:0.5,color:'#56ab2f'}}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <center><h2 style={{color:'#2f4f4f'}}>Partnership Proposal Form</h2></center>
            <div id="subheading">Organisation Name:</div>
            <input type="text" placeholder="Enter officially registered name of the Organisation" onChange={(event)=>{setName(event.target.value)}}></input>
            <div id="subheading">Address:</div>
            <textarea onChange={(event)=>{setAddress(event.target.value)}} placeholder="
            Enter Official Address of the Organisation"></textarea>
            <div id="subheading">Official Email Address of the Organisation:</div>
            <input type="text" placeholder="Enter Email address" onChange={(event)=>{setEmail(event.target.value)}}></input>
            {/**<center style={{margin:'10px 0px 10px 0px'}}><h3 style={{color:'steelblue'}}>OR</h3></center>
            <input type="file" hidden id="imgupload"/>
            <center><label htmlFor="imgupload" id="uploadbtn">Upload file</label></center>**/}
            <div id="subheading">Contact Number</div>
            <input type="text" placeholder="Enter Contact Number of the Organisation" onChange={(event)=>{setNo(event.target.value)}}></input>
            <div id="subheading">Message:</div>
            <textarea onChange={(event)=>{setMsg(event.target.value)}} placeholder="
            Tell Us about your organisation and the healthcare services you provide"></textarea>
            <div id="partnerhandling" style={{margin:'5px 0px 5px 0px',color:'red'}}></div>
            <div id="submitbtn" onClick={()=>apply()}>
                <PublishIcon style={{marginBottom:'-5px'}}/>
                Apply
            </div>
        </div>
    )
}