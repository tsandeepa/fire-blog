import { useEffect, useState } from "react";

import { auth, db, storage } from "../firebase-config";
import { getDocs, collection, deleteDoc, updateDoc ,doc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { async } from "@firebase/util";
import { EditBlog } from "../Components/Styled/EditPost.styled";
import { motion } from "framer-motion";
import { MdOutlineDoDisturbOn } from "react-icons/md";



const EditPost = ({eidState, setEditState, postId, postList, reload, setReload }) => {

    


    const [title, setTitle] = useState('')
    const [postText, setPostText] = useState('')
    const [category, setCategory] = useState('All')
    const [file, setFile] = useState(null)
    const [progress, setProgress] = useState(0)
    const [coverImg, setCoverImg] = useState(null)
    const [editLoading, setEditLoading] = useState(false)
    
    const [upFileName, setupFileName] = useState(null);

    const [submitState, setsubmitState] = useState(false);


    const [editTitle, seteditTitle] = useState();
    

    
    const handleFileInput = (e) => {
        // handle validations
        // onFileSelect(e.target.files[0])
        const upFile = e.target.files[0];
        console.log(upFile);
        setupFileName(upFile.name)
        setFile(upFile)
        
    }



    
    const btnUploadFile = () =>{
        setEditLoading(true)

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
                    setEditLoading(false)

                }) 
            }
        );
    }


    


    const updatePost = async (idPost) =>{
        setEditLoading(true)
        console.log(idPost);
        const postDoc =  doc(db, "posts", idPost)

        await updateDoc(postDoc, {
            title: `${title}`,
            coverImg: `${coverImg}`,
            postText:`${postText}`,
            category:`${category}`,
            upFileName:`${upFileName}`
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
        setCoverImg(editBlog[0]?.coverImg)
        setupFileName(editBlog[0]?.upFileName)

    },[])


    const removeImage = async (idPost) =>{
        setEditLoading(true)

        const fileRef = ref(storage, `/files/${upFileName}`);
        // Delete the file

        const postDoc =  doc(db, "posts", idPost)

        setsubmitState(true)
        deleteObject(fileRef).then(() => {
            // File deleted successfully
            console.log("file Deleted");
            setCoverImg(null);
            setProgress(0)
            setupFileName('')
            setsubmitState(false)

            updateDoc(postDoc, {
                
                upFileName:`${null}`
                
            }).then(()=>{
                console.log('File name updated');
                setEditLoading(false)

            });

        }).catch((error) => {
            // Uh-oh, an error occurred!
            console.log("File error");

        });

    }

  


    return ( 
        <EditBlog>

            <motion.div layout>
                <div className="sub-page-header">
                    <div>
                        <h3>Edit Blog</h3>
                        <label htmlFor="">Edit your blog details here</label>
                    </div>
                    <button className="bt-sm-light" onClick={()=>{setEditState(false)}}>Cancel Edit</button>

                        
                </div>
                <div className="eidt-post">
                    <div>
                        <div className="form-group">

                            <label>Cover Image</label>
                            <div className="upload-input">
                                <div>
                                    <div  className="prg-bar" style={{'width': `${progress}%`}}> <span>{progress !== 0 ? `${progress}%`: ''}</span></div>
                                    
                                    <span>   {coverImg ? 'Remove file to update the image' 
                                    : <span>
                                        { upFileName ? upFileName 
                                        :'Drag or selet a file to upload'
                                        }
                                    </span>  
                                    }</span>
                                    <input  type="file" onChange={handleFileInput}/>

                                </div>
                                {
                                    progress == 100 || coverImg ? 
                                        <span style={{'display':'flex'}}>{!submitState? <button onClick={()=> removeImage(postId)}> <MdOutlineDoDisturbOn /> Remove</button> : <button disabled>Removing..</button>}</span> 
                                    : <span style={{'display':'flex'}}>{upFileName? <button onClick={()=>btnUploadFile()}>Upload image</button>:''}</span> 
                                }
                            </div>

                            <div className="img-prv">
                                { progress == 100 || coverImg ? <img src={coverImg} alt="" /> :''}
                            
                            </div>
                            {/* <label>File</label><br/> */}
                            {/* <button onClick={()=>btnUploadFile()}>Upload</button> <br></br> */}
                            {/* <h3>Progress {progress}%</h3> */}
                        </div>
                        <div className="post-box">
                            <div className="form-group">
                                <label>Title </label><br/>
                                <input type="text" placeholder="Title..."  value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                            </div>
                            <br/>
                            <div className="form-group">
                                <label>Post </label><br/>
                                <textarea placeholder="Post" value={postText}  onChange={(e)=>{setPostText(e.target.value)}}></textarea>
                            </div>

                            <div className="form-group">
                                <label>Category  </label><br/>
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

                    {
                        editLoading ?  <button className="bt-submit">Updating...</button> : 
                                        <button className="bt-submit" onClick={()=>{updatePost(postId)}}>Update</button>
                    }
                    
                </div>
            </motion.div>
            
        </EditBlog>
        
     );
}
 
export default EditPost;