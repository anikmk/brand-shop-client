import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)


const Provider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loader,setLoader] = useState(true)

    const createUser = (email,password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
            
    }
    const logOut = () => {
        setLoader(true);
        return signOut(auth)
    }

    const logIn = (email,password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleProvider = new GoogleAuthProvider()
    const loginWithGoogle = () => {
        setLoader(true);
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        const unSubscrive  = onAuthStateChanged(auth,currentUser => {
            console.log('current user',currentUser);
            setUser(currentUser);
            setLoader(false);
        })
        return () => {
            unSubscrive();
        }
    },[])


    const userInfo = {
        user,
        createUser,
        logOut,
        logIn,
        loginWithGoogle,
        loader

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;