import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../Components/useFetch";
import { auth, db, storage } from "../firebase-config";
import { getDocs, collection, deleteDoc, updateDoc ,doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { async } from "@firebase/util";
import EditPost from "./EditPost";




const MyBlogs = ({isAuth}) => {


    let navigate = useNavigate();

    const [eidState, setEditState] = useState(false)
    const [postId, setPostId] = useState(null)

    const [loadMyBlog, setLoadMyBlog] = useState(false)



    const [title, setTitle] = useState('')
    const [postText, setPostText] = useState('')
    const [category, setCategory] = useState('All')
    const [file, setFile] = useState(null)
    const [progress, setProgress] = useState(0)
    const [coverImg, setCoverImg] = useState(null)


    useEffect(()=>{
        if(!isAuth){
            navigate('/login')
        }
    },[])

    const {reload, isLoading, setReload, postList} = useFetch()

    const deletePost = async (id) =>{
        console.log(id);
        const postDoc = doc(db, "posts", id)
         await deleteDoc(postDoc)   
         setReload(!reload)
    }

    const editPost = async (id) =>{
        setEditState(true)
        console.log(id);
        setPostId(id)
    }
    






  


    return ( 
        <div>
            <h5>My Blogs</h5>

            {isLoading && <div>Loading...</div>}

                {   
                     !eidState && postList.map((post,i)=>{
                        return(
                            <div key={i}>


                                    {

                                        isAuth && post.author.id == auth.currentUser.uid && (

                                           <>
                                             <h3>{post.title}</h3>
                                            <img style={{width:'100px'}} src={post.coverImg} alt="" /> <br></br>
    
                                            <label>{post.author.name}</label>
                                            <br/>
                                            <p>{post.postText}</p>

                                                <button onClick={()=>{deletePost(post.id)}}>Delete</button>
                                                <button onClick={()=>{editPost(post.id)}}>Edit</button>
                                                <br/>
                                                <br/>



                                                
                                           </>
    
                                        )
                                    }
                                    
                                
                            </div>
                        )
                    })
                }

                {
                eidState &&
                <EditPost  eidState={eidState} 
                            setEditState={setEditState} 
                            postId={postId} 
                            postList={postList}
                            setReload={setReload}
                            reload={reload}
                            />
                }

               
        </div>
     );
}
 
export default MyBlogs;