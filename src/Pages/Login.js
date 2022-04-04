import { auth, prover } from "../firebase-config";
import { signInWithPopup } from 'firebase/auth';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { BlogLogin } from "../Components/Styled/Login.styled";
import { BiChat } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";



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
        <BlogLogin>
            <motion.div className="log-box"
                initial={{scale:0.3, y:50}}
                animate={{scale:1, y:0}}
            >
                <div className="site-pref">
                    <BiChat className="site-logo"/>
                </div>
                <h2>REACT BLOGS</h2>
                <p className="slogan">Sign in with your google account to start writing  <br/> your awsome content</p>
                <motion.button 
                    whileTap={{scale:0.9}}
                className="google-login" onClick={signInWithGoogle}> <FcGoogle className="fc-google"/> Sign In  </motion.button>
            </motion.div>
            {/* <p>User is : <span>{userName}</span></p> */}
        </BlogLogin>
     );
}
 
export default Login;