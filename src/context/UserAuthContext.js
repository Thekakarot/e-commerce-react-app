// UserAuthContext.js

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/Firebase";

const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) setUser(authUser);
      else setUser(null);

      // console.log(user);
    });

    

    return () => {
      // Cleanup the subscription when the component unmounts
      unsubscribe();
    };
    // console.log(user);
  }, [user]);

  return (
    <UserAuthContext.Provider value={{ user }}>
      {children}
    </UserAuthContext.Provider>
  );
};

const useUserAuth = () => {
  return useContext(UserAuthContext);
};

export { UserAuthContextProvider, useUserAuth };
