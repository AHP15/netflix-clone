import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue){

    const [value, setValue] = useState(() => {
        const json = localStorage.getItem(key);

        if(json !== null) return JSON.parse(json);
        if(typeof initialValue === 'function') return initialValue();
        return initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}
