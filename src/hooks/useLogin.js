import { useEffect, useRef, useState } from "react"
import { auth } from '../utils/firebase'
import { validation } from "../utils/validation";
import { useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {BG_IMG_URL, BACKUP_BG_IMG} from "../utils/constants"

const useLogin = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [error, setError] = useState(null)
    const [isSignUpForm, setIsSignUpForm] = useState(false)
    const [imgUrl, setImgUrl] = useState(BG_IMG_URL)
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
                    setError(errorCode + "-" + errorMessage)
                });
        }

        //sign in/ sign up
    }
    const handleResetPassword = () => {

    }
    useEffect(() => {
        function testImage(URL) {
            var tester = new Image();
            tester.src = URL;
            tester.onerror = imageNotFound;
            tester.onload = imageFound;
        }

        function imageFound() {
            setImgUrl(BG_IMG_URL)
        }

        function imageNotFound() {
            setImgUrl(BACKUP_BG_IMG)
        }

        testImage(BG_IMG_URL);
    }, [])
    return ({
        emailRef,
        passwordRef,
        isSignUpForm,
        setIsSignUpForm,
        error,
        imgUrl,
        handleLogin,
        handleResetPassword
    })
}
export default useLogin;