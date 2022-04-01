import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";


const useFetch = () => {


    
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [categoryLoaded, setcategoryLoaded] = useState(false);

    const [reload, setReload] = useState(false)
    const [postList, setPostList] = useState([])

    const [isLoading, setIsLoading] = useState(false)
    const postsCollectionRef = collection(db, "posts")
    const categoryCollectionRef = collection(db, "categories")


    // const [postList, setPostList] = useState([])
    const [categoryList, setCategoryList] = useState([])


    const [fillterdCategoryPosts, setFilteredCategoryPosts] = useState(null);


    useEffect(()=>{
        setIsLoading(true)
        // setFilteredCategoryPosts([])
        
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            const dataCategory = await getDocs(categoryCollectionRef);
            
            console.log(data);
            console.log(dataCategory);

            console.log(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));
            setPostList(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));


            if(selectedCategory == 'All'){
                setFilteredCategoryPosts(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
            } else{
                setFilteredCategoryPosts(data.docs.map((doc)=> ({...doc.data(), id: doc.id})).filter((post)=>{
                    return(post?.category == selectedCategory)
                }))
            }
            

            console.log(dataCategory.docs.map((doc)=> ({...doc.data()})));
            console.log(fillterdCategoryPosts);
            setCategoryList(dataCategory.docs.map((doc)=> ({...doc.data()})));

            setcategoryLoaded(true)
            setIsLoading(false)
        };

        getPosts()

    },[selectedCategory, reload])


    

    return {isLoading, categoryLoaded,reload, setReload, postList, categoryList, selectedCategory, setSelectedCategory, fillterdCategoryPosts, setFilteredCategoryPosts}



}
 
export default useFetch;