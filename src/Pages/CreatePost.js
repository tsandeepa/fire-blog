import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const CraetePost = ({isAuth}) => {

    

    const [title, setTitle] = useState('')
    const [postText, setPostText] = useState('')

    let navigate = useNavigate();

    const postsCollectionRef = collection(db, "posts")

    const createPost = async () =>{
        await addDoc(postsCollectionRef,{title, postText, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid }});
        navigate('/')
    }


    useEffect(()=>{
        if(!isAuth){
            navigate('/login')
        }
    },[])

    return ( 
        <div className="createPost-conatiner">

            <h3>This is create post page</h3>

            <div className="post-box">
                <div className="form-group">
                    <label>Title : {title}</label><br/>
                    <input type="text" placeholder="Title..." onChange={(e)=>{setTitle(e.target.value)}} />
                </div>
                <br/>
                <div className="form-group">
                    <label>Post :{postText} </label><br/>
                    <textarea placeholder="Post" onChange={(e)=>{setPostText(e.target.value)}}></textarea>
                </div>
                <br/>
                <button onClick={createPost}>Submit Post</button>
            </div>
        </div>
     );
}
 
export default CraetePost;