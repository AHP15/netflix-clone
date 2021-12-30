import { useNavigate } from "react-router-dom";
import { useMovie } from "../contexts/MovieContext";
import "../styles/MovieCard.css";
let baseImgUrl = "https://image.tmdb.org/t/p/original";

function MovieCard({props}){
    
    let url = props?.backdrop_path || props?.poster_path;
    const { setMovie } = useMovie();
    const navigate = useNavigate()

    function handleClick(){
        setMovie({
            id: props.id,
            isMovie: props.media_type === "movie"
        })

        navigate("/more");
    }

    return (
        <div
           className="movie_card"
           style={{
               backgroundImage: `url(${baseImgUrl+url})`,
           }}
        >   
            <h3>{props?.original_title ?? props?.title ?? props?.original_name}</h3>
            <p onClick={handleClick} className="movie_card_more">MORE</p>
        </div>
    );
}

export default MovieCard;