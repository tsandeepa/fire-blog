import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './Pages/Home';
import CraetePost from './Pages/CreatePost';
import Login from './Pages/Login';
import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from "./firebase-config";

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))
  const [userName, setUserName] = useState(localStorage.getItem('userName'))
  // const [isAuth, setIsAuth] = useState(false)

  const signUserOut = () =>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname= './login'
    })
  }
  

  return (
    <Router>
      
      <nav style={{display:'flex', gap:'20px', justifyContent:'center', background:'#ccc', padding:'30px'}}>
        <Link to="/">Home</Link>
        {!isAuth? <Link to="/login">Login</Link>: 
        <>
          <Link to="/create"   >Create</Link>
          <button onClick={signUserOut}>Logout</button>
          <p>{userName}</p>
        </>
        }
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth} setUserName={setUserName}/>} />
        <Route path='/create' element={<CraetePost isAuth={isAuth}/>} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
