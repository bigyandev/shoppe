import React, { useEffect, useState } from "react"
import { database } from "../firebase"
import { collection, doc, getDocs,setDoc, updateDoc } from "firebase/firestore"



const usercollectionRef = collection(database, "users")
export const getUsers = async () => {
    try {
        const data = await getDocs(usercollectionRef)
        console.log(data)
        console.log("accessed")
    }
    catch (err) {
        console.log(err)
    }
}
// for users data and userId
export const saveUsersId =  (emailRef,currentUser) => {
    try {
        return  setDoc(doc(database, "users"), {email:emailRef})
    }
    catch (err) {
        console.log(err)
    }
}









