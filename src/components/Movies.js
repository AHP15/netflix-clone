import React, { useEffect, useState } from 'react';
import "../styles/Movies.css";
import movieService from "../service/api";
import { IconButton, Skeleton } from '@mui/material';
import MovieCard from './MovieCard';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function Movies({category, query}) {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    function nextPage(){
        setPage(page => page >=100? 1: page+1);
        document.querySelector(".movies_container").scrollIntoView({behavior:"smooth"})
    }

    function prevPage(){
        setPage(page => page <=1? 100: page-1);
        document.querySelector(".movies_container").scrollIntoView({behavior:"smooth"})
    }
    
    useEffect(() => {
       async function fetchMovies(){
           try{
               setLoading(true);
               let data;
               if(category === "trending"){
                  data = await movieService.trending(page);
                }else if(category === "discoverMovies"){
                   data = await movieService.discoverMovies(page);
                }else{
                   data = await movieService.discoverTV(page);
                }
                setMovies(data.results);
                setLoading(false);
           }catch(err){
               alert(err);
               setLoading(false);
           }
       }

       fetchMovies();
    }, [page, category]);

    if(loading){
        return (
            <div className='laoding_container'>
                {
                    Array(10).fill(null).map(() => (
                        <Skeleton
                            key={String(Math.random())}
                            sx={{ bgcolor: 'grey.900' }}
                            variant="rectangular"
                            width={300}
                            height={118}
                            className='skeleton'
                        />
                    ))
                }
            </div>
        );
    }

    return (
        <div className='movies_container'>
            <h1>{category}</h1>
            <div className='movies'>
            {
                movies.map(movie => {
                    let movieName = movie?.original_title ?? movie?.title ?? movie?.original_name;
                    if(movieName.indexOf(query) !== -1){
                        return (
                            <MovieCard key={movie.id} props={movie} />
                        );
                    }

                    return null;
                })
            }
            </div>

            <div className='movie_page'>
                <div className='icon_btn' onClick={prevPage}>
                    <IconButton>
                       <ChevronLeftIcon />
                    </IconButton>
                </div>
                <h1>{page}</h1>
                <div className='icon_btn' onClick={nextPage}>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

