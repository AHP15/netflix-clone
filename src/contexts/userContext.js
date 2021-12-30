import React, { useContext } from "react";
import { useLocalStorage} from "../hooks/localstorage";

const userContxt = React.createContext();

export function useUser(){
    return useContext(userContxt);
}

export function UserProvider({children}){

    const [user, setUser] = useLocalStorage("user", {
        isLoggedIn: false,
        email: "",
        password: "",
    });

    return (
        <userContxt.Provider value={{user, setUser}}>
            {children}
        </userContxt.Provider>
    );
}