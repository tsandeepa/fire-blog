import { useEffect, useState } from "react";

import { auth, db, storage } from "../firebase-config";
import { getDocs, collection, deleteDoc, updateDoc ,doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { async } from "@firebase/util";


const EditPost = ({eidState, setEditState, postId, postList, reload, setReload }) => {

    


    const [title, setTitle] = useState('')
    const [postText, setPostText] = useState('')
    const [category, setCategory] = useState('All')
    const [file, setFile] = useState(null)
    const [progress, setProgress] = useState(0)
    const [coverImg, setCoverImg] = useState(null)
    const [editLoading, setEditLoading] = useState(false)
    

    const [editTitle, seteditTitle] = useState();
    

    




    
    const btnUploadFile = () =>{
        console.log(file);
        if(!file) return

        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadtask = uploadBytesResumable(storageRef, file);
        uploadtask.on("state_changed", (snapshot) =>{
            const prog = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes)*100
            );
            setProgress(prog)
        }, 
            (err) => console.log(err),
            ()=>{
                getDownloadURL(uploadtask.snapshot.ref).then(url => {
                    setCoverImg(url)
                    console.log(url)
                }) 
            }
        );
    }


    const handleFileInput = (e) => {
        // handle validations
        // onFileSelect(e.target.files[0])
        const upFile = e.target.files[0];
        setFile(upFile)
    }


    const updatePost = async (idPost) =>{
        setEditLoading(true)
        console.log(idPost);
        const postDoc =  doc(db, "posts", idPost)

        await updateDoc(postDoc, {
            title: `${title}`,
            coverImg: `${coverImg}`,
            postText:`${postText}`,
            category:`${category}`

        });
        setEditLoading(false)
        setEditState(false)
        setReload(!reload)
    }



    useEffect(async ()=>{

        const editBlog = await postList.filter(post => post.id == postId )
        console.log(editBlog);

        setTitle(editBlog[0].title)
        setPostText(editBlog[0].postText)
        setCategory(editBlog[0].category)
        setCoverImg(editBlog[0].coverImg)

    },[])




    return ( 
        <div>

           
            <h3>Edit post - {postId}</h3>
            <div className="eidt-post">
                <div>
                    <div className="form-group">
                        <img src={coverImg} style={{'width':'200px'}} alt="" />
                        <label>File</label><br/>
                        <input  type="file" onChange={handleFileInput}/>
                        <button onClick={()=>btnUploadFile()}>Upload</button> <br></br>
                        <h3>Progress {progress}%</h3>
                    </div>
                    <div className="post-box">
                        <div className="form-group">
                            <label>Title : {title}</label><br/>
                            <input type="text" placeholder="Title..."  value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                        </div>
                        <br/>
                        <div className="form-group">
                            <label>Post :{postText} </label><br/>
                            <textarea placeholder="Post" value={postText}  onChange={(e)=>{setPostText(e.target.value)}}></textarea>
                        </div>

                        <div className="form-group">
                            <label>Category :{category} </label><br/>
                            <select
                                value={category}
                                onChange={(e)=>setCategory(e.target.value)}
                            >
                                    {/* <option>Uncategorized</option> */}
                                    <option>Tech</option>
                                    <option>Lifestyle</option>
                                    <option>Sports</option>
                                    <option>Entertainment</option>
                                    <option>Other</option>
                            </select>
                        </div>

                        <br/>
                    </div>
                </div>
                <button onClick={()=>{setEditState(false)}}>Cancel Edit</button>

                {
                    editLoading ?  <button>Updating...</button> : 
                                    <button onClick={()=>{updatePost(postId)}}>Update</button>
                }
                
            </div>
        </div>
     );
}
 
export default EditPost;