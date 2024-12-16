import React, { useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { AuthContext } from './AuthContext';


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)

    }
 

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscrib = onAuthStateChanged(auth, currentUser =>{
            setLoading(false)
            console.log(currentUser)
            setUser(currentUser)
        })


        return ()=>{
            unsubscrib()

        }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        loginUser,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;