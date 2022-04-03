import { useEffect, useRef, useState } from "react";
import { addDoc, collection, serverTimestamp  } from "firebase/firestore";
import { db, auth, storage } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { CreateBlog } from "../Components/Styled/CreateBlog.styled";
import { motion } from "framer-motion";
import { MdOutlineDoDisturbOn } from "react-icons/md";


const CraetePost = ({isAuth}) => {

    let timestampOrder = new Date().getTime();
    let timestamp = new Date().toDateString().slice(4);

    const [title, setTitle] = useState('')
    const [postText, setPostText] = useState('')
    const [category, setCategory] = useState('All')
    const [file, setFile] = useState(null)
    const [progress, setProgress] = useState(0)
    const [coverImg, setCoverImg] = useState(null)

    const [upFileName, setupFileName] = useState(null);

    const [submitState, setsubmitState] = useState(false);

    let navigate = useNavigate();

    const postsCollectionRef = collection(db, "posts")

    const createPost = async () =>{
        setsubmitState(true)
        await addDoc(postsCollectionRef,{timestamp, timestampOrder, title, postText, coverImg, category,upFileName,author: {name: auth.currentUser.displayName, id: auth.currentUser.uid }});
        setsubmitState(false)
        navigate('/')
    }

    


    useEffect(()=>{
        if(!isAuth){
            navigate('/login')
        }
    },[])
    const inpFileRef = useRef(null)
    const fileHandler = (e) =>{
        // const file = e.target[0].files[0];
        console.log(inpFileRef.current);
    }


    const handleFileInput = (e) => {
        // handle validations
        // onFileSelect(e.target.files[0])
        const upFile = e.target.files[0];
        console.log(upFile);
        setupFileName(upFile.name)
        setFile(upFile)
        
    }

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

    const removeImage = (coverImg) =>{
        const fileRef = ref(storage, `/files/${upFileName}`);
        // Delete the file
        setsubmitState(true)
        deleteObject(fileRef).then(() => {
            // File deleted successfully
            console.log("file Deleted");
            setCoverImg(null);
            setProgress(0)
            setupFileName('')
            setsubmitState(false)
        }).catch((error) => {
            // Uh-oh, an error occurred!
            console.log("File error");

        });

    }
    return ( 
        <CreateBlog>
            <motion.div layout>
                <div className="sub-page-header">
                    <div>
                        <h3>Create Blog</h3>
                        <label>Add your blog details here</label>
                    </div>
                    
                </div>
                <div className="form-group ">
                        <label>Cover Image</label>
                        <div className="upload-input">
                            <div>
                                <div  className="prg-bar" style={{'width': `${progress}%`}}> <span>{progress !== 0 ? `${progress}%`: ''}</span></div>

                                <span>   {upFileName ? upFileName : 'Drag or selet a file to upload' }</span>
                                <input type="file" onChange={handleFileInput}/>
                            </div>
                            {
                                progress == 100? 
                                    <span style={{'display':'flex'}}>{!submitState? <button onClick={()=> removeImage()}> <MdOutlineDoDisturbOn /> Remove</button> : <button disabled>Removing..</button>}</span> 
                                : <span style={{'display':'flex'}}>{upFileName? <button onClick={()=>btnUploadFile()}>Upload image</button>:''}</span> 
                            }
                        </div>

                        <div className="img-prv">
                            { progress == 100 ? <img src={coverImg} alt="" /> :''}
                            {/* {   progress > 0 ?
                                <div className={`img-loading ${ progress == 100 ? 'hide' : ''}`} >
                                    <span>Loading image preview...</span>
                                </div> :''
                            } */}
                        </div>
                        
                </div>
                <div className="post-box">
                    <div className="form-group">
                        <label>Title </label>
                        <input type="text" placeholder="Title..." onChange={(e)=>{setTitle(e.target.value)}} />
                    </div>
                    <br/>
                    <div className="form-group">
                        <label>Post description  </label>
                        <textarea placeholder="Post" onChange={(e)=>{setPostText(e.target.value)}}></textarea>
                    </div>

                    
                    <div className="form-group">
                        <label>Category</label>
                        <select
                            value={category}
                            onChange={(e)=>setCategory(e.target.value)}
                        >
                                <option>All</option>
                                <option>Tech</option>
                                <option>Lifestyle</option>
                                <option>Sports</option>
                                <option>Entertainment</option>
                                <option>Other</option>
                        </select>
                    </div>


                    
                    <br/>
                    { !submitState ? <button className="bt-submit" onClick={createPost}>Submit Post</button>
                    :  <button className="bt-submit sb-disabled" disabled>Submiting..</button>
                    }
                </div>
            </motion.div>
            
        </CreateBlog>
     );
}
 
export default CraetePost;