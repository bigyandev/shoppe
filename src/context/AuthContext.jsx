import React, { createContext, useContext,useState,useEffect } from "react"
import { auth } from "../firebase"

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [currentUser, setcurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    console.log(currentUser)
    const signUp = (emailRef, passwordRef) => {
        return auth.createUserWithEmailAndPassword(emailRef, passwordRef)
    }
    const logIn = (emailRef,passwordRef) => {
        return auth.signInWithEmailAndPassword(emailRef,passwordRef)
    }
    const signOut = () => {
        return auth.signOut()
    }
    const userId = () => {
      return currentUser.uid;
    }
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setcurrentUser(user)
            setLoading(false)
        })
    })
    return <AuthContext.Provider value={{ currentUser, signUp,logIn,signOut,userId }}>
        {!loading && children}
    </AuthContext.Provider>
}
export const useAuth = () => {
    return useContext(AuthContext)
}