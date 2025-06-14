import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Pagination from "./Pagination";
import Blogs from "./Blogs";

const TagPage = ()=> {
    const {loading} = useContext(AppContext);
    const navigation = useNavigate();
    const location = useLocation();
    let tag = location.pathname.split("/").at(-1);

    return (
        <div>
            <Header/>

            <div>
                <button onClick={()=>navigation(-1)}>Back</button>
                <h2>Blogs Tagged <span>#{tag}</span></h2>
            </div>

            <Blogs/>
        </div>
    )
}

export default TagPage;