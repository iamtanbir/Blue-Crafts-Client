import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, GithubAuthProvider, onAuthStateChanged, signOut, updateCurrentUser, updateProfile} from 'firebase/auth'
import app from "../firebase/firebase";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const userInfo = auth.currentUser
    const googleProvider = new GoogleAuthProvider
    const githubProvider = new GithubAuthProvider
    const [userLoggedin ,setUserLoggedin] = useState(null)
    const [loader,setLoader] = useState(true)
    
    useEffect(()=>{
            
        onAuthStateChanged(auth,user=>{
                setUserLoggedin(user)
                setLoader(false)


    })
    },[])

    const createAccount = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const loginWithGoogle = ()=>{
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }
    
    const loginWithGithub = ()=>{
        setLoader(true)
        return signInWithPopup(auth,githubProvider)
    }

    const updateProfileData = (user)=>{
        setLoader(true)
        return updateProfile(auth.currentUser,user)
    }

    const logOut = ()=>{
        setUserLoggedin(false)
        return signOut(auth)
    }

    const userHandlers = {createAccount,login,loginWithGoogle,loginWithGithub, userLoggedin, userInfo, updateProfileData, loader,setLoader, logOut}

    
    return (
        <AuthContext.Provider value={userHandlers}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;