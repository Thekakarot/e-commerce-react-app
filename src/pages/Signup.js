import React, { useState } from 'react'
import { googleLogo } from '../assets'
import { ToastContainer, toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/Firebase';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[confirmPassword, setConfirmPassword] = useState("")
  const navigate = useNavigate()
  // const googleProvider = new GoogleAuthProvider()

  const handleSubmit = async () =>{

    if(password !== confirmPassword){
       toast.error("Passwod do not match");
       setEmail("");
       setPassword("");
       setConfirmPassword("");
       return;
    }

    try{
       const result = await createUserWithEmailAndPassword(auth, email, password);
       toast.success(`Sign Up Successful. Welcome ${result.user.email}`);
      //  console.log(result);
      setTimeout(() => {
        navigate("/login")
      },1000 );
       setEmail("");
       setPassword("");
       setConfirmPassword("");
      

    }catch(error){
      toast.error(error.message);
      setEmail("");
       setPassword("");
       setConfirmPassword("");
      return;
    }

  }

  // const signInWithGoogle = () =>{
  //   signInWithPopup(auth, googleProvider).then((res) =>{
  //     toast.success(`Sign in successful, Welcome ${res.user.email}`);
  //     navigate("/")

  //   }).catch((error) =>
  //   {
  //     toast.error(error.message);
  //   }
  //   )

  // }

  return (
    <div className='flex items-center justify-center mb-10' on="true">

    <div className='w-[40rem]  border-[1.5px] border-black mt-10'>
        <div className='flex flex-col items-center justify-center gap-5'>
            <p className='text-2xl text-bold text-titleFont mt-5'>Sign Up</p>
            <input type="text" placeholder='E-mail' value={email} onChange={(e)=> setEmail(e.target.value)} className='w-[18rem] px-4 py-2 text-sm border-[1px] border-gray-700 rounded-sm duration-300'/>
            <input type="password" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)}  className=' w-[18rem] px-4 py-2 text-sm border-[1px] border-gray-700 rounded-sm duration-300'/>
            <input type="password" placeholder='confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className=' w-[18rem] px-4 py-2 text-sm border-[1px] border-gray-700 rounded-sm duration-300 ' />
            <button onClick={handleSubmit} className='text-sm text-white w-[5rem] px-3 py-2 border-[1px] border-gray-700 bg-black hover:bg-gray-900 rounded-md duration-300 -mt-1.5'>Sign up</button>
        </div>
        <div className='flex items-center justify-center mt-5'>
        <div className='flex gap-2 items-center justify-center  w-[15rem] h-[2.6rem] bg-blue-700 rounded-md border-[1px] border-blue-900 mb-8'>
            <img className='w-8 bg-white rounded-full cursor-pointer' src={googleLogo} alt="googleLogo" /><span className='text-base text-white cursor-pointer'>sign up with google</span>
            
        </div>
        </div> 
        </div>

        <ToastContainer
       position="top-left"
       autoClose = {3000}
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

export default Signup