import { useEffect, useRef, useState } from "react"
import { auth } from '../utils/firebase'
import { validation } from "../utils/validation";
import { useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const useLogin = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [error, setError] = useState(null)
    const [isSignUpForm, setIsSignUpForm] = useState(false)
    const [imgUrl, setImgUrl] = useState('https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg')
    const navigate = useNavigate();

   
   
    const handleLogin = () => {
        const message = validation(emailRef, passwordRef)
        setError(message)
        if (message) return;
        if (isSignUpForm) {

            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate('/browser')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode + "-" + errorMessage)
                });
        } else {
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate('/browser')
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
            setImgUrl('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs')
        }

        testImage("https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg");
    }, [])
    return ({
        emailRef,
        passwordRef,
        isSignUpForm,
        setIsSignUpForm,
        error,
        imgUrl,
        handleLogin
    })
}
export default useLogin;