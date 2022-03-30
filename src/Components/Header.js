import { Link } from "react-router-dom";
import {Navbar} from "./Styled/Header.styled"

const Header = ({isAuth, signUserOut, userName, handleTheme}) => {

    


    return ( 
      <Navbar>
        <Link to="/">Home</Link>
        {!isAuth? 
          <Link to="/login">Login</Link>: 
          <>
            <Link to="/create">Create</Link>
            <Link to="/myblogs">My Blogs</Link>
            <button onClick={signUserOut}>Logout</button>
            <p>{userName}</p>
          </>
        }
        <button onClick={()=>handleTheme()}>Theme </button>
      </Navbar>
     );
}
 
export default Header;