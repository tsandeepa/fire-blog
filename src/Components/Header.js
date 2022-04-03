import { Link } from "react-router-dom";
import {Navbar} from "./Styled/Header.styled"
import { BiLogInCircle , BiAdjust, BiMessageSquareDetail, BiChat} from "react-icons/bi";
import { motion } from "framer-motion";


const Header = ({isAuth, signUserOut, userName, handleTheme}) => {

    


    return ( 
      <Navbar>
        <div className="h-opt">
          <BiChat/>
          <h1> REACT BLOGS</h1>
          
        </div>
        <div className="nav-opt">
            <Link to="/">POSTS</Link>
            {!isAuth? 
              <Link to="/login">LOGIN</Link>: 
              <>
                <Link to="/myblogs">MY BLOGS</Link>
                <motion.div className="btn-create-post"
                  whileHover={{scale:1.05}}
                  whileTap={{scale:0.9}}
                >
                  <Link to="/create" > <BiMessageSquareDetail/> Write</Link>
                </motion.div>
                
                <div className="logged-user">
                  <p>{userName}</p>
                  <motion.button title="Logout" onClick={signUserOut}
                    whileHover={{
                      scale: 1.09,
                    }}
                  ><BiLogInCircle/> </motion.button>
                  
                </div>
                
              </>
            }
            <motion.button title="Theme" className="bt-theme" onClick={()=>handleTheme()}
                      whileHover={{
                        scale: 1.09,
                      }}
                      whileTap={{ scale: 0.8 }}
            > <BiAdjust/> </motion.button>
        </div>
        
      </Navbar>
     );
}
 
export default Header;