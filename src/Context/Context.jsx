import { createContext } from 'react';

export const MyAuthContext = createContext(null);

const Context = ({ children }) => {
  const user = { name: 'Badhsa Boli' };
  const data = { user };

  return (
    <MyAuthContext.Provider value={data}>{children}</MyAuthContext.Provider>
  );
};

export default Context;
