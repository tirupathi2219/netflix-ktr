import { signOut } from 'firebase/auth'
import React,{useEffect} from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'




const Header = () => {
  const user = useSelector((state) => state.user )
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSignOut = () => 
  {
    signOut(auth).then(() => {
      //  navigate('/')
    })
    .catch((error) => {
      navigate('error')
    })
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user
        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
      } else {
      dispatch(removeUser())
      }
    });
  }, [])
  return (
      <div className='absolute px-8 py-2 bg-gradient-to-b from-black flex justify-between w-full '>
    
        <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>
    {user && 
    <div>
      <span>{user?.displayName}</span>
    <button onClick={handleSignOut}>SignOut </button>
  </div>}
    
    </div>
  )
}

export default Header