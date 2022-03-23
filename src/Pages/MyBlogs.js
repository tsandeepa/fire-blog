import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../Components/useFetch";
import { auth, db } from "../firebase-config";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";



const MyBlogs = ({isAuth}) => {


    let navigate = useNavigate();
 
    useEffect(()=>{
        if(!isAuth){
            navigate('/login')
        }
    },[])

    const {reload, isLoading, setReload, postList} = useFetch()

    const deletePost = async (id) =>{
        console.log(id);
        const postDoc = doc(db, "posts",id)
         await deleteDoc(postDoc)   
         setReload(!reload)
    }


    return ( 
        <div>
            <h5>My Blogs</h5>

            {isLoading && <div>Loading...</div>}

                {
                    postList.map((post,i)=>{
                        return(
                            <div key={i}>


                                    {
                                        isAuth && post.author.id == auth.currentUser.uid && (

                                           <>
                                             <h3>{post.title}</h3>
                                            <img style={{width:'100px'}} src={post.coverImg} alt="" /> <br></br>
    
                                            <label>{post.author.name}</label>
    
                                                <button onClick={()=>{deletePost(post.id)}}>Delete</button>
                                                <br/>
                                                <br/>
                                           </>
    
                                        )
                                    }
                                    
                                
                            </div>
                        )
                    })
                }
        </div>
     );
}
 
export default MyBlogs;