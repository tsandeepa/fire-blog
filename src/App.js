import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './Pages/Home';
import CraetePost from './Pages/CreatePost';
import Login from './Pages/Login';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from "./firebase-config";

function App() {

  const [isAuth, setIsAuth] = useState(false)

  const signUserOut = () =>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname= './login'
    })
  }

  return (
    <Router>
      
      <nav style={{display:'flex', gap:'20px', justifyContent:'center'}}>
        <Link to="/">Home</Link>
        <Link to="/create">About</Link>
        {!isAuth? <Link to="/login">Login</Link>: <button onClick={signUserOut}>Logout</button>}
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<CraetePost/>} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
