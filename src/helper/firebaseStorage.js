import React, { useEffect, useState } from "react"
import { database } from "../firebase"
import { addDoc, collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore"



// for users  userId
export const saveUsersId = async (emailRef, userID) => {
    try {
        await setDoc(doc(database, "users", userID), { email: emailRef, product: {} })
    }
    catch (err) {
        console.log(err.message)
    }
}
export const saveUserCart = async (newItem) => {
    try {

        await setDoc(doc(database, "users"), newItem)
    }
    catch (err) {
        console.log(err.message)
    }
}








