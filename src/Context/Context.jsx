import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import app from '../firebaseConfig/firebase.config';

export const MyAuthContext = createContext(null);

const Context = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const googleLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //manage users from google
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setIsLoading(false);
      } else {
        console.log('error occurred!');
      }

      return () => {
        unsubscribe();
      };
    });
  }, [auth]);

  const data = {
    errorMsg,
    setErrorMsg,
    createUser,
    googleLogin,
    logIn,
    logOut,
    currentUser,
    setCurrentUser,
    isLoading,
  };

  return (
    <MyAuthContext.Provider value={data}>{children}</MyAuthContext.Provider>
  );
};

export default Context;
