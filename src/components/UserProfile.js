import React, { useState } from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import { ephoto } from '../assets';
import { FaAngleDown } from "react-icons/fa6";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/Firebase';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/bazarSlice';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {

  const dispatch = useDispatch();
  const { user } = useUserAuth();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const logout = () =>{
    signOut(auth);
    setTimeout(() => {
      navigate("/");
    }, 1000);
    dispatch(removeUser());
    toast.success("Logout Successful");
  }

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onClick={handleMouseLeave}
        
      >
        {user.photoURL === null ? (
          <img className="w-8" src={ephoto} alt="" />
        ) : (
          <img
            className="w-8 rounded-full"
            src={user.photoURL}
            alt={user.displayName || user.email}
          />
        )}
        <span>
          <FaAngleDown className="mt-3 ml-1" />
        </span>
      </div>

      {isHovered && (
        <div className="w-[10rem] h-fit absolute top-10 -left-10 border-[1px] bg-white border-gray-400 shadow-md p-2 rounded" onMouseLeave={handleMouseLeave}>
          <ul className='space-y-1 '>
            <li className='text-gray-700 hover:text-black border-[1px] border-b-black cursor-pointer'>{user.displayName || user.email}</li>
            {/* Add other options like orders */}
            <div>
            <li className='text-gray-700 hover:text-black mt-3 border-[1px] border-b-black cursor-pointer'>Orders</li>
            <li className='text-gray-700 hover:text-black mt-3 font-semibold cursor-pointer' onClick={logout}>Logout</li>
            </div>
          </ul>
        </div>
      )}
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
  );
};

export default UserProfile;
