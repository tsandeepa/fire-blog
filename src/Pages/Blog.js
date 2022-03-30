import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../Components/useFetch";


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
        <div>   

            <h5>Blog - {id}</h5>


            {
                    postList.map((post,i)=>{
                        return(
                            <div key={i}>


                                    {
                                         post.id == id && (

                                           <div className="blog-box">
                                             <h3>{post.title}</h3>
                                                <img style={{width:'100px'}} src={post.coverImg} alt="" /> <br></br>
    
                                                <p>{post.author.name}</p>
                                                <label>{post.category}</label>
    
                                                {/* <button onClick={()=>{deletePost(post.id)}}>Delete</button> */}
                                                
                                           </div>
    
                                        )
                                    }
                                    
                                
                            </div>
                        )
                    })
                }

        </div>
     );
}
 
export default Blog;