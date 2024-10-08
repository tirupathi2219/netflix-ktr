import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { updateUserData } from '../redux/slice/user';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectLanguage, toggleShowGptSearch } from '../redux/slice/gptSlice';

const Header = () => {
  const  user = useSelector((state) => state.user.user )
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch)
  console.log('10::: user ', user)
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
  useEffect(() =>  {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        
        if (user) {
            console.log("22::")
            dispatch(updateUserData(user))
        } else {
            console.log("20::::  sign out s")
        }
      });
  
      // Cleanup subscription on unmount
      return () => unsubscribe();
},[])
  return (

    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between'>
      <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
  {
    user && 
    <>
    <div>
      <select onChange={(e) => dispatch(selectLanguage(e.target.value))}>
      <option value='En'>English</option>
      <option value='Hi'>hindi</option>
      <option value='Te'>telugu</option>
      </select></div>
    <div >
     <button className='text-white bg-teal-600 ' onClick={() => {
      dispatch(toggleShowGptSearch())
     }}>{showGptSearch ? "GptSearch" : "HomePage" } </button>
    </div>
    <div>
    <img sr={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s`} alt='userImg' />
    <button onClick={handleUserSignIn} className='bg-sky-600'> Sign out </button>
    </div>
    </>
  }  
    </div>
  )
}

export default Header