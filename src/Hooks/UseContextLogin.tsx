import { useState, useEffect, createContext, useContext } from 'react';
import {FC} from 'react';



const AppCtx = createContext<any>(null);


interface prop {
    children: JSX.Element,
}

const UseContextLogin : FC<prop> = ({ children }) => {
    const [token, setToken] = useState<string | null> (null);
    const [userName, setUserName] = useState<string | null> (null);


    useEffect(() => {
        if (typeof window.sessionStorage.getItem('token') !== null) {
          const tokenTemporary : string | null = window.sessionStorage.getItem('token')
          const userNameTemporary: string | null = window.sessionStorage.getItem('userName')
          setToken(tokenTemporary );
          setUserName(userNameTemporary);
        }
    }, [])

    return (
      <AppCtx.Provider value={{token : token, setToken : setToken, userName : userName, setUserName: setUserName}}>
        {children}
      </AppCtx.Provider>
    );
  };

  export const useLoginContext = () => useContext(AppCtx);

  export default UseContextLogin;