import { useEffect, useRef, useState } from "react";
import { addDoc, collection, serverTimestamp  } from "firebase/firestore";
import { db, auth, storage } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const CraetePost = ({isAuth}) => {

    let timestampOrder = new Date().getTime();
    let timestamp = new Date().toDateString().slice(4);

    const [title, setTitle] = useState('')
    const [postText, setPostText] = useState('')
    const [category, setCategory] = useState('All')
    const [file, setFile] = useState(null)
    const [progress, setProgress] = useState(0)
    const [coverImg, setCoverImg] = useState(null)

    let navigate = useNavigate();

    const postsCollectionRef = collection(db, "posts")

    const createPost = async () =>{
        await addDoc(postsCollectionRef,{timestamp, timestampOrder, title, postText, coverImg, category,author: {name: auth.currentUser.displayName, id: auth.currentUser.uid }});
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
    return ( 
        <div className="createPost-conatiner">

            <h3>This is create post page</h3>
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
                <button onClick={createPost}>Submit Post</button>
            </div>
        </div>
     );
}
 
export default CraetePost;