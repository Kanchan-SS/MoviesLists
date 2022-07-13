import { useState,useEffect } from "react";

const useFetch = (resource) => {
    var [data, setData] = useState(null);
    var [pending, setPending] = useState(true);
    var [error, setError] = useState(null); 

    useEffect(() => {

        setTimeout(() => {

            fetch(resource) //fetcg will resolve and returns responce object
                //.then((response) => { return response.json()})// accepts response from resolve method and return json data through json()
                .then((response)=>{
                    if(response.ok===false)
                    {
                        throw Error("Data that you are finding is not present")
                    }
                    return response.json();
                })
                .then((data) => { setData(data); setPending(false) })// accept data returned from json () and set it to movies.
                // .catch((error) => { console.log(error.message) })
                .catch((error)=> { setError(error.message);setPending(false)});//when json terminal is killed we catch it in catch block

        }, 2000);
    }, [])



    return ( {data,pending,error} );
}
 
export default useFetch;