import React, { useState } from 'react'
import { googleLogo } from '../assets'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/Firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/bazarSlice';
// import { useUserAuth } from '../context/UserAuthContext';


const Login = () => {
  
  const dispatch = useDispatch();
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  // const {user} = useUserAuth()
  const navigate = useNavigate()
  const googleProvider = new GoogleAuthProvider()

  const handleSubmit = async () =>{
    if(!email || !password){
      toast.error("Please Fill all the fields");
      setEmail("");
      setPassword("");
      return;
    }

    try {

      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success(`Login Successful. Welcome ${result.user.email}`);
      dispatch(addUser({
        _id : result.user.uid,
        name : result.user.displayName,
        email : result.user.email,
        image : result.user.photoURL
      }))
       setTimeout(() => {
        navigate("/");
       }, 1000);
      console.log(result);
      setEmail("");
      setPassword("");
      
      
    } catch (error) {
      toast.error(error.message);
      setEmail("");
      setPassword("");
      return;
      
    }
  }

  const signInWithGoogle = () =>{
    signInWithPopup(auth, googleProvider).then((res) =>{
      toast.success(`Sign in successful, Welcome ${res.user.email}`);
      dispatch(addUser({
        _id : res.user.uid,
        name : res.user.displayName,
        email : res.user.email,
        image : res.user.photoURL
      }))
      setTimeout(() => {
         navigate("/");
      }, 1000);
    }).catch((error) =>
    {
      toast.error(error.message);
    }
    )

  }
  return (
   
    <div className='w-full flex items-center justify-center mb-10'>
    <div className='w-[40rem]  border-[1.5px] border-black mt-10'>
        <div className='flex flex-col items-center justify-center gap-5'>
            <p className='text-2xl mt-5 text-titleFont'>Login</p>
            <input type="text" placeholder='E-mail' value={email} onChange={(e)=> setEmail(e.target.value)} className='w-[18rem] px-4 py-2 text-sm border-[1px] border-gray-700 rounded-sm duration-300'/>
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className=' w-[18rem] px-4 py-2 text-sm border-[1px] border-gray-700 rounded-sm duration-300'/>
            <button onClick={handleSubmit} className='text-sm text-white w-[5rem] px-3 py-2 border-[1px] border-gray-700 bg-black hover:bg-gray-900 rounded-md duration-300 -mt-1.5'>Login</button>
        </div>
        <div className='flex items-center justify-center mt-5'>
        <div className='flex gap-2 items-center justify-center  w-[15rem] h-[2.6rem] bg-blue-700 rounded-md border-[1px] border-blue-900 mb-8' onClick={signInWithGoogle}>
            <img className='w-8 bg-white rounded-full cursor-pointer' src={googleLogo} alt="googleLogo" /><span className='text-base text-white cursor-pointer'>sign up with google</span>
            
        </div>
        </div>
        <div className='flex items-center justify-center -mt-7 mb-5'>
        <p className='text-sm'>Don't have a accoount? <Link to="/signup"><span className='text-sm font-semibold underline duration-300'>sign up</span></Link></p>
        </div>
        
        </div>
        <ToastContainer
       position="top-left"
       autoClose = {2000}
       hideProgressBar = {false}
       newestOnTop ={false}
       closeOnClick
       rtl = {false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme='dark'
      />
    </div>
    
  )
}

export default Login 