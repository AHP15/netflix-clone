import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const api_key = "754455a3529b4a5c122ee57f132f085c"

//https://api.themoviedb.org/3/fFT0IgqtCOks4munDTxQwkvNJkd.jpg

class MoviesService{
    discoverMovies(page, genre){
        return axios.get(
            baseUrl+`/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}&with_watch_monetization_types=flatrate${genre? `with_genres=${genre}`:""}`
        )
        .then(response => response.data);
    }

    discoverTV(page, genre){
        return axios.get(
            baseUrl+ `/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0${genre? `with_genres=${genre}`:""}`
        )
        .then(response => response.data);
    }

    trending(page){
        return axios.get(
            baseUrl+`/trending/all/week?api_key=${api_key}&page=${page}`
        )
        .then(response => response.data);
    }

    getMovie(movie_id){
        return axios.get(
            baseUrl+`/movie/${movie_id}?api_key=${api_key}&language=en-US&append_to_response=videos`
        )
        .then(response => response.data);
    }

    getTv(tv_id){
        return axios.get(
            baseUrl+`/tv/${tv_id}?api_key=${api_key}&language=en-US&append_to_response=videos`
        )
        .then(response => response.data);
    }
}

export default new MoviesService();