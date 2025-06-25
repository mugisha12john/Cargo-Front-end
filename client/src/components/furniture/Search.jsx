import AllFurniture from "./AllFurniture";
import Header from "../manager/Header";
import { useState } from "react";
export default function Search(){
    const [searchQuery,SetsearchQuery] = useState("")
    return(<>
    <Header SetsearchQuery={SetsearchQuery}/>
    <AllFurniture searchQuery={searchQuery}/>
   </>)
}