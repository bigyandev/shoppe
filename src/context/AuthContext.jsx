import React, { createContext, useContext, useState, useEffect } from "react"
import { auth } from "../firebase"

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [currentUser, setcurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const signUp = (emailRef, passwordRef) => {
        return auth.createUserWithEmailAndPassword(emailRef, passwordRef)
    }
    const logIn = (emailRef, passwordRef) => {
        return auth.signInWithEmailAndPassword(emailRef, passwordRef)
    }
    const signOut = () => {
        return auth.signOut()
    }
    

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setcurrentUser(user)
            setLoading(false)
          
        });
          return unsubscribe;
    },[])


    return <AuthContext.Provider value={{ currentUser,signUp, logIn, signOut}}>
        {!loading && children}
    </AuthContext.Provider>
}
export const useAuth = () => {
    return useContext(AuthContext)
}