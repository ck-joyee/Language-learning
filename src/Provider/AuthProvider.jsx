import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
   
  } from "firebase/auth";
import app from "../Firebase/firebase.config"

export const AuthContext = createContext();
const auth = getAuth(app);

    const AuthProvider = ({ children }) => {
        const [user, setUser] = useState(null);
        const [loading, setLoading] = useState(true);
      
        const createUser = (email, password, displayName) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              return updateProfile(user, { displayName })
                .then(() => {
                  setUser(user);
                  setLoading(false);
                });
            });
        };
      
        const signIn =  (email, password) => {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password)
        }
      
        const logOut  = () => {
          setLoading(true);
         return signOut(auth);
        }

        const provider = new GoogleAuthProvider();

        const googleLogIn =()=>{
          return signInWithPopup(auth, provider);
        }

        
    const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
          displayName: name, photoURL: photo
      });
  }
      
        
      
        useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("current user", currentUser);
            setLoading(false);
          });
          return () => {
            return unsubscribe();
          }
        }, []);
      
        const authInfo = {
          user,
          loading,
          createUser,
          signIn,
          logOut,
          updateUserProfile,
          googleLogIn
        };
    return (
        <AuthContext.Provider value={authInfo}>{children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;