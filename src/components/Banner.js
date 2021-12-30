import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useMovie } from '../contexts/MovieContext';
import movieService from "../service/api";
import "../styles/Banner.css";

let baseImgUrl = "https://image.tmdb.org/t/p/original";

export default function Banner() {
    const [myMovie, setMyMovie] = useState(null);

    const { setMovie } = useMovie();
    const navigate = useNavigate()

    function handleClick(){
        setMovie({
            id: myMovie.id,
            isMovie: myMovie?.media_type === "movie"
        })

        navigate("/more");
    }

    useEffect(() => {
        function fetchData(){
            movieService.trending(1)
            .then(data => {
                let randomIdx = Math.floor(Math.random() * 19);
                setMyMovie(data.results[randomIdx]);
            })
            .catch(err => {
                alert(err);
            })
        }

        fetchData();
    }, []);

    return (
        <div className='banner' style={{
            backgroundImage: `url(${baseImgUrl+(myMovie?.backdrop_path || myMovie?.poster_path)})`
        }}>
            <div className='banner_info'>
                <h1>{myMovie?.original_title ?? myMovie?.title ?? myMovie?.original_name}</h1>
                <p>{myMovie?.overview.slice(0, 200)+"..."}</p>
                <button onClick={handleClick}>MORE</button>
            </div>
            <div className='overlay'></div>
        </div>
    )
}

