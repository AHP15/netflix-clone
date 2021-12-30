import { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Movies from "./Movies";
import Banner from "./Banner";

function Dashboard(){

    const [state, setState] = useState({
        query:"",
        category: "trending",
        navOpened:false,
        inScroll: false,
    });

    function handleSearch(text){
        setState(prevState => {
            return {
                ...prevState,
                query:text,
            };
        });
    }

    function handleNavbar(){
        setState(prevState => {
            return {
                ...prevState,
                navOpened:!prevState.navOpened,
            };
        });
    }
    function handleCategory(text){
        setState(prevState => {
            return {
                ...prevState,
                category:text,
            };
        });
    }

    useEffect(() => {
        console.log(state.category);
        function handleScroll(){
            if(window.scrollY > 100){
                setState(prevState => {
                    return {
                        ...prevState,
                        inScroll: true
                    };
                })
            }else{
                setState(prevState => {
                    return {
                        ...prevState,
                        inScroll: false
                    }
                })
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [state.category]);

    return (
        <div className="dashboard" style={{backgroundColor: "black", minHeight:"1800px"}}>
            <Header
                navOpened={state.navOpened}
                setOpened={handleNavbar}
                inScroll={state.inScroll}
            />
            <Navbar
                setOpened={handleNavbar}
                navOpened={state.navOpened}
                query={state.query}
                setQuery={handleSearch} 
                setCategory={handleCategory}
            />
            <Banner />
            <Movies category={state.category} query={state.query} />
        </div>
    );
}

export default Dashboard;