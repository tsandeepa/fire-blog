import { useEffect, useState } from "react";

import { auth, db, storage } from "../firebase-config";
import { getDocs, collection, deleteDoc, updateDoc ,doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";


const EditPost = ({eidState, setEditState, postId }) => {

    


    const [title, setTitle] = useState('')
    const [postText, setPostText] = useState('')
    const [category, setCategory] = useState('All')
    const [file, setFile] = useState(null)
    const [progress, setProgress] = useState(0)
    const [coverImg, setCoverImg] = useState(null)
    const [editLoading, setEditLoading] = useState(false)

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
        });
        setEditLoading(false)
        setEditState(false)
    }



    return ( 
        <div>
            <h3>Edit post - {postId}</h3>
            <div className="eidt-post">
                <div>
                    <div className="form-group">
                        <label>File</label><br/>
                        <input  type="file" onChange={handleFileInput}/>
                        <button onClick={()=>btnUploadFile()}>Upload</button> <br></br>
                        <h3>Progress {progress}%</h3>
                    </div>
                    <div className="post-box">
                        <div className="form-group">
                            <label>Title : {title}</label><br/>
                            <input type="text" placeholder="Title..." onChange={(e)=>{setTitle(e.target.value)}} />
                        </div>
                        <br/>
                        <div className="form-group">
                            <label>Post :{postText} </label><br/>
                            <textarea placeholder="Post" onChange={(e)=>{setPostText(e.target.value)}}></textarea>
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