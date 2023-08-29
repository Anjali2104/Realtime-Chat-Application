import '../style.scss'
import Add from '../assets/addAvatar.png'
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth , storage } from '../firebase';
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      // Register three observers:
      uploadTask.on(
        (error) => {
        // Handle unsuccessful uploads
          setErr(true);
        }, 
       () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
          await updateProfile(res.user , {
            displayName,
            photoURL: downloadURL,

          });
          await setDoc(doc(db, "users" , res.user.uid) , {
          uid : res.user.uid,
          displayName,
          email,
          photoURL : downloadURL,
        });
    });
   }
  );
   

    } catch (error) {
      setErr(true)
    }
  
  };

  
  
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>QuickChat</span>
        <span className='title'>Register</span>
       <form onSubmit={handleSubmit}>
         <input type='text' placeholder='Enter Your Name'></input>
         <input type='email' placeholder='Enter Your Email'></input>
         <input type='password' placeholder='Enter Password'></input>
         <input  style={{display:"none"}} type='file' id='file' ></input>
         <label htmlFor='file'>
            <img src={Add}></img>
            <span>Add an avatar</span>
         </label>
         <button>Sign up</button>
         { err && <span>Something went wrong</span>}
       </form>
       <p>Already Registered? Login </p>
      </div>
    </div>
  )
}

export default Register
