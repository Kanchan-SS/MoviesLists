import MovieList from "./MovieList";
import useFetch from "./useFetch";
//useEffect is called as HOOK.

const Home = () => {

    //-----use fetch is invoked-----
    let {data:movies,pending,error}=useFetch(" http://localhost:4000/movies");

   
    return (
        <div>
            {pending && <h1 align="center">loading.....</h1>}
            {error && <h1 align="center">{error}</h1>}
            {movies && <MovieList movies={movies} title="MOVIES COLLECTIONS..." />}

            {/* <MovieList movies={movies.filter((movies)=>movies.category=="Action")}title="Action Movies..."/>
        <MovieList movies={movies.filter((movies)=>movies.category=="drama")}title="Drama Movies..."/> */}

        </div>



        //---------------login----------
        // <div className="login-content">
        // <h1>Login Form</h1>
        // <input type="text" placeholder="Email or phone"/><br></br>
        // <input type="password" placeholder="password" /><br></br>
        // <a href="">Forgot password?</a>

        // <button>Login</button>
        // <span>not a member?</span>
        // <a href="">Signup now</a>
        // </div>


    );
}
export default Home;    