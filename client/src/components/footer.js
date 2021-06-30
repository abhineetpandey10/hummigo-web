import '../css/footer.js.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
export default function Footer()
{
    return(
    <div className="footer">
        <center><img src="assets/logofull.png"/></center>
        <center id="footerdiv">
            <div style={{color:'white',fontSize:'xx-large',textAlign:"center",marginBottom:'30px'}}>Connect with us on:</div>
            <a href="https://www.linkedin.com/company/hummigo/" target="_blank">
                <LinkedInIcon style={{fontSize:'50px',color:'white',marginRight:'20px',cursor:'pointer'}}/>
            </a>
            <a href="https://www.facebook.com/groups/461115598350024" target="_blank">
                <FacebookIcon style={{fontSize:'50px',color:'white',marginRight:'20px',cursor:'pointer'}}/>
            </a>
            <a href="mailto:hummigo@hotmail.com" target="_blank">
                <EmailIcon style={{fontSize:'50px',color:'white',marginRight:'20px',cursor:'pointer'}}/>
            </a>
        </center>
    </div>
    );
}