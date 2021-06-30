import { BrowserRouter,useHistory,Switch,Route } from "react-router-dom"
import Home from "./Home";
import Blogs from "./blogs";
import Login from "./login";
import Stories from "./stories";
import Partner from "./partner";
import Download from './Download';
import '../css/app.js.css';
export default function App()
{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} history={useHistory()}/>
                <Route path="/blogs" component={Blogs} history={useHistory()} />
                <Route path="/stories" component={Stories} history={useHistory()} />
                <Route path="/login" component={Login}  history={useHistory()}/>
                <Route path="/partners" component={Partner} history={useHistory()}/>
                <Route path="/download" component={Download} history={useHistory()}/>
            </Switch>
        </BrowserRouter>
    )
}