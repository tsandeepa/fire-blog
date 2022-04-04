import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogView } from "../Components/Styled/BlogView.styled";
import useFetch from "../Components/useFetch";
import { motion } from "framer-motion";



const Blog = ({isAuth}) => {

    const {id} = useParams()


    let navigate = useNavigate();
 
    // useEffect(()=>{
    //     if(!isAuth){
    //         navigate('/login')
    //     }
    // },[])

    const {postList} = useFetch()


    return ( 
        <BlogView>   

            {/* <h5>Blog - {id}</h5> */}


            {
                    postList.map((post,i)=>{
                        return(
                            <div key={i}>
                                {
                                    post.id == id && (
                                    <motion.div className="blog-box"
                                        initial={{opacity:0, y:20}}
                                        animate={{opacity:1, y:0}}
                                    >
                                        <h3 className="pc-title">{post.title}</h3>
                                        <label className="date-stamp">{post.timestamp}</label>
                                        
                                        <img className="pc-image" src={post.coverImg} alt="" /> <br></br>

                                        <label className="blog-category">
                                            <label className="blog-category">  {post.category !== 'All'? <span className={`cat-${post.category}`}>{post.category}</span> : <span className="hide"></span> }   </label>
                                        </label>
                                        <p className="pc-paragraph">{post.postText}</p>
                                        <div className="blog-foot">
                                            <p className="blog-author"><span>{post.author?.name.slice(0,1)}</span>{post.author?.name}</p>
                                        </div>
                                        {/* <button onClick={()=>{deletePost(post.id)}}>Delete</button> */}
                                    </motion.div>
                                    )
                                }
                            </div>
                        )
                    })
            }

        </BlogView>
     );
}
 
export default Blog;