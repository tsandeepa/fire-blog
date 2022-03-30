import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { async } from "@firebase/util";
import useFetch from "../Components/useFetch";
import { Link } from "react-router-dom";
import { Blog } from "../Components/Styled/Blog.styled";
import { Bloglist } from "../Components/Styled/Bloglist.styled";
import { HomeMain } from "../Components/Styled/Home.Styled";


const Home = ({isAuth, setUserName}) => {

    const [reload, setReload] = useState(false)


    // const [isLoading, setIsLoading] = useState(false)
    // const postsCollectionRef = collection(db, "posts")


    const {isLoading, categoryList, selectedCategory, setSelectedCategory,fillterdCategoryPosts, setFilteredCategoryPosts} = useFetch()
    setUserName(localStorage.getItem('userName'))
    // const [fillterdCategoryPosts, setFilteredCategoryPosts] = useState(null);

    // useEffect(()=>{
    //     setIsLoading(true)
    //     const getPosts = async () => {
    //         const data = await getDocs(postsCollectionRef);
    //         console.log(data);
    //         console.log(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));
    //         setPostList(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
    //         setIsLoading(false)
    //     };

    //     getPosts()

    // },[reload])



    const deletePost = (id) =>{
        console.log(id);
        const postDoc = doc(db, "posts",id)
        deleteDoc(postDoc)   
         setReload(!reload)
    }
    // console.log(isAuth);

    const filterCategory = (category) =>{
        console.log(category);
        setSelectedCategory(category)

        
        // if(category == "All"){
        //     console.log('All Clicked');
        //     setSelectedCategory('All')
        //     setFilteredCategoryPosts(postList)
        //     // setPostList(postList)
        //     // setReload(!reload)

        // }else{
        //     setSelectedCategory(category)

        //     // setFilteredCategoryPosts(
        //     //     fillterdCategoryPosts.filter((post)=>{
        //     //         return(
        //     //             post.category == category
        //     //         )
        //     //     })
        //     // )
        // }

        // console.log(fillterdCategoryPosts);
    }

   
    

    return ( 
        <HomeMain>
            <h1>This is home</h1>
            
            <div>
                <h2>Post List</h2>
                <br/>
                {isLoading && <div>Loading...</div>}

                <div className="category-tabs">
                    {
                        categoryList.map((list,i)=>{
                            return(
                                <div key={i} onClick={(e)=>{filterCategory(e.target.innerHTML)}}>
                                    <label htmlFor="">{list.category}</label>
                                </div>
                            )
                        })
                    }
                </div>

                <Bloglist>

                {
                    fillterdCategoryPosts && fillterdCategoryPosts.sort((a,b)=> b.timestampOrder - a.timestampOrder).map((post,i)=>{
                        return(


                            <Blog key={i}>
                                <Link to={`/blog/${post.id}`}>
                                    

                                    <h3 className="blog-cover-title">{post.title}</h3>
                                    <img className="blog-cover-img" src={post.coverImg} alt="" /> 
                                    <p className="blog-author">{post.author?.name}</p>
                                    <label className="blog-category">{post.category}</label>
                                    <p className="blog-text-prv">{post.postText}</p>
                                    {/* {
                                        isAuth && post.author?.id == auth.currentUser?.uid && (
                                            <button onClick={()=>{deletePost(post.id)}}>Delete</button>
                                        )
                                    } */}
                                    <p className="blog-timestamp">{post.timestamp}</p>

                                </Link>    
                            </Blog>
                        )
                    })
                }
            </Bloglist>
            </div>
        </HomeMain>
     );
}
 
export default Home;