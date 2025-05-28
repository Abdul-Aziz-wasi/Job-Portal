import React, { useEffect, useState } from 'react';
import { AuthCotext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const googleProvider =new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(null);

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser =(email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password);
    }

    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const signOutUser =()=>{
        setLoading(true)
        return signOut(auth).then()
    }

    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return()=>{
            unSubscribe()
        }
    },[])
    const authInfo ={
        loading,
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser

    }
    return (
        <AuthCotext value={authInfo}>
            {children}


        </AuthCotext>
    );
};

export default AuthProvider;