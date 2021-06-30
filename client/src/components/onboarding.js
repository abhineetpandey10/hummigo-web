import React,{useState} from 'react';
const Onboarding=()=>
{
    const [src,setSrc]=useState("assets/onboard1.svg");
    const [text,setText]=useState(["Share your story",
    "Tell us about your personal experiences and write blogs which can help the community"]);

    const [stepStyles,setStepStyles]=useState([styles.stepper.itemActive,styles.stepper.itemInactive,styles.stepper.itemInactive]);
    
    function setActiveComponent(value)
    {
        if(value===1)
        {
            setSrc("assets/onboard1.svg");
            setStepStyles([styles.stepper.itemActive,styles.stepper.itemInactive,styles.stepper.itemInactive]);
            setText(["Share your story",
            "Tell us about your personal experiences and write blogs which can help the community"])
        }
        else if(value===2)
        {
            setSrc("assets/onboard2.svg");
            setStepStyles([styles.stepper.itemInactive,styles.stepper.itemActive,styles.stepper.itemInactive]);
            setText(["Find nearby services ",
            "Explore the healthcare services near your house and connect with them within a blink"]);
        }
        else if(value===3)
        {
            setSrc("assets/onboard3.svg");
            setStepStyles([styles.stepper.itemInactive,styles.stepper.itemInactive,styles.stepper.itemActive]);
            setText(["Access online facilities","Utilize the recommended online healthcare facilities to track and manage your health records"]);
        }
    }

    
    return(
        <div style={styles.container} className="filler">
            <div>
                <img src={src} style={styles.img}/>
                <center>
                    <div style={{width:'30vw'}}>
                        <div style={styles.heading}>
                            {text[0]}
                        </div>
                        <div style={styles.body}>
                            {text[1]}
                        </div>
                    </div>
                </center>
                <center>
                    <div style={styles.stepper}>
                        <div onClick={()=>setActiveComponent(1)} style={stepStyles[0]}></div>
                        <div onClick={()=>setActiveComponent(2)} style={stepStyles[1]}></div>
                        <div onClick={()=>setActiveComponent(3)} style={stepStyles[2]}></div>
                    </div>
                </center>
            </div>
        </div>
    )
}

let styles={
    container: {
        width:'50vw',
        height:'100vh',
        backgroundColor:'ivory'
    },
    img: {
        height:'50vh',
        width:'50vw',
        marginTop:'4vh'
    },
    stepper: {
        display:'flex',
        width:'15vw',
        position:'relative',
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:'9%',
        itemActive : {
            backgroundColor:'#56ab2f',
            paddingTop:'0.5vh',
            paddingBottom:'0.5vh',
            paddingLeft:'2.5vw',
            paddingRight:'2.5vw',
            borderRadius:2,
            margin:2,
            cursor:'pointer'
        },
        itemInactive: {
            backgroundColor:'#a8e063',
            paddingTop:'0.5vh',
            paddingBottom:'0.5vh',
            paddingLeft:'2.5vw',
            paddingRight:'2.5vw',
            borderRadius:2,
            margin:3,
            cursor:'pointer'
        }
    },
    heading: {
        fontSize:'xx-large',
        fontWeight:'bold',
        color:'#00a000',
        marginTop:'2vh'
    },
    body: {
        fontSize:'large',
        color:'#90ab20',
        marginTop:'3.5vh'
    }
}

export default Onboarding;