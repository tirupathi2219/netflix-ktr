import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { updateUserData } from '../redux/slice/user';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const  user = useSelector((state) => state.user.user )
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUserSignIn = () => {
    signOut(auth).then(() => {
      console.log(":::: sign out successful ")
      dispatch(updateUserData(null))
      navigate('/')
    }).catch((error) => {
      console.log(":::: sign out error  ")

    });
  }
  return (

    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between'>
      <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
  {
    user && 
    <div>
      
    <button onClick={handleUserSignIn} className='bg-sky-600'> Sign out </button>
    </div>
  }  
    </div>
  )
}

export default Header