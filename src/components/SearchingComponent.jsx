import { useEffect, useState } from "react";
import List from "../List.json";
import Cards from "./Cards";

function SearchingComponent() {

    const [c,setC] = useState(()=>List.filter((i)=> 
            i.name.includes(localStorage.getItem("serValue"))||
            i.color.includes(localStorage.getItem("serValue"))||
            i.type.includes(localStorage.getItem("serValue"))            
        ));

    //const c = List.filter((i)=> i.name === localStorage.getItem("serValue"));

    useEffect(()=>{
        //c = List.filter((i)=> i.name === localStorage.getItem("serValue"))
        localStorage.setItem("serValue",{c});
    },[localStorage.getItem("serValue")]);

  return (
    <>

        {
            c.map((i)=>(                
                    <Cards item={i} key={i.id} />                
            ))
        }
    </>
  )
}

export default SearchingComponent;