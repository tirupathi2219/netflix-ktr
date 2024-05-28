import React,{useEffect} from "react"
import { validation } from "../utils/validation";
import Header from "./Header"
import { useRef, useState} from "react"
import {auth} from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"
const Login = () => {
  const email = useRef(null)
  const password = useRef(null)
  const [error, setError] = useState(null)
  const [isSignUpForm, setIsSignUpForm] = useState(false)
  const [imgUrl, setImgUrl] = useState('https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg')
const navigate= useNavigate()
  const handleLogin = () => {
    const message = validation(email, password)
    setError(message)
    if(message) return;
    if(isSignUpForm) {

createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
// console.log('23:::', auth)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode + "-" + errorMessage)
    // ..
  });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/browser')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }

    //sign in/ sign up
  }
  useEffect(() => {
    function testImage(URL) {
      var tester = new Image();
      tester.src = URL;
      tester.onerror = imageNotFound;
      tester.onload = imageFound;
    }

    function imageFound() {
      setImgUrl('https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg')
    }

    function imageNotFound() {
      setImgUrl('https://media.istockphoto.com/id/1155516052/photo/marble-colorful-neon-wave-pattern-prism-glitch-effect-abstract-background-dark-purple-blue.jpg?s=612x612&w=0&k=20&c=XSndCJ22AnUB2GJNNGk5Ee0WB1LLPxWEjr0z6PKNRqc=')

    }

    testImage("https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg");
  }, [])
  return <div className="">
    <Header />
    <div className="absolute">
      <img src={imgUrl} alt='bg' />
    </div>
    
    <form onSubmit={(e) => { e.preventDefault() }} className=" w-4/12 absolute my-36 mx-auto left-0 right-0 bg-black text-center bg-opacity-80">
      <h1 className="text-white">{isSignUpForm ? 'Sign Up' : 'Sign In'}</h1>
      {error && <p className="text-white"> {error} </p>}
      {isSignUpForm && <input type="text" placeholder="Full Name" className='p-2 m-2 block rounded-md text-white bg-gray-800 w-full' />}
      <input ref={email} type='text' placeholder='Email Address' className='p-2 m-2 block rounded-md text-white bg-gray-800 w-full' />
      <input ref={password} type='password' placeholder='Password' className='p-2 m-2 block rounded-md text-white bg-gray-800 w-full ' />
      <div>
        <button type='submit' className="p-2 bg-red-800 w-full rounded-md" onClick={handleLogin}>Submit</button>
      </div>
      <p className="text-white" onClick={() => { setIsSignUpForm(!isSignUpForm) }}> {isSignUpForm ? "Already Have Account SignIn" : "Dont Have Account SignUp"}</p>
    </form>
  </div>
}
export default Login