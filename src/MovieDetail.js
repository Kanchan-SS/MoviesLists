import { useParams ,useHistory} from "react-router-dom";
import MovieList from "./MovieList";
import useFetch from "./useFetch";

const MovieDetail = () => {

    let {id}=useParams();
    let history=useHistory();
    let {data:movie, pending, error}=useFetch(`http://localhost:4000/movies/${id}`);

const handleDelete = () => 
    {
        fetch(`http://localhost:4000/movies/${id}`,{method:"DELETE"})
        .then(()=>{
        alert("this movie has been removed from the list");
        // history.push("/");
        history.goBack();
    })
    }
     
    
    return ( 
        <div className="movie-detail">
            {pending && <h1 align="center">loading.....</h1>}
            {error && <h1 align="center">{error}</h1>}
            <section>
            {movie &&
            
           
            <div>
            <img src={movie.poster}alt="not found" id="img" />
            <h2>Movie Name :{movie.mname}</h2>
            <h2>hero :{movie.hero}</h2>
            <h2>heroine :{movie.heroine}</h2>
            <h2>category: {movie.category}</h2>
            <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe><br></br>
            <button onClick={handleDelete}>Delete</button>
            </div>}
            </section>
        </div>
     );
}
 
export default MovieDetail;