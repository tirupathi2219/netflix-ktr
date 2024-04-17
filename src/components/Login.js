import { validation } from "../utils/validation"
import Header from "./Header"
import { useRef } from "react"
 const Login = () => {
  const email=useRef(null)
  const password=useRef(null)
 const handleLogin = () => {
   const val = validation(email, password)
   console.log(val)
 }
    return <div>
   <div>
      <Header/>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='bg' />
      </div>
      <div className="absolute bg-sky-900">
      <form onSubmit={(e) => {e.preventDefault()}} >
    <input ref={email} type='text' placeholder='Email Address' className='p-2 m-2'/>
    <input ref={password} type='password' placeholder='Password' className='p-2 m-2'/>
    <button type='submit' onClick={handleLogin}>Submit</button>
    </form>
    </div>
    </div>
 }
 export default Login