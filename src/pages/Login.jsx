import '../style.scss'
import Add from '../assets/addAvatar.png'
const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>QuickChat</span>
        <span className='title'>Login</span>
       <form>

         <input type='email' placeholder='Enter Your Email'></input>
         <input type='password' placeholder='Enter Password'></input>
        
       
         <button>Sign in</button>
       </form>
       <p>Don't have an account? register </p>
      </div>
    </div>
  )
}

export default Login
