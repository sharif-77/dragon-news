/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
        setLoading(false)
      setUser(currentUser);
    });

    return () => {
      subscribe();
    };
  }, []);

  const singUpWithEmailAndPass = (email,password)=>{
      setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const loginWithEmailAndPass = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
 
  const logOut= ()=>{
    setLoading(true)
    return signOut(auth)
  }
  
  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = ()=>{
    setLoading(true)
    signInWithPopup(auth, googleProvider)
  }
  



  const authInfo = {
    user,
    loading,
    singUpWithEmailAndPass,
    loginWithEmailAndPass,
    loginWithGoogle,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
