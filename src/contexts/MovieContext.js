import React, { useContext } from "react";
import { useLocalStorage } from "../hooks/localstorage"

const movieContxt = React.createContext();

export function useMovie(){
    return useContext(movieContxt);
}

export function MovieProvider({children}){

    const [movie, setMovie] = useLocalStorage("movie",{
        id: null,
        isMovie: true,
    });

    return (
        <movieContxt.Provider value={{movie, setMovie}}>
            {children}
        </movieContxt.Provider>
    );
}