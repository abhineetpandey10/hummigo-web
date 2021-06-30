import Onboarding from './onboarding.js';
import LoginForm from './loginform.js';
import { useHistory } from 'react-router';
const Login=()=>
{
    let styles={
        container: {
            display:'flex',
            flexFirection:'row'
        }
    }
    return(
        <div style={styles.container}>
            <Onboarding/>
            <LoginForm history={useHistory()}/>
        </div>
    )
}
export default Login;