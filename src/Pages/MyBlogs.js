import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../Components/useFetch";
import { auth, db, storage } from "../firebase-config";
import { getDocs, collection, deleteDoc, updateDoc ,doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { async } from "@firebase/util";
import EditPost from "./EditPost";
import { MyBlogsCustom } from "../Components/Styled/MyBlogs.styled";
import { motion } from "framer-motion";
import { BiTrashAlt, BiEditAlt } from "react-icons/bi";





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
    
    const variants = {
        hidden: { opacity: 0, scale:0.8, y:-10},
        visible: i =>(
            { 
                opacity: 1,
                scale:1,
                y:0,
                transition:{
                    type: "easeIn",
                    delay: i * 0.04,
                } 
            }
        )
      }





  
      const mybShadowLoading = ['','','','','','']

    return ( 
        <MyBlogsCustom>
            <div>
                    {   !eidState &&
                        <div className="sub-page-header">
                            <div>
                                <h3>My Blogs</h3>
                                <label>All your blogs are listed here</label>
                            </div>
                        </div>
                    }



                    {   isLoading &&
                        mybShadowLoading.map((element,i)=>(
                            <div className="myb-loading" key={i}>
                                <div className="myb-img"></div>
                                <div className="myb-content">
                                    <div>
                                        <div className="myb-title"></div>
                                        <div className="myb-paragraph"></div>
                                    </div>
                                    <span className="myb-time"></span>
                                </div>
                            </div>
                        ))
                    }
                    

                    {   
                        !eidState && postList.map((post,i)=>{
                            return(
                                <div key={i} className="my-blogs">


                                        {

                                            isAuth && post.author?.id == auth.currentUser.uid && (

                                            <motion.div 
                                                custom={i}
                                                initial="hidden"
                                                animate="visible"
                                                variants={variants}
                                            >
                                                <div className="my-blog-li">
                                                    <div className="mb-img">
                                                        <img src={post.coverImg} alt="" /> <br></br>
                                                    </div>
                                                    <div className="mb-content">
                                                        <div>
                                                            <h3>{post.title}</h3>
                                                            {/* <label>{post.author.name}</label> */}
                                                            <p className="mb-p1">{post.postText}</p>
                                                        </div>
                                                        <p className="mb-p2">{post.timestamp}</p>
                                                        <div className="mb-li-opt">
                                                            <motion.button 
                                                                whileHover={{ scale: 1.1}}
                                                            title="Delete" onClick={()=>{deletePost(post.id)}}> <BiTrashAlt/></motion.button>
                                                            <motion.button 
                                                                whileHover={{ scale: 1.1}}
                                                            title="Edit" onClick={()=>{editPost(post.id)}}><BiEditAlt/></motion.button>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                
                                            </motion.div>
        
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
        </MyBlogsCustom>
        
     );
}
 
export default MyBlogs;