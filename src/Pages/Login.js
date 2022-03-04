import { auth, prover } from "../firebase-config";
import { signInWithPopup } from 'firebase/auth';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuth}) => {

    const [userName, setUserName] = useState('')

    let navigate = useNavigate();

    const signInWithGoogle = () =>{
        signInWithPopup(auth, prover).then((result)=>{
            console.log(result);
            setUserName(result.user.displayName)
            localStorage.setItem("isAuth",true);
            localStorage.setItem("userName",result.user.displayName);
            setIsAuth(true)
            navigate('/')
        })
    }

    return ( 
        <div style={{width:'500px', margin:'0 auto', background:'#ccf', padding:'30px'}}>
            <h2>This is login</h2>

            <p>Pleas sign in with google</p>
            <button onClick={signInWithGoogle} >Sign In</button>

            {/* <p>User is : <span>{userName}</span></p> */}
        </div>
     );
}
 
export default Login;