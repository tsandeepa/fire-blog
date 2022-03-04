import { auth, prover } from "../firebase-config";
import { signInWithPopup } from 'firebase/auth';
import { useState } from "react";

const Login = ({setIsAuth}) => {

    const [userName, setUserName] = useState('')

    const signInWithGoogle = () =>{
        signInWithPopup(auth, prover).then((result)=>{
            console.log(result);
            setUserName(result.user.displayName)
            localStorage.setItem("isAuth",true);
            localStorage.setItem("userName",result.user.displayName);
            setIsAuth(true)
        })
    }

    return ( 
        <div>
            <h2>This is login</h2>

            <p>Pleas sign in with google</p>
            <button onClick={signInWithGoogle} >Sign In</button>

            <p>User is : <span>{userName}</span></p>
        </div>
     );
}
 
export default Login;