import Header from "./Header"

 const Login = () => {
    return <div>
   <div>
      <Header/>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='bg' />
      </div>
      <div className="absolute">
      <form >
    <input type='text' placeholder='Email Address' className='p-2 m-2'/>
    <input type='password' placeholder='Password' className='p-2 m-2'/>

    </form>
    </div>
    </div>
 }
 export default Login