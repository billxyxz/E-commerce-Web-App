import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


const AuthContext = createContext()

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export function AuthProvider({children}){
  const [currentUser, setCurrentUser] = useState(null)

  function signup(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function signin(email, password){
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout(){
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
    })

    return unsubscribe;
  }, [])

  const value = {
    signup,
    signin,
    logout,
    currentUser
  }

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}