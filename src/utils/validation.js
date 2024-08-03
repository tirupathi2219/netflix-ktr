export const validation = (email, password) => {
    const emailVal = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email.current.value)
    const passwordVal = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\W]{8,}$/.test(password.current.value)
    if(!emailVal) return 'Email not valid';
    if(!passwordVal) return "Password not valid"
    return null
}