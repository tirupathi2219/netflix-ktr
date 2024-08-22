import React from "react"
import Header from "./Header"
import useLogin from "../hooks/useLogin"
const Login = () => {
  const { emailRef,
    passwordRef,
    isSignUpForm,
    setIsSignUpForm,
    error,
    imgUrl,
    handleLogin } = useLogin()

  return <div className="relative">
    <div className="absolute -z-2">
    <Header />
      <img src={imgUrl} alt='bg' className=" w-screen" />
      <form onSubmit={(e) => { e.preventDefault() }} className="absolute top-0 w-3/12 absolute my-36 mx-auto left-0 right-0 bg-black text-center bg-opacity-80 px-2">
      <h1 className="text-white">{isSignUpForm ? 'Sign Up' : 'Sign In'}</h1>
      {error && <p className="text-white"> {error} </p>}
      {isSignUpForm && <input type="text" placeholder="Full Name" className='p-2 my-2  block rounded-md text-white bg-gray-800 w-full' />}
      <div className="w-full"><input ref={emailRef} type='text' placeholder='Email Address' className='p-2 my-2 box-border block rounded-md text-white bg-gray-800 w-full' /></div>
      <div className="w-full"><input ref={passwordRef} type='password' placeholder='Password' className='p-2 my-2 block box-border rounded-md text-white bg-gray-800 w-full' /></div>
      <div className="w-4/12 mx-auto">
        <button type='submit' className="p-2 bg-red-800 w-full rounded-md my-2" onClick={handleLogin}>Submit</button>
      </div>
      <p className="text-white cursor-pointer m-2.5" onClick={() => { setIsSignUpForm(!isSignUpForm) }}> {isSignUpForm ? "Already Have Account SignIn" : "Dont Have Account SignUp"}</p>
    </form>
    </div>


  </div>
}
export default Login;