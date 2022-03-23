import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";


const useFetch = () => {


    

    const [reload, setReload] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const postsCollectionRef = collection(db, "posts")

    const [postList, setPostList] = useState([])



    useEffect(()=>{
        setIsLoading(true)
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            console.log(data);
            console.log(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));
            setPostList(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
            setIsLoading(false)
        };

        getPosts()

    },[reload])

    return {reload, isLoading, setReload, postList}



}
 
export default useFetch;