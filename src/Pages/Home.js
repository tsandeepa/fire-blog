import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { async } from "@firebase/util";


const Home = ({isAuth, setUserName}) => {

    const [postList, setPostList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const postsCollectionRef = collection(db, "posts")
    const [reload, setReload] = useState(false)

    
    setUserName(localStorage.getItem('userName'))

    useEffect(()=>{
        setIsLoading(true)
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            console.log(data.docs.map((doc)=> ({...doc.data()})));
            setPostList(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
            setIsLoading(false)
        };

        getPosts()

    },[reload])

    const deletePost = async (id) =>{
        console.log(id);
        const postDoc = doc(db, "posts",id)
         await deleteDoc(postDoc)   
         setReload(!reload)
    }
    console.log(isAuth);
    return ( 
        <div style={{width:'500px', margin:'0 auto', background:'#ccf', padding:'30px'}}>
            <h1>This is home</h1>

            <div>
                <h2>Post List</h2>
                <br/>
                {isLoading && <div>Loading...</div>}

                {
                    postList.map((post,i)=>{
                        return(
                            <div key={i}>
                                <h3>{post.title}</h3>
                                <label>{post.author.name}</label>
                                <label>{post.author.name}</label>

                                {
                                    isAuth && post.author.id == auth.currentUser.uid && (
                                        <button onClick={()=>{deletePost(post.id)}}>Delete</button>
                                    )
                                }
                                <br/>
                                <br/>
                            </div>
                        )
                    })
                }

            </div>
        </div>
     );
}
 
export default Home;