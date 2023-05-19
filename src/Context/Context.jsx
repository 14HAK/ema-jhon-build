import { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../firebaseConfig/firebase.config';

export const MyAuthContext = createContext(null);

const Context = ({ children }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const auth = getAuth(app);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const data = { errorMsg, setErrorMsg, createUser };

  return (
    <MyAuthContext.Provider value={data}>{children}</MyAuthContext.Provider>
  );
};

export default Context;
