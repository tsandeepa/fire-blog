import { useEffect, useRef, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { async } from "@firebase/util";
import useFetch from "../Components/useFetch";
import { Link } from "react-router-dom";
import { Blog } from "../Components/Styled/Blog.styled";
import { Bloglist } from "../Components/Styled/Bloglist.styled";
import { HomeMain } from "../Components/Styled/Home.Styled";
import { motion } from "framer-motion";


const Home = ({isAuth, setUserName}) => {

    const [reload, setReload] = useState(false)


    // const [isLoading, setIsLoading] = useState(false)
    // const postsCollectionRef = collection(db, "posts")


    const {isLoading, categoryLoaded, categoryList, selectedCategory, setSelectedCategory,fillterdCategoryPosts, setFilteredCategoryPosts} = useFetch()
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


    const catTabs = useRef(null)

    const filterCategory = (category,e) =>{
        console.log(category,e);
        setSelectedCategory(category)
        console.log(catTabs.current);
        const catLbls =  catTabs.current.querySelectorAll('label');
        console.log(catLbls);
        catLbls.forEach(lbl => {
            if(lbl.innerHTML == category){
                lbl.classList.add('active')
            } else{
                lbl.classList.remove('active')
            }
        });
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

   
    const variants = {
        hidden: { opacity: 0, scale:0.8},
        visible: i =>(
            { 
                opacity: 1,
                scale:1,
                transition:{
                    type: "easeIn",
                    delay: i * 0.1,
                } 
            }
        )
      }

      useEffect( async () => {
        const catLbls = await catTabs.current?.querySelectorAll('label');
        console.log('cat acc'+catLbls);
        catLbls && catLbls.forEach(lbl => {
            if(lbl.innerHTML == 'All'){
                lbl.classList.add('active')
                return
            }
        });  
      }, [categoryLoaded]);

      let loadBlocks = ['','','','','','',]

    return ( 
        <HomeMain>
            
            
            <div>
                <br/>
                <div className="cat-contain">
                    <motion.div 
                        drag="x" 
                        dragConstraints={{ left: -300, right: 0 }}
                    className="category-tabs" ref={catTabs}>
                        {
                            categoryList.map((list,i)=>{
                                return(
                                    <div key={i} onClick={(e)=>{filterCategory(e.target.innerHTML, e)}}>
                                        <label>{list.category}</label>
                                    </div>
                                )
                            })
                        }
                    </motion.div>
                </div>
                


                {/* {isLoading && <div style={{"position": "absolute"}}>Loading...</div>} */}
                <div className="loading-blogs">
                    
                    {   isLoading &&
                        loadBlocks.map((element,i)=>(
                            <div className="lb-block" key={i}>
                                <div className="lb_title">
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className="lb_image"></div>
                                <div className="lb_category"></div>
                                <div className="lb_postText">
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className="lb_user_date">
                                    <div className="lb_user">
                                        <div className="lbu_img"></div>
                                        <div className="lb_name"></div>
                                    </div>
                                    <div className="lb_date"></div>
                                </div>
                            </div>
                        ))
                    }
                
                </div>


                <Bloglist>

                {
                    fillterdCategoryPosts && fillterdCategoryPosts.sort((a,b)=> b.timestampOrder - a.timestampOrder).map((post,i)=>{
                        return(


                            <Blog key={i}>
                                <Link to={`/blog/${post.id}`}>
                                    <motion.div 
                                        custom={i}
                                        initial="hidden"
                                        animate="visible"
                                        variants={variants}
                                    >
                                        <h3 className="blog-cover-title">{post.title}</h3>
                                        <img className="blog-cover-img" src={post.coverImg} alt="" /> 
                                        <label className="blog-category">  {post.category !== 'All'? <span className={`cat-${post.category}`}>{post.category}</span> : <span className="hide"></span> }   </label>
                                        <p className="blog-text-prv">{post.postText}</p>
                                    </motion.div>
                                    

                                    
                                    {/* {
                                        isAuth && post.author?.id == auth.currentUser?.uid && (
                                            <button onClick={()=>{deletePost(post.id)}}>Delete</button>
                                        )
                                    } */}
                                    <div className="bg-foot">
                                        <p className="blog-author"><span>{post.author?.name.slice(0,1)}</span>{post.author?.name}</p>
                                        <p className="blog-timestamp">{post.timestamp}</p>
                                    </div>
                                    



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