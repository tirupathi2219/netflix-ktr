import { validation } from "../utils/validation"
import Header from "./Header"
import { useRef, useState } from "react"
const Login = () => {
  const email = useRef(null)
  const password = useRef(null)
  const [error, setError] = useState(null)
  const [isSignUpForm, setIsSignUpForm] = useState(false)
  const handleLogin = () => {
    const val = validation(email, password)
    console.log(val)
    setError(val)
  }
  return <div className="">
    <Header />
    <div className="absolute">
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='bg' />
    </div>
    
    <form onSubmit={(e) => { e.preventDefault() }} className=" w-4/12 absolute my-36 mx-auto left-0 right-0 bg-black text-center bg-opacity-80">
      <h1 className="text-white">{isSignUpForm ? 'Sign Up' : 'Sign In'}</h1>
      {error && <p> {error} </p>}
      {isSignUpForm && <input type="text" placeholder="Full Name" className='p-2 m-2 block rounded-md bg-gray-800 w-full' />}
      <input ref={email} type='text' placeholder='Email Address' className='p-2 m-2 block rounded-md bg-gray-800 w-full' />
      <input ref={password} type='password' placeholder='Password' className='p-2 m-2 block rounded-md bg-gray-800 w-full ' />
      <div>
        <button type='submit' className="p-2 bg-red-800 w-full rounded-md" onClick={handleLogin}>Submit</button>
      </div>
      <p className="text-white" onClick={() => { setIsSignUpForm(!isSignUpForm) }}> {isSignUpForm ? "Already Have Account SignIn" : "Dont Have Account SignUp"}</p>
    </form>
  </div>
}
export default Login