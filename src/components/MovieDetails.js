import React, { useEffect, useState } from 'react';
import { useMovie } from "../contexts/MovieContext";
import { useNavigate } from 'react-router-dom';
import movieService from "../service/api";
import "../styles/MovieDetails.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { IconButton } from '@mui/material';

let baseImgUrl = "https://image.tmdb.org/t/p/original";
let youtube = "https://www.youtube.com/embed/"

export default function MovieDetails() {

    const [loading, setLoading] = useState(false);
    const [movieDetail, setMovieDetail] = useState(null);
    const {movie, setMovie} = useMovie();
    const navigate = useNavigate();

    function handleBack(){
        setMovie({
            id:null,
            isMovie: true,
        });
        navigate("/")
    }

    useEffect(() => {
        async function fetchMovie(){
            setLoading(true);
            if(movie.id){
                try{
                    let data;

                    if(movie.isMovie){
                        data = await movieService.getMovie(movie.id);
                    }else{
                        data = await movieService.getTv(movie.id);
                    }

                    setMovieDetail(data);
                    setLoading(false);
                    console.log(data);
                }catch(err){
                    console.log(err);
                    setLoading(false);
                }
            }
        }

        fetchMovie();
    }, [movie]);

    if(loading || !movieDetail){
        return <h1>loading</h1>
    }

    return (
        <div className='movie_details' style={{
            backgroundImage: `url(${baseImgUrl+(movieDetail?.backdrop_path || movieDetail?.poster_path)})`
        }}>
            
            <div className='back_btn' onClick={handleBack}>
            <IconButton>
                <ChevronLeftIcon color='white' />
            </IconButton>
            </div>
            <div className='details_left'>
                <h1>
                    {
                    movieDetail?.original_title ?? movieDetail?.title ?? movieDetail?.original_name
                    }{movieDetail?.name? " | "+movieDetail?.name:""}
                </h1>

                <h3>{movieDetail?.overview}</h3>

                <h3>Original Language <p>{movieDetail?.original_language}</p></h3>

                <a rel="noreferrer" target="_blank" href={movieDetail?.homepage}>Home page</a>
            </div>
            <div className='details_right'>
                <h1>Trailer</h1>
                <iframe
                    width="100%"
                    height="80%"
                    src={youtube+movieDetail?.videos.results[0].key}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}

