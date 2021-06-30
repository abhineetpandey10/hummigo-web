import '../css/video.js.css';
export default function Video()
{
    return(
        <center>
            <a href="https://www.youtube.com/watch?v=JBvfBLCKVJE"  target="_blank">
                <div  className="videoplayer">
                    <img src="assets/playbtn.png" id="playbtn"/>
                </div>
            </a>
            <div className="watch">Watch our video!</div>
        </center>
    )
}