import { validation } from "../utils/validation"
import Header from "./Header"
import { useEffect, useRef, useState } from "react"
const Login = () => {
  const email = useRef(null)
  const password = useRef(null)
  const [error, setError] = useState(null)
  const [isSignUpForm, setIsSignUpForm] = useState(false)
  const [imgUrl, setImgUrl] = useState('https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg')

  const handleLogin = () => {
    const val = validation(email, password)
    console.log(val)
    setError(val)
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

  return <div className="relative">
    <div>
      <Header />
      <div className=""><img className="w-full" src={imgUrl} alt='background-imag-not-loading' /></div>
    </div>
    <div className="absolute bg-stone-800 top-0">
      {error && <p> {error} </p>}
      <form onSubmit={(e) => { e.preventDefault() }} >
        {isSignUpForm && <input type="text" placeholder="Full Name" className='p-2 m-2 block rounded-md' />}
        <input ref={email} type='text' placeholder='Email Address' className='p-2 m-2 block rounded-md' />
        <input ref={password} type='password' placeholder='Password' className='p-2 m-2 block rounded-md' />
        <button type='submit' className="p-2 m-2 block bg-green-200 rounded-md" onClick={handleLogin}>Submit</button>
        <p className="text-white" onClick={() => { setIsSignUpForm(!isSignUpForm) }}> {isSignUpForm ? "Already Have Account SignIn" : "Dont Have Account SignUp"}</p>
      </form>
    </div>
  </div>
}
export default Login