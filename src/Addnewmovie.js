import { useState } from "react";
import {useHistory} from "react-router-dom";
import useFetch from "./useFetch";

const Addnewmovie = () => {
    const [mname, setmname] = useState("")
    const [hero, sethero] = useState("")
    const [heroine, setheroine] = useState("")
    const [catagory, setcatagory] = useState("")
    const [poster, setposter] = useState("")
    const [trailer, settrailer] = useState("")

    let history=useHistory();
    let {data:movies}=useFetch("http://localhost:4000/movies")

    const handleSubmit = (e) => {

        e.preventDefault();//it will prevent the page reload.

        let newMovie = { mname, hero, heroine, catagory, poster, trailer }

        fetch("http://localhost:4000/movies",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newMovie)
            })
            .then(()=>{
                alert("movie has been added..!!");
                history.push(`/movieDetail${((movies[movies.length-1].id)+1)}`)
            })
    }


    return (
        <div className="create-movie">

            <h1>Add new movie to list</h1>
            <form id="input" onSubmit={handleSubmit}>
                <label htmlFor="">Movie Name:</label><input type="text" placeholder="enter movie name"
                    value={mname} onChange={(e) => { setmname(e.target.value); }} />
                <label htmlFor="">Hero :</label><input type="text" placeholder="enter the hero name"
                    value={hero} onChange={(e) => { sethero(e.target.value); }} />
                <label htmlFor="">Heroine :</label><input type="text" placeholder="enter the heroimene name"
                    value={heroine} onChange={(e) => { setheroine(e.target.value); }} />
                <label htmlFor="">Catagory :</label><input type="text" placeholder="enter the catagory"
                    value={catagory} onChange={(e) => { setcatagory(e.target.value); }} />
                <label htmlFor="">poster:</label><input type="url" placeholder="poster URL"
                    value={poster} onChange={(e) => { setposter(e.target.value); }} />
                <label htmlFor="">trailer :</label><input type="url
                
                " placeholder="trailer URL"
                    value={trailer} onChange={(e) => { settrailer(e.target.value); }} />


                <button type="submit">Add movie</button>
            </form>

        </div>
    );
}

export default Addnewmovie;