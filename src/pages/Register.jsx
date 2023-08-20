import '../style.scss'
import Add from '../assets/addAvatar.png'
const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>QuickChat</span>
        <span className='title'>Register</span>
       <form>
         <input type='text' placeholder='Enter Your Name'></input>
         <input type='email' placeholder='Enter Your Email'></input>
         <input type='password' placeholder='Enter Password'></input>
         <input  style={{display:"none"}} type='file' id='file' ></input>
         <label htmlFor='file'>
            <img src={Add}></img>
            <span>Add an avatar</span>
         </label>
         <button>Sign up</button>
       </form>
       <p>Already Registered? Login </p>
      </div>
    </div>
  )
}

export default Register
