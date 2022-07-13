import { Link } from "react-router-dom";

const MovieList = (props) => {
    // we can write this with destructing
    //const MovieList = {movies} =>{......}
    var movies=props.movies;
    var title=props.title;
        

  
    return (<div className="home-content">
        <h1 id="title">{title}</h1>

        {
            movies.map((movies) => (

                <div className="movie-list">
                    <Link to={`/movieDetail${movies.id}`}>
                    <h1 id="mv1">Movies :{movies.mname}</h1>
                    <h3>Hero name:{movies.hero}</h3>
                    <h3>heroine:{movies.heroine}</h3>
                    <h3>category:{movies.category}</h3>
                    </Link>
                    {/* <button onClick={()=>{handleDelete(movies.id)}}>Delete</button> */}
                </div>))
        }

    </div>
    );
}

export default MovieList;
