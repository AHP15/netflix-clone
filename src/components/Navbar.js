import React from 'react';
import "../styles/Navbar.css";
import { useUser } from "../contexts/userContext";

export default function Navbar({setCategory,navOpened, query, setQuery, setOpened}) {
    
    const {setUser} = useUser();
    function handelLogout(){
        setUser({
            isLoggedin: false,
            email:"",
            password:""
        });
        window.location.reload();
    }

    function handleClick(category){
        setCategory(category);
        setOpened();
    }

    return (
        <div className={`navbar ${navOpened? "active":""}`}>
            <div className=''>
                <input type="text" value={query} onChange={(e) =>{ setQuery(e.target.value) }} />
                <button onClick={setOpened}>Search</button>
            </div>
            <p onClick={() => {handleClick("trending")}}>Trending</p>
            <p onClick={() =>{handleClick("discoverMovies")}}>Discover Movies</p>
            <p onClick={() =>{handleClick("discoverTv")}}>Discover TV shows</p>
            <p onClick={handelLogout}>Log out</p>
        </div>
    )
}
