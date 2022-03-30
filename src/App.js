import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './Pages/Home';
import CraetePost from './Pages/CreatePost';
import Login from './Pages/Login';
import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from "./firebase-config";
import MyBlogs from './Pages/MyBlogs';
import Blog from './Pages/Blog';
import Header from './Components/Header';

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
      
      
      <Header isAuth={isAuth} signUserOut={signUserOut} userName={userName}/>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth} setUserName={setUserName}/>} />
        <Route path='/create' element={<CraetePost isAuth={isAuth}/>} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        <Route path='/myblogs' element={<MyBlogs isAuth={isAuth} />} />
        <Route path='/blog/:id' element={<Blog isAuth={isAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
